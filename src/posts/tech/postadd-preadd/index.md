---
path:  "/tech/postadd-preadd"
title:  Difference between Post increment and pre increment of a variable
subtitle: x++ and ++x
excerpt: This post is a demonstration of the difference between post increment and pre increment of variables in Java. Post increment is usually denoted as `x++`, where the x is the variable in question, usually an integer, double or float. While pre-increment is addition denoted as `++x`.
tags:  [Post-increment, pre-increment]
date: "2016-07-06T12:00:00+00:00"
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image: 
 feature: 
 thumbnail: 
 teaser: 
---

This post is a demonstration of the difference between post increment and pre increment of variables in Java. Post increment is usually denoted as `x++`, where the x is the variable in question, usually an integer, double or float. While pre-increment is addition denoted as `++x`.

# Pre-increment

As the terms suggests, _PRE-increment_ is the addition of a particular value before it is used. It is normally used when you want to use the incremented value of that particular variable. When the program encounters a pre-increment it increases the value of that variable in the memory then loads the expression.

A simple demonstration:

```java
public class PostAndPre {
    public static void main(String[] args){
        int x = 0;
        for(int i = 0; i < 10; i++){
            System.out.printf("%d\n", ++x);
            /*Output:
            1 2 3 4 5 6 7 8 9 10 */
        }
    }
}
```

> Demo of pre-increment

The above variable `x` is instantiated as 0. The program encounters the variable `x` and increases the value by 1 before output of the result.

This is equivalent to:

```Java
	    x = x + 1;
		int y = x;
	    System.out.printf("%d", y);
```

# Post-increment

The _post increment_ uses the variable before increasing it. So in the case of `x++`, the variable will be 0, and will be used as is before it will be increased. This loads the value of that variable in memory, increases the variable and then continues reading the expression.

```java
        int l = 0;
        for(int i = 0; i < 10; i++){
            System.out.printf("%d \t", l++);
			//output 0 	1 	2 	3 	4 	5 	6 	7 	8 	9
        }
```

> Demo of post increment

The above variable `l` is instantiated as 0 and will be output as 0, before the variable is increased.

Code snippet can be found [here](https://github.com/BrianLusina/Java-Playground/blob/master/Toy%20Problems/src/PostAndPre/PostAndPre.java).
