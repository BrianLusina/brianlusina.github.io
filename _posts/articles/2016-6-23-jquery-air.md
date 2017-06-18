---
layout:  article
title:  jQuery Air
category: articles
tags:  [jQuery, JavaScript Library, JavaScript]
comments:  true
ads:  true
image:
  feature: jquery.png
  teaser: jquery.png
  thumb: jquery.png
---

JQuery, as some of you may know is a feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript. This is per the [jQuery](https://jquery.com/ "More about jQuery here") website. This is very true and I have personally seen this as I continue to learn programming. jQuery is indeed feature rich and it does a lot of things in the background that the user may never see. Such as fetching data from an API and loading this data into HTML elements. Yes, you can do such things with jQuery. All you need is some knowledge on how to use it and apply it and soon you will write less code, but it will be very meaningful.


## Advantages of jQuery

Before I delve further into what jQuery is, I would like to mention just some of the advantages that I have come across as I use it. I shall just list a few.

+ **It is very lightweight**.

+ **It is CSS3 compliant**. This means it suppors CSS3 selectors to find elements and in style property manipulation. This allows the developer to even customize the whole website just from jQuery

+ **It is cross-browser friendly**, so you do not need to worry about creating websites to be able to work for *old* websites. jQuery has no problem with *old* browsers, so to speak. The JavaScript engines of different browsers differ slightly so JavaScript code that works for one browser may not work for another. Like other JavaScript toolkits, jQuery handles all these cross-browser inconsistencies and provides a consistent interface that works across different browsers.

+ **Encourages separation of JavaScript and HTML**: The jQuery library provides simple syntax for adding event handlers to the DOM using JavaScript, rather than adding HTML event attributes to call JavaScript functions. Thus, it encourages developers to completely separate JavaScript code from HTML markup. This enables every developer to understand the project structure as well as the developer to update their project in the future.

+ **jQuery promotes brevity and clarity**: This is encouraged with features like chainable functions and shorthand function names.

+ **Extensible**: New events, elements, and methods can be easily added and then reused as a plugin.


## What exactly is jQuery

As mentioned above, jQuery is a feature-rich JavaScript library that makes you do many many things with your website. And for those unfamiliar with *JavaScript* (or *ECMAScript* as it is actually known as), this is a programming langauge that makes a website more interactive or *alive* so to speak.

jQuery is essentially a *DOM* manipulation library. DOM in full means **Document Object Model**. The DOM is basically the structure of websites. The DOM is what the browser reads through when it loads a page for the first time (and every other time for that matter). The DOM organizes elements in a sort of tree from the root element down to the children and so on and forth. jQuery enables one to *traverse* this tree and manipulate elements, either moving them around or removing them or even adding new ones.

## How do you get jQuery?

So, how do you use this powerful jQuery library? It is actually basically a single JavaScript file containing all of its common DOM, event, effects, and Ajax functions. This means that it can be included within a Web page by linking to a local copy. So, you can head down to [jQuery](https://jquery.com/download/) and download the version you intend and want to use for your website. Of course once you do this, you have to place the file in your project's directories and link your HTML document to point directly to the containing directory. Just add the link like so:

```HTML
<script src="js/jquery.js"></script>
```
> This is of course considering that the `jquery.js` file is in the js folder (or whatever folder you prefer to place it in).

Alternatively, you could link your HTML to one of the many copies available from public servers. jQuery has a content delivery network (CDN) hosted by MaxCDN. Google  and Microsoft host it as well. To include jQuery in your file, just link it like so:

```HTML
<script src="https://code.jquery.com/jquery-latest.min.js"></script>
```
> Just point your script `src` to the link of the jQuery file in the public server.


## How do you use jQuery?

Using jQuery is quite simple, so to speak. It does require a bit of learning, but if you have a bit JavaScript knowledge you shall be just fine with handling jQuery, still, I could not emphasize this more, you need to practice.

Anyway,

jQuery has two usage styles:

+ Through the `$`, **dollar sign** or **bling** operator. This is a jQuery `keyword` and is a factory method for the jQuery object. 

+ Through `$`.-prefixed functions. These are utility functions, which do not act upon the jQuery object directly.

Accessing an element in the DOM using jQuery typically begins with calling the `$` function with a CSS selector string. This returns a jQuery object referencing all the matching elements in the HTML page.
Like calling `$("div")` returns a jQuery object with all the div elements of class test. This node set can be manipulated by calling methods on the returned jQuery object or on the nodes themselves.

An example:

```JavaScript
$(document).ready(function(){
	£('h2').html('<em>Kangaroo PlayGround</em>');
});
```
> This gets 1st occurence of the h3 element and replaces it with emphasized *Kangaroo PlayGround`* text

There are tons of other methods that jQuery offers the `.html()` is just a sample of them. More are here [jQeury Library and Docs](http://api.jquery.com/ "jQuery API Docs"). It is important to mention that in order to effectively use these functions in JavaScript, it is recommended to start all your scripts as follows:

```JavaScript
$(document).ready(function(){
	//your code
});
```
> $(document).ready(callback) has been the de facto signature for running code when the DOM is ready. However, since jQuery 3.0, developers are encouraged to use the much shorter $(handler) signature.

This tells the browser to only run the JavaScript code when the DOM is ready, that is, when the Webpage has fully loaded and is ready. To make this more effective, place the `<script>...</script>` tags at the bottom of the HTML structure like so

```HTML
<!DOCTYPE html>
<head>
	<title>Kangaroo PlayGround</title>
</head>
<body>
	<head>
		<h2>Kangaroo!</h2>
	</head>
	
	<section>
	<!--HTML magic--->
	</section>

	<footer>
	<!--Stuff-->
	</footer>
	
	<script src="jquery.min.js"></script>
</body>
```
> This will ensure that the script is only used once the whole HTML page is loaded and **ready**.

Placing the script tag atht the top of the page will make the website load even slower and will effectively call elements in the DOM that are not even there to begin with. Also, it is very good web design to arrange your projects in a readable manner and in a way that helps to load your projects quickly.

## Bottom line

jQuery is a powerful library and as such it will aid in making your websites powerful and interactive. This enables you to create dynamic websites and mobile applications as well using very little code. The best part is being able to use this across multiple browsers, so you reach even more people.

Climb aboard *jQuery Air*!

