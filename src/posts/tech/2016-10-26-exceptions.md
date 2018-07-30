---
path:  "/tech"
categories:  tech
title: Exception Handling and why you should care.
excerpt: Try and catch that exception, keeping your user happy
author: brian_lusina
share: true
image:
 feature: exceptions-vs-errors.png
 teaser: exceptions-vs-errors.png
 thumb: exceptions-vs-errors.png
 creditlink: http://rypress.com/tutorials/objective-c/exceptions
 credit: http://rypress.com

---

No one likes errors, especially when they occur frequently and unchecked. As developers we constantly check for errors and not that the program is running as expected, but rather it is handling the errors as it should. There is not perfect program that will never encounter errors, the best programs are the ones that handle **exceptions** really well and keep the user happy and oblivous of the errors being handled. It is important that errors are handled appropriately and also that they give the user a meaningful message. Unfortunately, you never know that kind of errors you may encounter in your program. Some are caused by the code you write, others by external factors that your program has nothing to do with, like a poor internet connection or hardware malfunction. In both cases, your program should be able to handle these exceptions and keep running or exit, whichever suits you need at the time.

Of course, before delving deeper into the exceptions, we should all be on the same page as to what exceptions are.

**Exceptions** as defined by Java Documentation is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. This disruption of the normal flow of the program should be handled with care and enable the user to keep interacting with the program despite this interruption, otherwise you will have poor ratings, no one wants that.

I will not delve into details about how a program determines an error and normal flow of a program. I will dive immediately into which type of exceptions we should look out for.

1.  Checked Exception

    Say, you are creating a program that requires user input, such as their name, phone number, email and such, for validation purposes. Maybe you need these inputs for authorization or for sign up to your platform. It is possible that the user will provide an invalid email address and as such you will need to validate these parameters before passing them to a function or class that will handle the authentication. Normally, if you are developing for Android it will be easy to validate this field in the XML layout, but what if you are checking with a server and you have to fetch a response in order to proceed. If the response returns _Null_ then you need to be able to handle such a response.

    A well-written program will catch this exception and notify the user of the mistake, possibly prompting for a correct email address if the email does not exist in the system's database.

2.  Error

    These are the kind of errors that will occur that are outside the application's scope of handling. These kind of errors may involve poor internet connection on the part of the user or maybe they are experiencing hardware failure. The application can not anticipate that it will happen as it may occur randomly. However, it should be able to catch this exception and notify the user of the failure to execute the program. In the example above, maybe in the middle of execution of request to ther server, after having validate the user credentials, the internet connection is abruptly cut and the user is not properly authenticated with the system, it is at this point that the application should notify the user of the problem, catch this expection and try again at a late time. It may make sense in some instances to print a stacktrace and exit the program.

3.  Runtime Exception

    These are exceptional conditions that are internal to the application, and that the application usually cannot anticipate or recover from. These type of errors are usually because of an improper use of an API or a logic error. If we use the abov example still, if a logic error causes `null` to be passed instead of a `username` then the method handling authentication will throw a **NullPointerException**. Now normally it may make sense to catch this exception and notify the user, but it makes even more sense to eliminate this bug completely and not pass null to the method or constructor of a class.

Now, you may have noticed something similar about the last two types of exceptions. Errors and runtime exceptions are collectively known as **unchecked exceptions** and this is because they do not need to be _caught_ as much as the 1st type. This is normally because they could be caused by external factors that the app can not manage and it will reduce complexity and make more sense for the application to terminate and inform the user of the same. In other instances like in the third example about the logic error, it makes more sense to not pass in null to a constructor or method.

Either way, it is important to give your user the best possible experience with your program and thus keep the user notified of any errors that may occur and thus give them the best experience.
