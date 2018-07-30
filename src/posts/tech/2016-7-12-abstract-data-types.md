---
path:  "/tech"
title: Abstract Data Types
excerpt: All about abstract data types
tags: [data, arrays, lists, stacks, queues]
categories:  tech
image:
 feature: abstract-data-type.jpg
 teaser: abstract-data-type.jpg
 thumb: abstract-data-type.jpg
---

There are several Abstract data types that are used in Java,

## Stacks

The Stack class represents a last-in-first-out (LIFO) stack of objects, The last element in will be the first one out, which is unfair if you ask me :smile:. It extends class [**Vector**](https://docs.oracle.com/javase/7/docs/api/java/util/Vector.html) with five operations that allow a vector to be treated as a stack.

The usual push and pop operations are provided, as well as a method to peek at the top item on the stack, a method to test for whether the stack is empty, and a method to search the stack for an item and discover how far it is from the top.

When a stack is first created, it contains no items.

- **push** adds an item to the top of the stack. This will always be the last one in, but the first one out.
- **pop** removes an element from the top of the stack and returns it.
- **peek** look at the object at the top of the stack without removing it
- **empty** tests if the stack is empty
- **search** if the object being sought is in the stack, it returns the 1-based position of the object, which is the distance from the top.

A practical example, trays piled on top of each other, books laid on top of each other, plates laid on top of each other.

There is no scenerio in which the stack will remain empty. There will always be data flowing in and data flowing out.

A code snippet:

```java
public class StacksDemo {
    public static void main(String[] args){
        Stack stack = new Stack();
        System.out.println("Stack is " + stack);
        showPush(stack,52);
        showPop(stack);
        /*output:
        *Stack is []
        * push 52
        * Stack is now: [52]
        * Popped element is 52
        * Stack is: []
        * */
    }

    /**Method showing how to push elements into a stack*/
    public static void showPush(Stack stack, int a){
        stack.push(new Integer(a));
        System.out.println("push " + String.valueOf(a));
        System.out.println("Stack is now: "+ stack );
    }

    /**Method demonstrating the use of pop*/
    public static void showPop(Stack stack){
        Integer integer = (Integer) stack.pop();
        System.out.println("Popped element is " + String.valueOf(integer));
        System.out.println("Stack is: "+ stack);
    }
/*Class end*/
}
```

> code snippet can be found [here](https://github.com/BrianLusina/Java-Playground/blob/master/Toy%20Problems/src/DataStructures/DataTypes/StacksDemo.java)

## Queue

Resembles a normal queue on a bus station, the first in line will be the first one to board the bus, the last will obviously be the last. It is based on a first come first serve
Has 2 major operations:

- Dequeue
-

## LinkedLists

Data arranged in a list with the first element being the **head** having the node and a pointer. The pointer points to another node and so on and so forth until it reaches the last element with a node that is null. The last element is known as the **tail**
The node consists of where the current data is held and where the next data is held.
