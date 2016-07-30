---
layout:  article
title:  Flask Web Framework
categories:  articles
excerpt:  Some basic information about Flask web framework
author:  brian_lusina
tags:  [web frameworks, python frameworks,flask]
ads:  true
share:  true
image:
	feature: flask-webframe.png
	teaser: flask-webframe.png
	credit: Flask
	creditlink:  http://flask.pocoo.org
---

Web Application Framework or simply Web Framework represents a collection of libraries and modules that enables a web application developer to write applications without having to bother about low-level details such as protocols, thread management etc.

Flask is a web application framework written in Python. It is developed by Armin Ronacher, who leads an international group of Python enthusiasts named Pocco. Flask is based on the Werkzeug WSGI toolkit and Jinja2 template engine. Both are Pocco projects.

### Web Server Gateway Interface (WSGI)

WSGI has been adopted as a standard for Python web application development. It is a specification for a universal interface between the web server and the web applications.

### Werkzeug

It is a WSGI toolkit, which implements requests, response objects, and other utility functions. This enables building a web framework on top of it. The Flask framework uses Werkzeug as one of its bases.

### Jinja2

Jinja2 is a popular templating engine for Python. A web templating system combines a template with a certain data source to render dynamic web pages.


Flask is often referred to as a micro framework. It aims to keep the core of an application simple yet extensible. Flask does not have built-in abstraction layer for database handling, nor does it have form a validation support. Instead, Flask supports the extensions to add such functionality to the application.


## Flask Environment

Python 2.6 or higher is usually required for installation of Flask. Although Flask and its dependencies work well with Python 3 (Python 3.3 onwards), many Flask extensions do not support it properly. Hence, it is recommended that Flask should be installed on Python 2.7.

First, you will need to install virtualenv for development environment. Virtualenv is a virtual Python environment builder. It helps a user to create multiple Python environments side-by-side. Thereby, it can avoid compatibility issues between the different versions of the libraries.

```bash
pip install virtualenv
```

The output should be like this −
```bash
Collecting virtualenv
  Downloading virtualenv-15.0.1-py2.py3-none-any.whl (1.8MB)
    100% |################################| 1.8MB 204kB/s
Installing collected packages: virtualenv
Successfully installed virtualenv-15.0.1
```

This command needs administrator privileges. Add sudo before pip on Linux/Mac OS. If you are on Windows, log in as Administrator. On Ubuntu virtualenv may be installed using its package manager.

```bash
Sudo apt-get install virtualenv
```

Once installed, new virtual environment is created in a folder.

```bash
mkdir newproj
cd newproj
virtualenv venv
```

To activate corresponding environment, on Linux/OS X, use the following −

```bash
venv/bin/activate
```
We are now ready to install Flask in this environment.

```bash
pip install Flask
```

The output should be like this −

```bash
Collecting Flask
  Downloading Flask-0.10.1.tar.gz (544kB)
    100% |################################| 544kB 410kB/s
Collecting Werkzeug>=0.7 (from Flask)
  Downloading Werkzeug-0.11.4-py2.py3-none-any.whl (305kB)
    100% |################################| 307kB 531kB/s
Collecting Jinja2>=2.4 (from Flask)
  Downloading Jinja2-2.8-py2.py3-none-any.whl (263kB)
    100% |################################| 266kB 935kB/s
Collecting itsdangerous>=0.21 (from Flask)
  Downloading itsdangerous-0.24.tar.gz (46kB)
    100% |################################| 49kB 1.6MB/s
Collecting MarkupSafe (from Jinja2>=2.4->Flask)
  Downloading MarkupSafe-0.23.tar.gz
Installing collected packages: Werkzeug, MarkupSafe, Jinja2, itsdangerous, Flask
  Running setup.py install for MarkupSafe
  Running setup.py install for itsdangerous
  Running setup.py install for Flask
Successfully installed Flask-0.10.1 Jinja2-2.8 MarkupSafe-0.23 Werkzeug-0.11.4 itsdangerous-0.24
```

The above command can be run directly, without virtual environment for system-wide installation.

## Application

In order to test Flaks installation install, you could type the following code in your Python editor as name.py. Here *name* could be any word. I called mine flasky.
```python
from flask import Flask

app = Flask(__name__)


@app.route('/')
def flask_world():
    return 'Welcome to Flasky!'

if __name__ == '__main__':
    app.run()

```

A couple of things to note from the above snippet:

