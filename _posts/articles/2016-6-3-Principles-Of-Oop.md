---
layout:  article
title:  The 4 Principles of OOP
categories:  articles
tags:  [oop, oop principles, objects, encapsulation, abstraction, interfaces, polymorphism]
comments:  true
ads:  true
image:
 feature: principles-of-oop.jpg
 teaser: principles-of-oop.jpg
 thumb: principles-of-oop.jpg
---

For a program to be said to be object oriented, some principles have to be followed. These principles are crucial to enable the said program to be effective in order to be able to meet the needs the program was designed for.
The four principles are:

+ Encapsulation
+ Abstraction
+ Inheritance
+ Polymorphism

## Encapsulation

This is the hiding of data implementation by restricting access to *setters* and *getters* Getters are accessor methods that allows the *state* of an object to be retrieved, while setters are mutator methods that allows on objects state to be modified. This enables the original data (variables or fields) to be protected as they are not directly modified, rather they are accessed through these methods. This enables one to  make changes to a class without the worry that they are going to break other code that is using and calling the same class for information. Here is a brief example:

```Java
public class Person{
  private String fName;
  private String lName;
  private String email;
  
  //Constructor
  public Person(String fName,String lName,String email){
    this.fName = fName;
    this.lName = lName;
    this.email = email.
  }
  
  //Getter and setter methods for each field
  public String getFname{
    return fName;
  }
  
  public void setfName(String fName){
    this.fName = fName;
  }
  
  public String getLname{
    return lName;
  }
  
  public void setlName(String lName){
    this.lName = lName;
  }
  
  public String getEmail{
    return email;
  }
  
  public void setEmail(String email){
    this.email = email;
  }
}
```
> Above is a Person class that contains the persons first name(`fName`), last name(`lName`) and email(`email`)

This Person class fields `fName`, `lName` and `email` are hidden from outside and can not be accessed directly. However, they can be accessed through getter and setter methods, i.e. `getFname`, `getLname`, `getEmail`, `setFname`, `setLname` and `setEmail`. 

```Java
import Person
public class Main{
  public static void main(String args[]){
    //creates a new Person object
    Person john = new Person("John","Hancock","john@example.com");
    System.out.println(john.fName); //will return an error, as this field can not be directly accessed
    System.out.println(john.getFname());//will return John
  }
}
```
> Above is a simple demonstration of encapsulation. `john` object is created using a custom constructor, which initializes the fields (`fName`,`lName` and `email`). the `getFname` is used to access the first name John.

## Abstraction

Abstract means a concept or an Idea which is not associated with any particular instance. Using abstract class/interface we express the intent of the class rather than the actual implementation. In a way, one class should not know the inner details of another in order to use it, just knowing the interfaces should be good enough. Abstraction denotes a model, a view, or some other focused representation for an actual item. 

When we think about it every noun in the language is a category. When we say "a bird", we are not referring to a specific bird, but to the category that contains all the birds in the world, and describe them. So when I say "a bird" most people have a general idea of what I mean, what information they will have about each individual object that will be in this category and what kind of action it could do. 

```Java
public class Bird{
  private String name;
  private float height;
  private float weight;
  private boolean fly;
  
  //constructor
  public Bird(String name,float height, float weight, boolean fly){
    this.name = name;
    this.height = height;
    this.weight = weight
    this.fly = fly;
  }
  
  //getters and setters
  public String getName(){
    return name;
  }
  
  public void setName(String name){
    this.name = name;
  }
  
  public float getHeight(){
    return height;
  }
  
  public void setHeight(float height){
    this.height = height;
  } 
  
  public float getWeight(){
    return weight;
  }
  
  public void setWeight(float weight){
    this.weight = weight;
  }
  
  public boolean getFly(){
    return fly;
  }
  
  public void setFly(boolean fly){
    this.fly = fly;
  }
  
  public boolean canFly(){
    //code to determine if the bird can fly and returns a boolean value
  }
  
  public boolean canChirp(){
    //code to determine if the bird can chirp and returns a boolean value
  }
}
```
> Above is a simple class that has the states(fields) of a bird class.

This is an example of an abstract type of what a bird object is to us outside of the software world. The abstract bird is defined by the operations that can be performed on it, and the information we can get from it and give to it.

## Inheritance

This is the ability of a new class to be created, from an existing class by *extending* it. The parent class is referred to as the **superclass** or **base class** or **parent class** or **ancestor class**. The *superclass* is the class that defines all the properties and methods of the subclasses. Objects can relate to eachother with either a **has a**, **uses a** or an **is a** relationship.  *Is a* is the inheritance way of object relationship. A proper example is a vehicle class. All cars are vehicles, but they do not have the same properties and behaviours. They all inherit from the vehicle class, but there are features that are not common in all, which makes every vehicle object unique from the other. A truck is not the same from a sedan and a motorbike is not the same as a trailer, despite the fact that they are all vehicles. Let us look at an example:

