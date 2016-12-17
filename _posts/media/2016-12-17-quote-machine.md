---
layout: media
title: "Quote Machine"
categories: media
excerpt: "Simple, quote generator built on ReactJS library."
ads: true
share: false
image:
  feature: quote_machine.png
  teaser: quote_machine.png
  credit: Brian Lusina
  creditlink: https://quotemachina.herokuapp.com/
---

This is a very simple ReactJS application built to display random quotes.

## Background

This is one of the small projects I built when learning to use the ReactJS library. I wanted to test my understanding of components
and how they interact with each other. How to sepearate each component so that each does what it is supposed to do and make the application more maintainable.
I had completed a course on [Codecademy](http://www.codecademy.com/) on ReactJS. This was a 2 part short course. And even though it was quite shot, it did get me started.
(God bless the soul of the person who came up with Codecademy).


Admittedly it did take a while to get a grasp of it but it started to make a little bit more sense when I started building a very small application in React.
Why I chose to start off with this one was because of the many things I may be required to do. First it would reaquire me to interact with an API, to be able
to fetch random quotes. It would require me to learn how to seperate components at the most basic level and it would enable to me to learn core JavaScript principles
which I may have been taking for granted.

## Project Description

To start off, you will find the project on [Github](https://github.com/BrianLusina/Quote-Machine), with a brief description to get you started off.
The project is very basic and simple and should take you a couple of minutes to figure out. You will notice that there are 2 versions of it.
One done in plain old *jQuery* and the other(this one) done in *React*. This is just to show that the same functionality is being retained, just the tools 
are now different.

### Tools Used
Speaking of tools, let us now list them (the major ones used), what exactly is used in this very simple project of ours:

1. **ReactJS**: This is the weapon of choice and is a client-side JavaScript *library* that enables easy interaction with the DOM keeping it lightweight
and allows the developer to create each component seperately while still maintaining 1 vision for the whole project.

2. **NodeJS**: This will allow the project to run on a server. The server that hosts this application is [Heroku](https://www.heroku.com/)

3. **Babel**: This allows the transpiling of JSX (JavaScript XML) to JavaScript

4. **jQuery**: Yes, I used this as well. I know I mentioned that there are 2 similar projects, but this is a library used within this project
with the sole purpose of making API calls.

These are the main ones used, or rather the main technologies that enable this application to run as it should. More of what is used is found in
the **package.json** file that is found in the root project structure.


### Project structure

Now onto the project structure and what is what. It is quite simple and should come as no surprise to those who are familiar with
making JavaScript modules and packages as it is *packaged* almost like a node module.

``` plain
/Quote-Machine <- root project name
    /public/ <- This will be seen when you build the project
        bundle.js
        bundle.js.map
    /src/
        components/
            App.js
            quote-container.js
            share-quotes.js
        styles/
            index.css
        tests/
            App.test.js
        index.js
    app.js
    index.html
    package.json
    Procfile
    server.js
    webpack.dev.config.js
    webpack.prod.config.js
    .babelrc
    .travis.yml
    .gitignore
    .npmignore
```
> Project structure of Quote Machine

Of course you can change this project structure to suit your needs, however this is what you will get when it is pulled down from the repo.
I will only highlight the parts that are **most** important about the project.

+ *package.json*
    This basically describes the project in a more subtle way and you will find the dependencies needed to get you started. 
    To install these dependencies:

    ``` sh
    $ npm install
    ```
    
    After which you will find a *node_modules* folder in the root project with all the dependencies in the package.json
    These will not be installed globally.

+ *webpack.dev.config.js* and *webpack.prod.config.js*
    These are *configuration* files for the project for both development environment and production environment. You will notice
    some similarities between the 2. However, they have been written to enable the application to run in both environments without
    any more setup.
    
    + *webpack.dev.config.js* is specifically for development environments
    + *webpack.prod.config.js* is for the production environment.

+ *app.js* and *server.js*
    These two sort of complement each other
    
    + *server.js*: will create an **express** object that will direct express and tell it where to get the HTML and which path to use
        to run the application in a server

    + *app.js*: This will require the *server.js* and basically tell the application to run in production mode on a certain port.

+ *index.html*
    The webpage that will be displayed. Will contain metadata, such as links to resources, meta tags, title
    and more.

+ *index.js*
    Entry point of the application. This will be the point of the application that is exposed to the DOM.
    This will be rendered on the page after all the components have come together in harmony.

+ *components*
    This is the meat of the application as it puts it altogether.

    + *App.js*:
        This makes the communication to the API fetching relevant dat and passing that to the *quote* component
        It is a statefull component and once its states are updated, it will pass them down as props to the quote component.
    
    + *quote-container.js*:
        This, obviously, is where the quotes are displayed. This is responsible for displaying the quotes to the user. It is stateless
        and will not need to update states but rather will require to receive props from its parent and update the render function. These
        same props will be passed down to *share-quotes* component.
    
    + *share-quotes.js*:
        This enables the sharing of quotes to social media sites. It is a very simple component and only requires to handle button click
        events on each button. This event handler simply gets the quote and the author, which are the required props and posts them to 
        social media links.

Running this application is quite straight forward and will only require the following commands:

``` sh
$ npm run build
$ npm run start

``` 
> More commands can be found in the package.json scripts tag

You will see a message in the terminal displaying the port it is listening on and with that you can go down to your browser
and checkout the application.

That is all she (he?) wrote :D.