---
path:  "/tech/access-modifiers"
title:  Accessors and Modifiers
subtitle: subtle introduction to getters and setters
except: This topic will simply _extend_ from the [Objective of OOP](https://brianlusina.github.io/Object-Oriented-Programming/) and [4 principles of OOP](https://brianlusina.github.io/Principles-Of-Oop/) and will majorly focus only on accessors and modifiers, i.e. _getters_ and _setters_
tags:  [OOP, getters and setters, accessors, modifiers]
date: "2016-07-05T12:00:00+00:00"
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image: 
 feature: 
 thumbnail: 
 teaser: 
---

This topic will simply _extend_ from the [Objective of OOP](https://brianlusina.github.io/Object-Oriented-Programming/) and [4 principles of OOP](https://brianlusina.github.io/Principles-Of-Oop/) and will majorly focus only on accessors and modifiers, i.e. _getters_ and _setters_.

Accessors are methods used in Object Oriented Programming to enable _access_ to a class fields which may be private. In most cases it is advisable to make these fields private and allow allow access to them from the accessors and modifier methods. The accessor methods, or _getter_ methods as they are most commonly known as, are only used to **access** or _get_ the fields/states of a particular object. Modifiers or _setters_ allow the modification or _setting_ of the fields of a particular object.

These are used in encapsulation and allow data hiding which makes code more secure and also reduces the amount of code written, which is what every developer seeks, to make code cleaner, smaller, but still maintain the overall functionality and readability.

A simple example of a Car class will be used. A Car is a super class of every car type in the world. This Car class will contain all the fields/states and behaviours/methods of all the car types in the world.

This is the code for writing a super class Car in Java:

```Java
public class Car {
    private int wheels;
    private int engineCapacity;
    private int seats;
    private String name;

    /**Constructor for the Car class*/
    public Car(int wheels, int engineCapacity, int seats, String name){
        this.wheels = wheels;
        this.engineCapacity = engineCapacity;
        this.seats = seats;
        this.name = name;
    }

    /**ACCESSORS AND MODIFIERS getters and setters*/

    /*get and set wheels*/
    public int getWheels(){
        return wheels;
    }

    public void setWheels(int wheels){
        this.wheels = wheels;
    }

    /*set and get the engine capacity*/
    public int getEngineCapacity(){
        return engineCapacity;
    }

    public void setEngineCapacity(int engineCapacity){
        this.engineCapacity = engineCapacity;
    }

    /*getters and setters for the seats*/
    public int getSeats(){
        return seats;
    }

    public void setSeats(int seats){
        this.seats = seats;
    }

    /*get and set the name*/
    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

}
```

> This is a car class with a constructor to define its objects on creation the getters and setters have been defined to allow the object's fields or states to be modified by the instance.

The usual convention for writing getters is by writing the word **get** and followed by the name of the field to access. So, in this case, to acces the `seats` field, the function created is `getSeats()`. This getter **MUST** return the data type of the same field it wants to access. So, in the case of seats, it must return and `int` data type as the `seats` variable is an integer type.
It is important to note that getter methods do not take any arguments.

Setters are a bit different. To create a setter function, the same method as declaring a get method is applied. Use of the word **set** followed by the name of the variable. An example would be `setName`. This naming follows the camel casing convention for naming variables. The setter methods **DO NOT** return any value and thus the _void_ is used, which means: _does not return any value_. This does not return a particular value as it's job is to set a particular value. In this case, `setName(String name)` takes in a String argument and modifies the current name field (or re-assigns the name variable) with the input in the `setName` method. The setter methods must take arguments as they are, after all, supposed to modify the current field to a new state.

All this is made possible because the variables have been declared `private`. This restricts access, therefore the need for use of getters and setters.

## Sample usage of accessors and modifiers

Below is a sample usage of getters and setters from the Car's class defined above:

```Java
public class CarTest {
    public static void main(String[] args){
        Car merc = new Car(4, 3500, 5, "Mercedez Benz");
        Car toyota = new Car(4, 1200, 5, "Allion");

        /*The getters allows the private variables to be accessed from the constructor*/
        System.out.printf("This is a %s with %d wheels, %d seats and an engine capacity of
        %d CC \n", toyota.getName(), toyota.getWheels(), toyota.getSeats(),toyota.getEngineCapacity());

//output is This is a Allion with 4 wheels, 5 seats and an engine capacity of 1200

        System.out.printf("This is a %s with %d wheels, %d seats and an engine capacity of
        %d CC \n", merc.getName(), merc.getWheels(), merc.getSeats(),merc.getEngineCapacity());
        //output is This is a Mercedez Benz with 4 wheels, 5 seats and an engine capacity of 3500 CC

        /*the setters modify the states or fields of the object*/
        merc.setName("Mercedes SLS");
        merc.setEngineCapacity(4500);
        merc.setWheels(4);
        merc.setSeats(2);

        /*these have been modified from the previous states to the current states as described below*/
        System.out.printf("This is a %s with %d wheels, %d seats and an engine capacity of
        %d CC \n", merc.getName(), merc.getWheels(), merc.getSeats(),merc.getEngineCapacity());
        //output is This is a Mercedes SLS with 4 wheels, 2 seats and an engine capacity of 4500 CC

        //below lines modify the toyota object
        toyota.setName("Toyota Celica");
        toyota.setEngineCapacity(2500);
        toyota.setWheels(4);
        toyota.setSeats(2);

        /*these have been modified from the previous states to the current states as described below*/
        System.out.printf("This is a %s with %d wheels, %d seats and an engine capacity of %d CC", toyota.getName(), toyota.getWheels(), toyota.getSeats(),toyota.getEngineCapacity());
        //output is: This is a Toyota Celica with 4 wheels, 2 seats and an engine capacity of 2500 CC

    }
}
```

The `merc` and `toyota` objects are instances of the Car class, thus they inherit all the characteristics(fields and methods of the parent class) of Car class. This allows them access to the variables such as `seats`, `engineCapacity` and `name`, just ot mention a few. Note, however, that these variables can only be accessed from the getters and setters

The getters allow access to the various fields that have been set in the constructor. a method such as `merc.getName()` returns _Mercedez Benz_, while `toyota.getName()` returns _Allion_. These are the fields set in the constructor. using `merc.name` will return an error.

To rename these fields the setters have been used. A method call such as `merc.setEngineCapacity(4500)` will change the `engineCapacity` from 3500 to 4500. This is modifying. The same applies to `toyota.setSeats(2)`.

This is a basic example and is mostly used to restrict access to a class' states and behaviour to the outside world thus increasing security of the code used.

Sample code can be found here [Car Class](https://github.com/BrianLusina/Java-Playground/blob/master/Toy%20Problems/src/DataStructures/OOP/Car.java) and [CarTest class](https://github.com/BrianLusina/Java-Playground/blob/master/Toy%20Problems/src/DataStructures/OOP/CarTest.java).
