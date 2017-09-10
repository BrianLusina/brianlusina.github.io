---
layout: article
categories:  tech
title: My Journey in Kotlin thus far
excerpt: Kotlin adventures
author: brian_lusina
share: true
tags: [Android, Java, language, kotlin]
image:
 feature: kotlin_feature.png
 teaser: kotlin_thumb.jpg
 thumb: kotlin_thumb.jpg
 credit: Kotlinlang.org
 creditlink:  https://kotlinlang.org
---

It has been a while since my last blog post. And since my last blog post I set out on a journey to learn and grow in learning new technologies and understanding how they work. What really made my adventure exciting was when I discovered a little jewel called Kotlin.
Now, I know it has become a hot topic with almost everyone talking about Kotlin, especially in the Android developer circles and community. Everyone is talking about the new kid on the block (despite the language not actually being that new).

Its recent adoption into creation of mobile applications changes how Android applications are being created, introducing functional programming, extension functions and a huge amount in number of lines written, I can understand why people are ready to jump straight into Kotlin development.

Personally, I am not a Java developer and I always had a bit of a struggle from time to time when it came to Java, especially the verbosity of the language. I appreciate the strictness of the language because it means you have to explicit about what you are trying to achieve and not expect the compiler to read your thoughts. This is quite handy when it comes to building robust applications that will *"stand the test of time"*. Kotlin strives to be less verbose and still perform just as well as Java in the JVM. The fact that it is 100% interroperable with Java means that it can be used side by side and your users will be none the wiser as there will be no difference in how the application performs.

The reason I joined the *Kotlin bandwagon* was because I was hungering to learn something new and Kotlin happened to just land in my radar. Admittedly, I started learning Ruby before Kotlin and what caught my eye with Kotlin was how it brought aspects that I was already familiar with in Python, JavaScript, Java and a bit of Ruby. It made me happy when writing code for Android applications again, I did not cringe when I would think of the number of lines of code I had to write in Java to create an application.

This is not to say that Java is going anywhere, it is still a fantastic language that many systems and organisations still use and will not be abandoned just because there is a new shiny toy that comes with all the fantastic features of a modern language.

