---
layout:  article
title:  Objective of Object Oriented Programming.
categories:  articles
modified: 
tags:  [OOP, Objecs]
comments:  true
ads:  true
image: 
 feature: object-oriented-programming.png
 teaser: object-oriented-programming.png
 thumb: object-oriented-programming.png
---

Object Oriented Programming, or as is popularly known in the programming realm OOP is a style of programming that is organized around objects rather than actions. It takes the view that what we really care about are the objects we want to manipulate rather than the logic required to manipulate them. It is a concept that has been widely adopted and is recommended for every software developer. It not only makes life easier for you as a developer but also aids other developers in collaborating easily with your project, as it is lighter as compared to precedural programming.

There are a couple of definitions that I believe are important to understand before delving deeper into OOP. Definitions such as *object*, *classes*, *inheritance*, *interface* and *packages*.

## Object

An *object* is a software bundle of related state and behaviour. They are often used to model real life objects you find in everyday life. They are key to understanding what OOP is all about. Objects are all around us, the trees, your radio, your phone, your pet dog (or cat). All these objects, despite their differences, have 2 things in common. They have **state** and **behaviour**. Your pet has state (name, color, breed) and behaviour (bark, run, wag tail). Your car also has state (current gear, current speed) and behaviour (changing gear, applying breaks, etc). Despite one being a living thing and the other a machine, they both share 2 important characteristics; the have state and behaviour. If you look keenly at these objects keenly, you will notice that they greatly vary in complexity and may find that some contain other objects. This is the center of Object Oriented Programming.

Software objects are no different from the real world objects. They contain states (fields or variables in some programming languages) and behaviour (methods or functions in some programming languages). A software object stores its states in fields and shows its behaviour in methods.

