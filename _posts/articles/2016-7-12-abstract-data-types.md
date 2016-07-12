---
layout:  articles
title:  Abstract Data Types
excerpt:  All about abstract data types
tags:  [data, arrays, lists, stacks, queues]
categories:  articles
---

There are several Abstract data types that are used in Java, 
## Stacks

The Stack class represents a last-in-first-out (LIFO) stack of objects, The last element in will be the first one out, which is unfair if you ask me :smile:. It extends class [**Vector**](https://docs.oracle.com/javase/7/docs/api/java/util/Vector.html) with five operations that allow a vector to be treated as a stack.

The usual push and pop operations are provided, as well as a method to peek at the top item on the stack, a method to test for whether the stack is empty, and a method to search the stack for an item and discover how far it is from the top.

When a stack is first created, it contains no items.

+ **push** adds an item to the top of the stack. This will always be the last one in, but the first one out.
+ **pop** removes an element from the top of the stack and returns it.
+ **peek** look at the object at the top of the stack without removing it
+ **empty**  tests if the stack is empty
+ **search** if the object being sought is in the stack, it returns the 1-based position of the object, which is the distance from the top.

A practical example, trays piled on top of each other, books laid on top of each other, plates laid on top of each other.

There is no scenerio in which the stack will remain empty. There will always be data flowing in and data flowing out.


## Queue

Resembles a normal queue on a bus station, the first in line will be the first one to board the bus, the last will obviously be the last. It is based on a first come first serve
Has 2 major operations:
+ Dequeue
+ 

s
## LinkedLists

Data arranged in a list with the first element being the **head** having the node and a pointer. The pointer points to another node and so on and so forth until it reaches the last element with a node that is null. The last element is known as the **tail**
The node consists of where the current data is held and where the next data is held.