+ Importing `flask` module is necessary and important. The object Flask class is our WSGI application.
+ Flask constructor takes the name of current module (__name__) as argument.
+ The `route()` function of the Flask class is a *decorator*, which tells the application which URL should call the associated function.
+ Finally the `run()` method of Flask class runs the application on the local development server.

### Functions to note

> `app.route(rule, options)`

+ The rule parameter represents the URL for the function to open
+ The options parameter is a list of parameters to be forwarded to the underlying Rule object
In the above example, **‘/’** URL is bound with **flask_world()** function. Hence, when the home page of web server is opened in browser, the output of this function will be rendered. This will be a simple text "Welcome to Flasky!".


> `app.run(host, port, debug, options)`

All these parameters are optional

+ **host**: Hostname to listen on. Defaults to 127.0.0.1 (localhost). Set to ‘0.0.0.0’ to have server available externally.
+ **port**: Defaults to 5000.
+ **debug**: Defaults to false. If set to true, provides a debug information.
+ **options**: To be forwarded to underlying Werkzeug server.

To execute the above snippet simply go to your terminal and go to the directory that holds the project and type in
```bash
python flasky.py
```

You will recieve the following information
```bash
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```
Open the above URL (localhost:5000) in the browser. ‘Welcome to Flasky!’ message will be displayed on it.

### Debug mode

A Flask application is started by calling the run() method. However, while the application is under development, it should be restarted manually for each change in the code. To avoid this inconvenience, enable debug support. The server will then reload itself if the code changes. It will also provide a useful debugger to track the errors if any, in the application.

The Debug mode is enabled by setting the debug property of the application object to True before running or passing the debug parameter to the run() method.
```python
app.debug = True
app.run()
app.run(debug = True)
```

## Routing

Modern web frameworks use the routing technique to help a user remember application URLs. It is useful to access the desired page directly without having to navigate from the home page.

The `route()` decorator in Flask is used to bind URL to a function. For example −

```python
@app.route('/flasky-closet')
def flasky_closet():
   return 'This is what flasky likes to wear.'
```   
Here, URL `'/flasky-closet'` rule is bound to the `flasky_closet()` function. As a result, if a user visits http://localhost:5000/flasky-closet URL, the output of the `flasky_closet()` function will be rendered in the browser. In this case a text `This is what flasky likes to wear.`

Alternatively, the `add_url_rule()` function of an application object is also available to bind a URL with a function as in the above example, `route()` is used.

A decorator’s purpose is also served by the following representation −

```python
def flasky_closet():
   return 'This is what flasky likes to wear.'
app.add_url_rule('/', 'flasky-closet', flasky)
```

## Variable Rules

It is possible to build a URL dynamically, by adding variable parts to the rule parameter. This variable part is marked as <variable-name>. It is passed as a keyword argument to the function with which the rule is associated.

In the following example, the rule parameter of `route()` decorator contains `<name>` variable part attached to URL `/flasky-says-hello`. Hence, if the http://localhost:5000/flasky-says-hello/Lusina is entered as a URL in the browser, 'Lusina' will be supplied to `flasky_greet()` function as argument.

```python
from flask import Flask
app = Flask(__name__)

@app.route('/flasky-says-hello/<name>')
def flaksy_greet(name):
   return 'Flasky says hello %s!' % name

if __name__ == '__main__':
   app.run(debug = True)
```

Running above script from the Python shell and opening the browser with URL http://localhost:5000/flasky-say-hello/Lusina

The following output will be displayed in the browser.

> `Flasky says hello Lusina!`

In addition to the default string variable part, rules can be constructed using the following converters −
+ **int** accepts integer
+ **float** For floating point value
+ **path** accepts slashes used as directory separator character

```python
@app.route('/flasky-age/<int:postID>')
def flasky_age(postID):
    return 'Flasky just turned  %d' % postID


@app.route('/flasky-version/<float:revNo>')
def flasky_version(revNo):
    return 'Flasky version %f' % revNo
```

Running the above code from Python Shell. Visit the URL http://localhost:5000/flasky-age/11 in the browser.
The given number is used as argument to the flasky_age() function. The browser displays the following output:

> `Flasky just turned 11`

Enter this URL in the browser − http://localhost:5000/flasky-version/1.1

The flasky_version() function takes up the floating point number as argument. The following result appears in the browser window −

> `Flasky version 1.100000`

The URL rules of Flask are based on Werkzeug’s routing module. This ensures that the URLs formed are unique and based on precedents laid down by Apache.

