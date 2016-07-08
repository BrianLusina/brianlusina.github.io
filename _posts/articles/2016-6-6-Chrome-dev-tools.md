---
layout: post
title: What Is Chrome Developer Tools?
---

The Chrome Developer Tools (DevTools for short), are a set of web authoring and debugging tools built into Google Chrome. The DevTools provide web developers deep access into the internals of the browser and their web application. The DevTools are used to efficiently track down layout issues, set JavaScript breakpoints, and get insights for code optimization. It makes web development dare I say *easy*.

These tools are effective for any web deveeloper and allow for live editing of a web application. Thus, you do not need to change the web application from the server that hosts the application and refresh your browser. This even allows you to track any bugs and also performance of your application. Thus makes web development a little bit simpler.

## Accessging the DevTools

Access to the DevTools is quite simple. There are two ways:
+ Select the Chrome menu Chrome Menu ![chromeMenu](https://developer.chrome.com/devtools/images/chrome-menu.png) at the top-right of your browser window, then select Tools > Developer Tools.
+ Right-click on any page element and select Inspect Element.
+ Use a keyboard shortcut such as F12 of

The DevTools window will open at the bottom of your browser or on the right side of your browser, depending on how you prefer to dock it.
The Tools window has several panels that lets you edit your web application and track any changes you make.

  ![DevToolsWindow](https://developer.chrome.com/devtools/images/devtools-window.png)
> Chrome Developer Tools Window  


As you can see above, there are panels you can navigate to on the left side of the window. These let you work with a specifit type of page or app window.


+ **Elements**
  
  Allows you inspect everything on the [*Document Object Model*](https://en.wikipedia.org/wiki/Document_Object_Model "More on DOM") (DOM for short) and edit the elements you find.
  
  ![elementsPanel](https://developer.chrome.com/devtools/images/elements-panel.png "Elements Panel")


+ **Resources**

  This lets you inspect resources that are loaded in the inspected page. It lets you interact with HTML5 Database, Local Storage, Cookies, AppCache, etc.

  ![resourcePanel](https://developer.chrome.com/devtools/images/resources-panel.png "Resource panel")


+ **Network**
  
  Provides insights into resources that are requested and downloaded over the network in real time. Identifying and addressing those requests taking longer than expected is an essential step in optimizing your page.

  ![networkPanel](https://developer.chrome.com/devtools/images/network-panel.png "Network Panel")


+ **Sources**
  
  Developers need powerful debugging tools to help quickly discover the cause of an issue and fix it efficiently. The Sources tab allows you to go over the JavaScript code and debug where necessary. 

  ![sourcesTab](https://developer.chrome.com/devtools/images/js-debugging.png "Sources Tab")
  
  
+ **Timeline**
  
  This gives you a complete overview of where time is spent when loading and using your web app or page. All events, from loading resources to parsing JavaScript, calculating styles, and repainting are plotted on a timeline.
  
  ![timelinePanel](https://developer.chrome.com/devtools/images/timeline-panel.png "Timeline Panel")
   

+ **Profiles**
  
  This allows you to *profile* the execution time and memory usage of a web app or page. These help you to understand where resources are being spent, and so help you to optimize your code. The profiles are:
  
  + CPU profiler shows where execution time is spent in your page's JavaScript functions.
  + Heap profiler shows memory distribution by your page's JavaScript objects and related DOM nodes.
  + JavaScript profile shows where execution time is spent in your scripts

  ![profileTab](https://developer.chrome.com/devtools/images/profiles-panel.png "Profile Tab")
  

+ **Audits**
  
  The Audit panel can analyze a page as it loads. Then provides suggestions and optimizations for decreasing page load time and increase perceived (and real) responsiveness.

  ![auditPanel](https://developer.chrome.com/devtools/images/audits-panel.png "Audit Panel")


+ **Console**
  
  Provides two primary functions for developers testing web pages and applications. It is a place to:

  * Log diagnostic information in the development process.
  * A shell prompt which can be used to interact with the document and DevTools.

  ![consoleTab](https://developer.chrome.com/devtools/docs/console-files/expression-evaluation.png "Console Tab")
  
  
### More on DevTools

These are just but the essentials to get you started on using the DevTools, more reading can be found here:


 + [Heap Profiling](https://developer.chrome.com/devtools/docs/heap-profiling)
 + [CPU Profiling](https://developer.chrome.com/devtools/docs/cpu-profiling)
 + [Device Mode & Mobile Emulation](https://developer.chrome.com/devtools/docs/device-mode)
 + [Remote Debugging](https://developer.chrome.com/devtools/docs/remote-debugging)
 + [DevTools Videos](https://developer.chrome.com/devtools/docs/videos)
 + And a free course on DevTools in [CodeSchool](http://discover-devtools.codeschool.com/)
