---
layout: article
categories: articles
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


1. ####Checked Exception

	