What really intrigued me with Kotlin was how I felt like I had more control and flexibility as to how I wrote code for Android. I have to say that I have not tried writing Kotlin code to be used for server side work or front end work (Kotlin can be compiled to JavaScript, read [here](https://kotlinlang.org/docs/reference/js-overview.html) for more), considering that that is what it was intended for in the very beginning, this is because I prefer doing that in Python([Flask](http://flask.pocoo.org/)) and front end work in JavaScript([ReactJs](https://facebook.github.io/react/) for that matter). Just because I love the seperation in my head.

On to my point, there are subtle (or not so subtle) differences when it comes to Kotlin and Java, and there are too many to highlight here, so I shall highlight only those which I felt really helped me write much more concise, readable and extensible code for Android.

### Extension functions

This for me is a huge win when it comes to writing Android applications in Kotlin. It not only reduces boilerplate code, but also greatly makes code much much more readable. I shall give a use-case:

Say, you want to create a rotation animation for an image, which will be a progress spinner of sorts. To do this, you will need to do the following in Java.

```java
ImageView progressImg = findViewById<ImageView>(R.id.rotateImag)
RotateAnimation rotateAnimation = RotateAnimation(0F, 360f, Animation.RELATIVE_TO_SELF,
            0.5f, Animation.RELATIVE_TO_SELF, 0.5f)
rotateAnimation.setInterpolator(new LinearInterpolator())
rotateAnimation.setDuration(800)
rotateAnimation.setRepeatCount(Animation.INFINITE)
progressImg.setAnimation(rotateAnimation)
```
> Java implementation for a Rotation Animation

```kotlin
fun View.createRotateAnimation(duration: Long) {
	val rotateAnimation = RotateAnimation(0F, 360f, Animation.RELATIVE_TO_SELF,
    	        0.5f, Animation.RELATIVE_TO_SELF, 0.5f)
	rotateAnimation.interpolator = LinearInterpolator()
	rotateAnimation.duration = duration
	rotateAnimation.repeatCount = Animation.INFINITE
	this.startAnimation(rotateAnimation)
}
```
> Kotlin implementation for creating a rotation animation on a View

Now, it may not seem like much, but think about how many times you will have to create the rotation implementation in Java. You may end up creating a static method in a final class just to reduce the boilerplate code written.

``` java
final class AnimUtils{
	public static RotateAnimation createRotationAnimation(){
		RotateAnimation rotateAnimation = RotateAnimation(0F, 360f, Animation.RELATIVE_TO_SELF,
    		        0.5f, Animation.RELATIVE_TO_SELF, 0.5f);
		rotateAnimation.setInterpolator(new LinearInterpolator());
		rotateAnimation.setDuration(800);
		rotateAnimation.setRepeatCount(Animation.INFINITE);
		return rotateAnimation;
	}
}

//... somewhere in your code
progressImg.setAnimation(AnimUtils.createRotationAnimation)
```
> Now, this may not be an issue per-say, I mean you have created an easily accessible method to all classes that may need to use it.

Now, how about Kotlin?
The fact that we can create extension functions, which in essence is just adding a function to a class that we do not own. In this case we are simply adding a rotation animation to the View class and this allows use to animate any View by simply calling this function as if it belongs to the Android SDK.

A simple use case
``` kotlin
//... assuming you have already initialized your ImageView/ or view
progressImg.createRotateAnimation(800)
```

And that is all! Now with this you do not have to reference a class' static method in order to run a function. This allows more cleaner and clearer code and of course means you can add much more to the function if the need ever arose.


### Data Classes

Now this for me is another big win. In Java, we usually need to create POJO(Plain Old Java Objects or Java Beans) to represent certain data items or objects in data structures of applications. Usually they could end up being 100s of lines of code involving `hashCodes()`, `toString()` and getter and setter methods. Say for example we want to create a data structure involving a Person object

```java
class Person{
	private String firstName;
    private String lastName;
    private int age;
    private String gender;
    
    public Person(String firstName, String lastName, int age, String gender){
	    this.firstName = firstName;
    	this.lastName = lastName;
	    this.age = age;
    	this.gender = gender;
    }
    
    public String getFirstName(){
	    return firstName;
    }
    
    public void setFirstName(String name){
    	this.firstName = name;
    }
    
    public String getLastName(){
    	return lastName;
    }
    
    public void setlastName(name){
    	this.lastName = name
    }
    
    public int getAge(){
    	return age;
    }
    
    public void setAge(age){
	    this.age = age;
    }
    
    public String getGender(){
    	return gender;
    }
    
    public void setGender(gender){
	    this.gender = gender;
    }
    
    // hashCodes and toString methods
}
```
> Person object in Java

Now, the same in Kotlin is executed in 1 line of code

``` kotlin
data class Person(var firstName : String, var lastName : String, var age : Int, var gender : String)
// the toString, errorCode, hashCode and even copy are autogenerated
```
> Person object in Kotlin

This not only reduces boiler plate code, but ensures that I concentrate on how this object will be used, instead of constantly thinking whether I correctly implemented a getter/setter method to the class or whether there is a `toString()` method implemented so I do not get an odd looking memory location hex String.


### Named and Optional Arguments

Now this will be the final thing I shall write about in this post. Named arguments in functions are common in languages such as `Python`. This allows us to, for example refer to a specific argument for a given parameter instead of trying to mentally remember if position two takes a `Double` or a `Long` given that there are 5 parameters to pass in into the given function.

I shall write a simple Kotlin function that allows optional arguments and which in turn will deal with named arguments. Say, you are writing a function that has 5 arguments of which 2 are optional(have default values)

``` kotlin
// calculates distance of object from another object given its coordinates and the speed in which it is moving
fun calculateDistance(x : Int, y: Int, z: Int, speed: Double = 0.0, other : Any) : Int{
	val dx = other.x - x
	val dy = other.y - y
	val dz = other.z - z
    val ds = if(speed != 0.0) other.speed - speed else speed
    // some awesome distance calculating algorithm
    
    return distance
}

// usage, PositionElement is a simple class that randomly places the object on a plane 
// given its x, y and z co-ordinates and its speed
val A = PositionElement(5, 6, 15, 8.5) 
val B = PositionElement(3, 8, 1, 19.5)

// calculate the distance of A from B
distanceForAFromB = calculateDistance(x = A.x, y = A.y, z = A.z, speed = A.speed, other = B)

// assuming that A has no speed
val A = PositionElement(5, 6, 15, 0.0)
distanceForAFromB = calculateDistance(x = A.x, y = A.y, z = A.z, other = B)
```

As you can see above, the named arguments help in determining what parameter is being passed where in a function invocation and allows for easier calculation and making your code much much more readable and also of course allows you to not keep switching files to make sure the correct parameter is passed.


#### Conclusion

I am still on this Kotlin journey and I have to say that I am so far pleased with the fact I have been able to write much much more concise code as compare to before. There is so much more to Kotlin than meets the eye and I am so far please with the language and how it brings a sense of happiness when writing code in Kotlin.