Consider the rules defined in the following script −
```python
from flask import Flask
app = Flask(__name__)

@app.route('/flask')
def hello_flask():
   return 'Hello Flask'

@app.route('/python/')
def hello_python():
   return 'Hello Python'

if __name__ == '__main__':
   app.run()
```python

Both the rules appear similar but in the second rule, trailing slash (/) is used. As a result, it becomes a canonical URL. Hence, using /python or /python/ returns the same output. However, in case of the first rule, /flask/ URL results in 404 Not Found page.

## URL Building

The `url_for()` function is very useful for dynamically building a URL for a specific function. The function accepts the name of a function as first argument, and one or more keyword arguments, each corresponding to the variable part of URL.

The below code is a small snippet demonstrating the same, it builds on the previous snippets.

```python
from flask import Flask, redirect, url_for
# some code
...

"""
using url_for and redirect to redirect the user in case they are not admin, for instance
the flasky_admin function is the admin site
"""


@app.route('/admin')
def flasky_admin():
    return 'Hello, welcome to the admin page. Admin privileges!'

"""
below function is the guest site
"""


@app.route('/guest/<guest>')
def flasky_guest(guest):
    return 'Hello %s, You are logged in as guest in Flasky\'s world' % guest


"""
below function checks the user, if they are admin, they will be redirected to the admin site,
if they are guests, they will be redirected to the guest site. t
This function acts as a validator based on the parameter passed in, in this case, based on the url typed in,
it will redirect to the relevant function based on the input
"""


@app.route('/user/<name>')
def flasky_user(name):
    if name == 'admin':
        return redirect(url_for('flasky_admin'))
    else:
        return redirect(url_for('flasky_guest', guest=name))

#  other code
...
```

The above script has a function `flasky_user(name)` which accepts a value to its argument from the URL. This function checks if an argument received matches `admin` or not. If it matches, the application is redirected to the `flasky_admin()` function using `url_for()`, otherwise to the `flasky_guest()` function passing the received argument as guest parameter to it.

On running the above code, this is the output when the url is **http://localhost:5000/admin**
> Hello, welcome to the admin page. Admin privileges!

When the url is changed to http://localhost:5000/guest/Meme
> Hello Meme, You are logged in as guest in Flasky's world


## HTTP methods

The following table is a summary of the HTTP methods availaible:
| Method  | Description
|---|
|   GET   | Sends data in unencrypted form to the server. Most common method.
|   POST  | Sends data in unencrypted form to the server. Most common method.
|   HEAD  | Same as  GET, but without response body
|   PUT   | Replaces all current representations of the target resource with the uploaded content
|   DELETE| Removes all current representations of the target resouce given by URL

By default, the Flask route responds to the *GET* requests. However, this preference can be altered by providing methods argument to `route()` decorator.

In order to demonstrate the use of `POST` method in URL routing, first let us create an HTML form and use the POST method to send form data to a URL.

Save the following script as login.html
```html
<html>
   <body>
      <form action = "http://localhost:5000/Login" method = "post">
         <p>Enter Name:</p>
         <p><input type = "text" name = "nm" /></p>
         <p><input type = "submit" value = "submit" /></p>
      </form>
   </body>
</html>
```

The following demonstrate HTTP requests. The first function, `success(name)` is only called when the user is successful in logging in. The `request` module has to be imported.

```python
from flask import Flask, redirect, url_for, request

@app.route('/success/<name>')
def success(name):
    return 'welcome to Flasky! %s' % name
```

This below function redirects the user to the login page, The `app.route` decorator takes in two arguments, the /Login page url and the HTTP methods. It checks the HTTP requests, if the request is POST, http://localhost/login is mapped to the `login()` function. Since the server has received data by POST method, value of `nm` parameter obtained from the form data is obtained by −

> user = request.form['nm']

It is then passed to `/success` URL as variable part. The browser displays a welcome message in the window.

Changing the method parameter to ‘GET’ in login.html and opening it again in the browser will cause the data recieved on server by the GET method. The value of `nm` parameter is now obtained by

> User = request.args.get(‘nm’)

Here, args is dictionary object containing a list of pairs of form parameter and its corresponding value. The value corresponding to `nm` parameter is passed on to `/success` URL as before.

``` python
@app.route('/Login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        user = request.form['nm']
        return redirect(url_for('success', name=user))
    else:
        user = request.args.get('nm')
        return redirect(url_for('success', name=user))
```


