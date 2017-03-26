---
layout: article
categories: articles
title: Serializable and Parcelable
excerpt: Difference between Serializable Java interface and Android Parcelable interface
author: brian_lusina
share: true
image:
 feature: parcelable_vs_serializable.jpg
 teaser: parcelable_vs_serializable.jpg
 thumb: parcelable_vs_serializable.jpg
---

When creating Plain Old Java Objects (POJOs) in eith Android or Java, more specifically Java, the aim is to be able to *model* our data in a certain way. To enable easier addition to an Adapter or a database, even easier retrieval from a database using **Jackson** library (what Firebase uses to be able to store and retrieve data).

It is best practice to model data in a specific way using POJO as it allows cleaner code and one also can be able to determine what exactly one object will contain. Say you are storing Employee data. An employee will obviously have data such as *name*, *phone* and *address*. These should be modelled to enable proper structure of each record we will be retrieving from an API (if creating for Android).

Normally, typically, the model will look like this:

``` java
	public class Employee{
		private String name;
    	private int phone;
    	private ArrayList<String> address;

    	public Employee(String name, int phone, ArrayList<String> address) {
	    	this.name = name;
    		this.phone = phone;
    		this.address = address;
		}

		public ArrayList<String> getAddress() {
    		if (!(address == null))
        		return address;
    		else
        		return new ArrayList<String>();
		}

		public String getName() {
    		return name;
		}

		public String getAge() {
    		return age;
		}
	}
```
> This is a typical POJO with *fields*, a *constructor* and *access methods*.

In Android we know that we cannot just pass objects to activities. The objects must be either implements of **Serializable** or **Parcelable** interface to do this. This is where the problem with this class comes in. When trying to pass this object to any other activity it will pose a bit of a problem, of course there a work-arounds, but why stress yourself? KISS.

## Enter Serializable and Parcelable

They both do what you expect them to do. They have similarities, but are not entirely the same.

*Serializable* is a standard **Java** interface. You simply mark a class Serializable by implementing the interface, and Java will automatically serialize it in certain situations.

*Parcelable* is an **Android** specific interface where you implement the serialization yourself. It was created to be far more efficient than Serializable, and to get around some problems with the default Java serialization scheme.

### Serializable

As afformentioned serializable is a standard Java interface. You can just implement Serializable interface and add override methods.The problem with this approach is that **reflection** is used and it is a slow process. This method creates a lot of temporary objects and cause quite a bit of garbage collection. However, a serializable interface is easier to implement.

``` java
	public class Employee extends Serializable{
		private String name;
    	private int phone;
    	private ArrayList<String> address;

        public Employee(String name, int phone, ArrayList<String> address) {
            super();
            this.name = name;
            this.phone = phone;
            this.address = address;
        }

        public ArrayList<String> getAddress() {
            if (!(address == null))
                return address;
            else
                return new ArrayList<String>();
        }

        public String getName() {
            return name;
        }

        public String getAge() {
            return age;
        }
    }
```
> Same implementation of Employee Object with the only differnce being its implementation. Notice the `super()` in the constructor.

Say you have initialized Employee objects like so:
``` java
//Employee instance
Employee mEmployee = new Employee("name",12345679,"Address array here");

//Passing MyObjects instance via intent
Intent mIntent = new Intent(FromActivity.this, ToActivity.class);
mIntent.putExtra("UniqueKey", mEmployee);
startActivity(mIntent);
```
> This creates an instance of the Employee object, adds it to an intent and starts the next activity.

In another class, we obtain the object.

``` java
Intent mIntent = getIntent();
Employee mEmployee = (Employee) mIntent.getSerializableExtra("UniqueKey");
```
> This obtains the object from the intent and casts it to Employee object.
> Allowing you to do as you please in the next activity with the obtain object.

### Parcelable

Parcelable process is much faster than serializable. One of the reasons for this is that we are being explicit about the serialization process instead of using reflection to infer it. It also stands to reason that the code has been heavily optimized for this purpose.

Using the same Employee class but implementing the Parcelable interface.

``` java
    import java.util.ArrayList;
    import android.os.Parcel;
    import android.os.Parcelable;

	public class Employee extends Parcelable{
        private String name;
        private int phone;
        private ArrayList<String> address;

        public Employee(String name, int phone, ArrayList<String> address) {
            this.name = name;
            this.phone = phone;
            this.address = address;
        }

        public Employee(Parcel source){
            phone = source.readInt();
		    name = source.readString();
    		address = source.createStringArrayList();
        }

        @Override
        public int describeContents() {
            return 0;
        }

		@Override
        public void writeToParcel(Parcel dest, int flags) {
        	dest.writeInt(phone);
        	dest.writeString(name);
        	dest.writeStringList(address);
        }

		public static final Creator<Employee> CREATOR = new Creator<Employee>() {

        @Override
        public Employee[] newArray(int size) {
        	return new Employee[size];
    	}

    	@Override
    	public Employee createFromParcel(Parcel source) {
        	return new Employee(source);
    	}
        };

        public ArrayList<String> getAddress() {
            if (!(address == null))
                return address;
            else
                return new ArrayList<String>();
        }

        public String getName() {
            return name;
        }

        public String getAge() {
            return age;
        }
    }
```

Using the same process of creating an instance of the `Employee` Object and passing it to an intent.

``` java
	
    Employee employee = new Employee("name","age","Address array here");

	//Passing MyOjects instance
	Intent mIntent = new Intent(FromActivity.this, ToActivity.class);
	mIntent.putExtra("UniqueKey", employee);
	startActivity(mIntent);

	//Getting MyObjects instance in another activity
	Intent mIntent = getIntent();
	Employee workorder = (Employee) mIntent.getParcelable("UniqueKey");
    
    //You can pass Arraylist of Parceble obect as below
	//Array of MyObjects
	ArrayList<Employee> mEmployees;

	//Passing Employee instance
    Intent mIntent = new Intent(FromActivity.this, ToActivity.class);
    mIntent.putParcelableArrayListExtra("UniqueKey", mEmployees);
    startActivity(mIntent);
    
    // in another activity
    //Getting Employee instance
    Intent mIntent = getIntent();
    ArrayList<Employee> mEmployees = mIntent.getParcelableArrayList("UniqueKey");
```

## In Conclusion

1. Parcelable is faster than serializable interface
2. Parcelable interface takes more time for implemetation compared to serializable interface
3. serializable interface is easier to implement
4. serializable interface create a lot of temporary objects and cause quite a bit of garbage collection
5. Parcelable array can be pass via Intent in android

These are just some of the differences between the two interfaces and of course there is not standard way, however it is always good to have the option of switching between the two.
