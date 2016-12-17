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
```
        /Quote-Machine <- root project name
            /public/
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

