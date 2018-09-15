---
path:  "/tech/abstraction"
title: "A Practical example of Abstraction"
subtitle: A more practical approach to abstraction in OOP
excerpt: "Abstraction in the real world."
tags: [encapsulation, objects,object oriented programming, abstraction]
category: tech
date: "2016-07-11T12:00:00+00:00"
image: 
 feature: abstraction.jpg
 teaser: abstraction.jpg
 thumbnail: abstraction.jpg
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
published: true
---

Abstraction is one of the principles of Object Oriented Programming where a programmer hides/reduces information of an object and only reveals the relevant information at the time. It works alongside _inheritance_ and _encapsulation_. This is done in order to reduce complexity and ensure efficiency.

In the process of abstraction, the programmer tries to ensure that the entity is named in a manner that will make sense and that it will have all the relevant aspects included and none of the extraneous ones.

A practical example is a car. Not many people are concerned with the inner workings of a motor vehicle, save for mechanics, engineers and car enthusiasts. A car is an object that has certail states and behaviours. It has states such as _black_ paint, _engine size_ and _number of doors_ etc. The behaviours are _accelerate_, _decelerate_ and _stop_, just to mention a few. Now, for the driver to intaract with the car, they have to do so through the steering wheel, the gears and the peddles. These are the **interfaces**.

These are what act as a go-between the driver and the internal components of the car. This is where abstraction steps in. The driver does not particularly know what is going on in the engine when they accelerate and when they stop. All they get to interact with are the steering wheel, pedals and various gauges on the car dashboard. Abstraction basically gives them this relevant information as it is what is needed at the time of driving. All the driver needs to know at all times when they are driving are the fuel gauge, the speed they are on and car temperature. They do not need to know about how the car measures heat every second or how it gauges how much petrol is left in the tank or even how it calculates the current speed. This information is hidden in the internal components of the car (_encapsulation_) and is queried (say, you take your car apart and study it) only when need be. So at all times only relevant information is displayed(_abstraction_).

This, as you can see, reduces the complexity when driving said car and allows the driver to only intaract with what they need to interact with at the time of driving.