![image](https://docs.oracle.com/javase/tutorial/figures/java/concepts-object.gif "Software Object Courtesy Of Java Documentation")

> Data Encapsulation: Hiding internal state and requiring all interaction to be performed through an object's methods. Methods operate on an object's internal state and serve as the primary mechanism for object-to-object communication. This is a fundamental principle of object-oriented programming.

Objects have a couple of advatages:
+ *Allows for code re-use*: If an object already exists due to it being created by another developer, you can easily plug it into your source code and use it.

+ *Modularity*:  An objects source code can be written independently of the system, allowing it, once created, to be passed around inside the system.

+ *Objects allow information hiding*: By interacting with the objects methods, the internal process remain hidden.

+ *Plug and Play*: If a particular object is problematic to your code, you could simply remove it and use another. This allows you to debug your code easily.


## Class

A class is a *blue print* from which all your objects are created. Take your car or bicycle for example. They are thousands of cars in existence, your car is one of them. Most contain the same nuts and bolts, engine capacity and gearbox. This means they were made from a similar blue print (a similar plan). Your car is said to be an **instance** of the class of objects known as cars. So, basically a car, is a group of related objects with similar states and behaviours.

```Java
class Car {

    int speed = 0;
    int gear = 1;

    void changeGear(int newValue) {
         gear = newValue;
    }

    void speedUp(int increment) {
         speed = speed + increment;   
    }

    void applyBrakes(int decrement) {
         speed = speed - decrement;
    }

    void printStates() {
         System.out.println(" speed:" + 
             speed + " gear:" + gear);
    }
}
```

Above is a Car class that has the states and the behaviours of a car. The states are shown by the `int` variables speed and gear while the behaviours are shown by the `changeGear(int enwValue)`, `speedUp(int increment)`, `applyBrakes(int decrement)` and `printStates()` methods. These methods are how this class will interact with the *outside* world. For those of you familiar with Java programming, you may have noticed that this class lacks the main method. This is becase this is a blue print for all other car objects and not the main application.

```Java
class CarDemo {
    public static void main(String[] args) {

        // Create two different Car objects
        Car car1 = new Car();
        Car car2 = new Car();

        // Invoke methods on the newly created objects
        car1.speedUp(15);
        car1.changeGear(3);
        car1.printStates();

        car2.speedUp(10);
        car2.changeGear(2);
        car2.speedUp(10);
        car2.changeGear(3);
        car2.printStates();
    }
}
```

This is the main application that will test for newly created car objects. The output will be as below.

```Java
speed:15 gear:3
speed:20 gear:3
```

As you can see the `car1` and `car2` objects have the same states and have the same behaviour. This is despite being owned by 2 different people, for example. They will move in the same manner and have the same states.

## Concept of Inheritance

Inheritance, as the name suggests, is *inheriting* characeteriestics from the parent. Like a son having the same nose and hair as the father, or having the same eyes and lips as the mother. This is inheritance. The same applies to programming. The `Car` class created above is the *parent* and the `car1` and `car2` are the *children*. The objects inherit states and behaviours from the `Car` class. This is in lay man terms. The correct terms to use are **superclass** and **subclass**. The `Car` class is the *superclass* and the car objects are the *subclasses* and are thus able to inherit from the `Car` class behaviours such as `changeGear`.

This does not mean that these are the only states and behaviours they could have. Take, the cars above. One could be a Mercedeze Benz and the other a Jeep Wrangler. They are both cars, but they are unique from each other. The Mercedeze Benz has 4 seats, while the Jeep has 2. The engine sizes are different and so are their top speeds and the terrain which they can handle. But, the bottom line, they are cars and *inherit* from the `Car` class. In Java, each class is alowed to have one superclass, while each superclass can have many subclasses.

Below image shows the hierachy of bicycle class.

![bicycle](https://docs.oracle.com/javase/tutorial/figures/java/concepts-bikeHierarchy.gif "Bicycle Hierarchy")

To create a subclass in Java, simply *extend* the superclass and inherit its methods.

```Java
class MercedezBenz extends Car{
    //perform actions here
    //new fields for the mercedez benz go here 
    //and inherited methods as well as specific ones to mercedez benz
}
```

This gives MercedezBenz all the same fields and methods as Car class, yet allows its code to focus exclusively on the features that make it unique. Thus, differentiating it from the JeepWrangler class. This makes code for your subclasses neat and easy to read. Caution must be taken as to properly document state and behavior that each superclass defines.


## Interface

Methods are the means in which objects interact with the world outside. Methods from the object *interface* with the world outside. The buttons on your phone, for example, act as interfaces between the cpu components and you. Allowing you to access the states and behaviour of the phone, states such as *off* and *on* or behaviour such as *calling* or *sending message*.

An interface can be thought of as a group of related methods with empty bodies. If the Car class behaviour was to be described in an interface it would be as follows:

```Java
interface CarBehaviour{

    void changeGear(int newValue);

    void speedUp(int increment);

    void applyBrakes(int decrement);
}
```

To implement the above interface with your class, you would have to *implement* the `CarBehaviour` interface like so

```Java
class JeepWrangler implements CarBehaviour{
    int speed = 0;
    int gear = 1;

    void changeGear(int newValue) {
         gear = newValue;
    }

    void speedUp(int increment) {
         speed = speed + increment;   
    }

    void applyBrakes(int decrement) {
         speed = speed - decrement;
    }

    void printStates() {
         System.out.println("speed: " + 
             speed + " gear:" + gear);
    }
}
```
> Note that the compiler will require that methods `changeGear`, `speedUp`, and `applyBrakes` all be *implemented*. Compilation will fail if those methods are missing from this class.

An interface allows a class to become more formal about its behavior. Interfaces form a sort of contract between the class and the outside world. This contract is enforced at build time by the compiler. If your class claims to implement an interface, all methods defined by that interface must appear in its source code before the class will successfully compile.

## Different Languages Same Objects

Objects can be created in many ways, this mostly depends on the programming language used. In Java, for example,

```Java
//className objectToCreate = new className();
Car mercedezBenz = new Car();
```

The `new` word is a keyword, which means it is reserved in Java for specifically creating objects. Therefore it can not be used as a variable name.

in JavaScript, creation of an object can be as follows:

```JavaScript
function fnName1(value1,value2){
    this.value1 = value1;
    this.value2 = value2;
    }
//alternatively
var fnName2 = new Object{};
fnName2.["value1"] = value1;
fnName2.value2 = value2;
```
> The first part is creation of an object using a custom constructor, while the alternative is using an object constructor in which values can be added using either dot notation or bracket notation

To access methods and instance variables, one uses the **dot operator** (.) to access a method or variable that lies in a newly created object.

It is always good practice to **encapsulate** your class. This protects your code and prevents editing of your variables. Instead these fields of variables should be accessed through *getter* and *setter* methods.

Take the example below:

```JavaScript
class Car{
    var engine,gasTank,gas,door;
    
    function driveForward(howFar){}
    function reverse(howFar){}
    function stop(){}
    function openDoor(){}
    
    //getters and setters
    function getGas(){
        return gas;
    }
    
    function getGasTank(){
        return gasTank;
    }
    
    function setGas(gas){
        this.gas = gas;
    }
    
    function setGasTank(gasTank){
        this.gasTank = gasTank;
    }
}
```
> The above class has getters and setters. The fields `engine`, `gas`, `gasTank` and `door` can not be accessed outside this class without the getters and setters

To access these fields you need to call the function such as `getGasTank()` which will return the value of field `gasTank`. This makes sure that your fields remain secure and can only be edited from inside the class and not outside.

## Method Overload!

It is possible in OOP to create methods that accept any type of variable, such as double, integer,String and return the same intended result. This is known as *overloading of methods*. It makes it easy to use just one function name that accepts any variable type, but performs the same function. Like taking int two integers, such as 4 and 5 and returning the sum. Now, what if the user enters 4 and 5 as strings? The intended purpose is to still return the same result of 9 regardless of the variable type. This is where method overloading comes in handy.

+ First create multiple methods with the same name
+ Make sure that each created method has a different return type, number of arguments or type of arguments

Languages such as [JavaScript](www.w3schools.com/js "More information on JavaScript") do not allow overloading, because they do not assign variable types to variables when they are created. Languages such as [Java](https://en.wikipedia.org/wiki/Java_(programming_language) "More info on Java") allow overloading.

```Java
public int addNumbers(int a, int b){
    return a+b;
}

public String addNumbers(String a,String b){
    int result = Integer.parseInt(a) + Integer.parseInt(b);
    return String.valueOf(result);
}

```
> The above methods have the same name, but accept different types of arguments. The first one accepts 2 integers and returns their sum. The second one accepts 2 strings, converts them to integers and sums them and returns the string literal of the integer.

The above functions perform the same function, but accept and return different variable types. This is an example of overloading methods.

## Conclusion

There is so much more to OOP, these are just some of the basics. These basics will get you started to creating software that uses and utilizes the power of OOP. It will make writing code that much easier. 
In conclusion, Objective of Object Oriented Programming si to make creation of software easy and fluid.
