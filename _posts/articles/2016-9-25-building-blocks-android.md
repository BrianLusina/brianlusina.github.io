---
layout: article
categories: articles
title: Android Building Blocks
excerpt: Android components and building Blocks
author: brian_lusina
share: true
image:
 feature: 
 teaser: 
 thumb: 
 creditlink: 
 credit: 
---

Android component is simply a piece of code that has a well defined life cycle. e.g. Activity, Reciever, Service. The core building blocks or fundamental components of Android are:
1. Receivers
2. Activities
3. Views
4. Intents
5. Services
6. Content Providers
7. Fragments
8. AndroidManifest.xml

## Activity

This is simply a class that represents a single screen. They dictate the UI and handle user interaction to the smart phone screen.

## Services

Background process that can run for a long time. They are of 2 types:
+ **Local service**: accessed from within the application.
+ **Remote service **: accessed remotely from other applications running on the same device.

A service might play music in the background while the user is in a different application, or it might fetch data over the network without blocking user interaction with an activity. A service is implemented as a subclass of `Service` class.


## Broadcast Recievers

They handle communication between Android OS and applications. They simply respond to broadcast messages from other applications or from the system. For example, apps can initiate broadcasts to let other applications know that some data has been downloaded to the device and is available for them to use, so this is broadcast receiver which will intercept this communication and will initiate appropriate action.

A broadcast receiver is implemented as a subclass of `BroadcastReceiver` class and each message is broadcaster as an `Intent` object.

```java
	public class MyReciever extends BroadcastReceiver{
    	public void onReceive(context,intent){
        
        }
    }
```

## Content Provider

Content Providers provide content to applications by encapsulating data and provide it to applications through  a single ContentResolver interface.
They are required if you need to share data between multiple applications, e.g. contacts data is used by multile applications and mist be stored in a content provider.

## View

A view is the UI element such as button, lable, Text field, Image.

## Intent

Used to invoke components. It is mainly used to:
+ Start a service
+ Launch an activity
+ Display a web page
+ Display a list of contacts
+ Broadcast a message
+ Dial a phone

Basically they are messages wiring components together.

## Fragment

These are like part of an Activity. An activity can display one or more fragments  on the screen at the same time.

## AndroidManifest.xml

Contains information about activites, content providers, permissions. It is the configuration file for the application.

