---
path:  "/tech/object-immutability-js"
title: Object Immutability In JavaScript
subtitle: Creating object immutability in JavaScript
excerpt: Creating object immutability in JavaScript has its advantages when it comes to programming, it ensures that objects retain their properties and has no unexpected side-effects. How to we create this immutability in JavaScript?
tags:  [JavaScript, Objects]
category: tech
date: "2018-09-18T06:30:00+00:00"
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image:
 feature: object-freeze.png
 teaser: object-freeze.png
 thumbnail: object-freeze.png
 creditlink:
 credit:
published: true
---

What is immutabilty? I see this word being thrown around a lot, especially in the software industry, where other phrases such as __clean code__ and __code quality__ are constantly being emphasized. What is it? Why is it necessary to understand what it is and how to use it?

In this post, I shall write briefly about what it is and how to use it. This will not use any JS framework, but will be pure JavaScript. This is because this is applicable in any JavaScript context(read framework). Frameworks and libraries come with their own rules of immutability. How do they creat these rules arround immutability?

> Immutability means _not capable or susceptible to change_

In other words, not capable of change. In object oriented programming and functional programming, this means that an immutable object is an _object whose state cannot be modified after it is created_. Objects in general have state and behaviour. When an object is immutable, the state and behaviour can not change.

This has several benefits. First of all ensures this ensures that there are no intended side-effects and we know exactly what an object's state and behaviour is at any given time within the application's lifecycle. It makes us more confident when writing our code, as we know exactly what to expect from an immutable object.

Of course, this also means that it's state can not be modified and can also be an issue in the case where we do need to alter it's current state. This is why we create a copy of the object and alter the state of the copy instead of the original object(A pattern that is used in [Redux](http://redux.js.org)).

Before delving into that, let us see how to create object immutability in plain ol' JavaScript:

```javascript
let johnDoe = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    age: 50
}

const frozenJohnDoe = Object.freeze(johnDoe);

frozenJohnDoe.age = 33;
// Throws an error in strict mode

frozenJohnDoe.age;
// expected output: 50
```

> An example of immutabililty in JavaScript

Above, we have a `johnDoe` object with some properties (`firstName`, `lastName`, `email` and `age`). These properties at time of create are mutable(can be changed). To make this object immutable, we use [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze). A very handy function that _freezes_ the object. Therefore, we can not alter any of its properties on the following lines.

This means nothing can be added or removed from the frozen object. Our `johnDoe` object is now frozen and can never be able to alter his age, sorry John :(. This gives us a sense of what to always expect when we use the frozen object. We can always be guaranteed that his age will be 50 when we use it.

It is important to note that when not running in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), it will appear as if mutation of the object's properties can be done. Here is an example:

```javascript
// still using our johnDoe object above
> johnDoe.age = 5
5
> johnDoe
{ firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@email.com',
  age: 50 }
```

> While running in a Node REPL

While trying to set the age of the object to 5, no error is thrown and thus it will appear as if a successful mutation actually occured, but in reality, the properties remain the same, age has not been altered.

Data properties of frozen objects can not be changed, configurable attributes are set to false. This is what sets the immutability of the object. There is a problem though. What if my object's properties' values were other objects? Are those immutable to? An example:

```javascript
> let shoppingCart = {
    fruits: {
        banana: "banana",
        apple: "apple",
        oranges: "oranges"
    },
    bread: {
        brown: "brown bread",
        white: "white bread"
    }
    price: 50
}
// freeze our object, we do not need to save a copy of it. As the function returns our initial object and NOT a fronzen copy
> Object.freeze(shoppingCart)

// fruits remains as is
> shoppingCart.fruits
{
    banana: "banana",
    apple: "apple",
    oranges: "oranges"
}
// attempt to mutate the fruits object's properties
> shoppingCart.fruits.banana = "very ripe banana"
'very ripe banana'

> shoppingCart.fruits
{
    banana: "very ripe banana",
    apple: "apple",
    oranges: "oranges"
}
```

> Again, running in a Node REPL

As, you can see from above, the `fruits` object's values can be mutated, yet it is in a frozen object `shoppingCart`. This is known as __shallow freeze__. This means that the immediate properties of `shoppingCart` have been made immutable, however, if the values of said properties are objects, they are not frozen.

For the fruits object to also have the same level of immutability, they have to also be frozen:

```javascript
> let fruits = {
    banana: "banana",
    apple: "apple",
    oranges: "oranges"
};
> Object.freeze(fruits);

> let bread = {
    brown: "brown bread",
    white: "white bread"
}
> Object.freeze(bread);

> let shoppingCart = {
    fruits,
    bread,
    price: 50
};

// freeze our object, we do not need to save a copy of it
> Object.freeze(shoppingCart)

// fruits remains as is
> shoppingCart.fruits
{
    banana: "banana",
    apple: "apple",
    oranges: "oranges"
}
// attempt to mutate the fruits object's properties
> shoppingCart.fruits.banana = "very ripe banana"
'very ripe banana'

> shoppingCart.fruits
{
    banana: "banana",
    apple: "apple",
    oranges: "oranges"
}
```

> Now we have immutability for our fruits :)

Of course, this can be a pain when dealing with objects that have properties that have other objects and those objects have properties that have other objects and so forth. Creating a recursive function that freezes all properties of the object that are objects themselves will save us the time and ensure that we attain __deep freeze__ on our object.

We have to ensure that the recurstion does not end up in a cycle though.

```javascript
const deepFreeze = object => {
    // get the property names
    let propNames = Object.getOwnPropertyNames(object);

    // freeze properties before freezing self
    for(let name of propNames){
        let value = object[name]

        object[name] = value && typeof value === "object" ?
            deepFreeze(value) : value
    }

    // freeze self
    return Object.freeze(object);
}
```

> This function will recursively freeze all properties of an object that are objects.

We can now use this function as below:

```javascript
var collection = {
    internal: {
        a: null
    }
};

deepFreeze(collection);

// fails silently in non-strict mode
collection.internal.a = 'anotherValue';
collection.internal.a; // null
```

You can check whether out objects are frozen with `Object.isFrozen`, this takes in an object and checks whether the configurable properties have been set to false and returns a boolean value (true, if the object is frozen, false otherwise).

__Object.freeze__ also works on arrays:

```javascript
let a = [0];
Object.freeze(a); // The array cannot be modified now.

a[0]=1; // fails silently
a.push(2); // fails silently

// In strict mode such attempts will throw TypeErrors
function fail() {
  "use strict"
  a[0] = 1;
  a.push(2);
}

fail();
```

## The End

Next time you are writing a Javascript module and you are exposing objects that other developers may use, make sure that they have the exact needed permissions to alter your objects, otherwise they may broke your code without even realising it. Make sure also to document it.