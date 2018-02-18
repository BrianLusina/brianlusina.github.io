---
layout:  article
title:  How Browsers Work
categories:  tech
excerpt:  Some basic information about how a browser works
author:  brian_lusina
tags:  [how browsers work,browsers]
ads:  true
share:  true
image:
 feature: how-browsers-work.jpg
 teaser: how-browsers-work.jpg
 credit: Taligarsiel
 creditlink:  http://www.taligarsiel.com
---

Browsers are essential tools that help in transfering information from one computer to another over the world wide web. Without these browsers we would not be able to dynamically interact with people from all over the world at a click of a button.

Most of us interact with browsers without actually knowing what happens behind the scenes. From the time you type in [*google*](https://www.google.com) to the time you get millions of hits on your search, a lot of things happen in the background. We shall explore these many things that happen.

First of, we shall identify the browsers out there, the ones in existence. I know there many but we shall still outline a few, just to get an idea of what we are dealing with.
+ Chrome
+ Firefox
+ Safari (for my good friends who own MacBooks)
+ Internet Explorer 9
+ Opera
+ Maxthon
+ YouTube Browswer
+ Netscape Browser
+ UC Browser
+ Avant
 
etc etc.
Notice, how I have mentioned some browsers which are mobile based. Regardless of where they are based, the functionality remains the same as we shall soon see.

The most elementary function of a browser is to display a web resource to the user. This resource is fetched from a server and displayed in the browser window. This resource is written in [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML "More about HTML here") (HTML), but it can be a PDF document or an image or any other type of file.

##Functionality
Browsers are able to display such content due to an underlying web *protocol* (An agreed-upon format for transmitting data between two devices). This protocol is known as the [HyperText Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) or **HTTP** in short. HTTP defines how messages are formatted and transmitted and also what actions Web servers and browsers should take in response to various commands. This allows Web clients and servers to *talk* to each other. When you enter a Web address or [Uniform Resource Locator](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) (URL) in your browser it sends a HTTP command to the Web server instructin it to fetch and transmit the requested Web page and display this information in your browser. It is like making a phone call. You dial a specific number in order to talk to a specific person on the other end of the line. 


>HyperText Transfer Protocol: An agreed-upon format for transmitting data between two devices


All Web servers serving Web sites and pages support the HTTP protocol.

A brief example will make it easier to picture. Say, you intend to browse a website by the name *FunCats* and you want to read up on why cats love chasing red dots to their hearts content (why do they not get it's always a trap?). The title of this article is called "For the love of the red dot.". The URL to reach this article on FunCats is: http://www.funcats.com/for-the-love-of-the-red-dot.html

Once you enter the URL "http://www.funcats.com/for-the-love-of-the-red-dot.html" into your address line, the browser breaks that Web address down into 3 parts:
+ Protocol - http
+ Server name - www.funcats.com
+ file name - for-the-love-of-the-red-dot.html (I is is important to note that .html is a file extenstion name for HyperText Markup Language File, so a PDF document would be *for-the-love-of-the-red-dot.pdf*)

In order for your browser to connect to the server to retrieve the information, it communicates with a name server to translate the server name into an [IP address](IP address - Wikipedia, the free encyclopedia "More on IP addresses"). Your Web browser is then able to connect to the Web server at the resolved IP address. Once your browser has connected to the Web server using HTTP, the browser then reads the HyperText Markup Language (HTML) and the data is then displayed in your browser.

##Components of a browser
So, what exactly are these parts of a browser that make this all possible? It surely has to be more than just the explanation above. For the functions to be a well oiled machine, these are the parts of a browser:

1. **User Interface**

    This inclued the address bar, where you type to search for content online, the back and forward buttons for navigation and last but not least the bookmarks bar.
    
2. **Browser engine**

    Connects the rendering engine and the user interface.
    
3. **Rendering engine**

    This is reponsible for displaying requested content. If the content requested is HTML, it will parse the HTML and CSS and display the parsed content. The main function (as the name suggests), is to simply render the content requested. By default the rendering engine can display HTML and XML documents, but it can also display other content, such as images and documens such as PDF. Browsers such as Chrome run multiple instances of the rendering engine, one for each tab. Therefore, each tab runs on a separate process. Different browsers use different rendering engines. Chrome uses Blink, Firefox uses gecko, Safari uses Webkit and Internet Explorer user trident, just to mention a few.
    
4. **Networking**

    For networking calls such as HTTP requests.
    
5. **UI backend**

    This is used to draw basic widgets like windows and combo boxes.
    
6. **JavaScript Interpreter**

    Used to parse and execute JavaScript code from a website that used JavaScript.
    
7. **Data Storage**

    This is used to store data locally, such as [cookies](HTTP cookie - Wikipedia, the free encyclopedia "More about cookies here"). This is not the tasty treat that you always craved as a child.

Here is an image to make it more visiually appealing

<img src="http://placehold.it/150x150.gif" alt="">
![image](https://github.com/BrianLusina/howBrowsersWork/blob/master/components_of_a_browser.png "Components of a browser")


So, before i sum it all up, here is the intricate flow of data from the website you requested to the display on your browser:

![flow](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/flow.png "Flow of a typical Rendering Engine")

These are the steps:

+ The rendering engine will start off with parsing the HTML document (if that is what is requested by the user) then convert elements to [Document Object Model](Document Object Model - Wikipedia, the free encyclopedia "More information on Document Object MOdel")(DOM) nodes in a tree called the "content tree". it will read through the style data, both in external CSS files and in style elements. The styling information and visual instructions in the HTML will be used to create another tree: the *render tree*. The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

+ After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen.

+ The next stage is painting. The render tree will be traversed and each node will be painted using the UI backend layer.

I have broken it down to 3 steps, but is is actually a gradual process. For a better user experience (UX), the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network. It is more like how threads work in Java. Call it multitasking, in some way.

Here is a simple example of a rendering engine at work. The example displayed is of the workings of the WebKit rendering engine. Not all rendering engines will use the same terms, but the general flow will be the same.

![render](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png)