```Java
public class Vehicle{
  private String name;
  private String model;
  private int engineSize;
  private int wheels;
  private int doors;
  pritave int seats;
  int speed = 0;
  int gear = 1;  
  
  //constructor
  public Vehicle(String name, String model,int engineSize,int wheels,int doors,int seats){
    this.name = name;
    this.model = model;
    this.engineSize = engineSize;
    this.wheels = wheels;
    this.doors = doors;
    this.seats = seats;
  }
  
  //getters and setters
  public String getName(){
    return name;
  }
  
  public void setName(String name){
    this.name = name;
  }
  
    public String getName(){
    return name;
  }
  
  public void setName(String name){
    this.name = name;
  }
  
  public String getModel(){
    return model;
  }
  
  public void setModel(String model){
    this.model = model;
  }
  
  public int getEngineSize(){
    return engineSize;
  }
  
  public void setEngine(String engineSize){
    this.engineSize = engineSize;
  } 
  
  public String getWheels(){
    return wheels;
  }
  
  public void setWheels(String wheels){
    this.wheels = wheels;
  } 
  
  public String getDoors(){
    return doors;
  }
  
  public void setSeats(String seats){
    this.seats = seats;
  }
  
  //behaviours of a typical Vehicle object
  public void changeGear(int newValue) {
         gear = newValue;
  }

  public void speedUp(int increment) {
         speed = speed + increment;   
  }

  public void applyBrakes(int decrement) {
       speed = speed - decrement;
  }

  pulic void printStates() {
   System.out.println(" speed:" + speed + " gear:" + gear);
  }
}
```
> `Vehicle` class that describes all the properties of a vehicle object. This is the superclass

The class above can be extended as shown below
```Java
public class Truck extends Vehicle{
  //perform actions here specific to a Truck object  
}

public class MotorBike extends Vehicle{
  //perform actions specific to a MotorBike Object
}
```
> `Truck` class gets all the properties of the `Vehicle` class

Importance of inheritance:

+ Reuse of code
+ Prevention of new bugs
+ Reducing code size
+ Code readability

## Polymorphism

It means one name many forms. Polymorphism manifests itself by having multiple methods all with the same name, but slightly different functionality. It is further of two types:
+ *Static (or compile-time) polymorphism* is achieved using method overloading
+ *Dynamic(or runtime) polymorphism* using method overriding.

### Static polymorphism (or compile-time)

A method having same name can have multiple implementations, depending upon the argument(s) passed to it. For example, there can be three methods called add(int x, int y), add(float x, float y) and add(String x,String y). The compiler decides at compile time which method will be called by looking at the signature of the called method.
```Java
public class StaticPoly{
  public static void main(String[] args){
    int xInt = 5;
    int yInt =4;
    String xStr = "5";
    String yStr = "4";
    float xFloat = 5.0;
    float yFloat = 4.0;
    
    System.out.println(add(xInt, yInt)); //output 9
    System.out.println(add(xFloat, yFloat)); // output 9.0
    System.out.println(and add(xStr,yStr)); //output "9"
  }
  
  public static int add(int x, int y){
    return x+y;
  }
  public static float add(float x, float y){
    return x+y;
  }
  public static String add(String x,String y){
    int result = Integer.parseInt(x) + Integer.parseInt(y);
    return String.valueOf(result);
  }
}
```
> Demonstration of static polymorphism or method overloading

### Dynamic polymorphism

A subclass may override a superclass method for more specific behaviour. The decision of which method to call is made at runtime. The calling code may declare the object to be of parent type. At runtime, depending upon the actual type of the object, the correct method will be invoked. An example may be of open() method for superclass Document. The subclasses doc and xls both override open() method. But it may not be known beforehand which document will be opened. At runtime, depending upon the object on which open() is called, the correct Document object's open() method will be invoked.

Method overriding allows a subclass to override a specific implementation of a method that is already provided by one of its super-classes.
```Java
public class Complex
{
    private int real;
    public int Real
    private int imaginary;
    
    public Complex(int real, int imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }    
    public int getReal(){
      return real; 
    }
    
    public int getImaginary(){
      return imaginary; 
    }

    public static Complex operator +(Complex c1, Complex c2){
        return new Complex(c1.Real + c2.Real, c1.Imaginary + c2.Imaginary);
    }

    public override string ToString(){
        return (String.Format("{0} + {1}i", real, imaginary));
    }
}
```
> This class has one overridden method named ToString, which overrides the default implementation of the standard ToString method to support the correct string conversion of a complex number.

``` Java
public class DyanamicPoly{
  public static void main(String[] args){
  Complex num1 = new Complex(5, 7);
  Complex num2 = new Complex(3, 8);

  // Add two Complex numbers using the overloaded plus operator
  Complex sum = num1 + num2;

  // Print the numbers and the sum using the overriden ToString method
  System.out.println("({0}) + ({1}) = {2}", num1, num2, sum);
  }
}
```

# Conclusion

A good objecto oriented software follows these principles to the letter. These principles make your code easier to read, understand and also are effective when it comes to debugging and upgrading. They also make your code smaller, as you end up writing less code.
