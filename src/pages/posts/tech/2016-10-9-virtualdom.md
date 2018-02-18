---
layout: article
categories:  tech
title: The Virtual DOM with React
excerpt: virtual DOM manipulation with ReactJS
author: brian_lusina
share: true
image:
 feature: virtualdom.png
 teaser: virtualdom.png
 thumb: virtualdom.png
 creditlink: http://slides.com/brandonkonkle/exploring-virtual-dom/
 credit: Slides.com

---

JavaScript is one of the most powerful languages in the current era and it is quickly gaining ground. What makes it powerful is its dynamic nature and ability to manipulate the DOM. This manipulation is at the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations.

This is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

As an example, let's say that you have a list that contains ten items. You check off the first item. Most JavaScript frameworks would rebuild the entire list. That's ten times more work than necessary! Only one item changed, but the remaining nine get rebuilt exactly how they were before.

Rebuilding a list is no big deal to a web browser, but modern websites can use huge amounts of DOM manipulation. Inefficient updating has become a serious problem. This could prove slow for the user and thus grant bad User experience, making it seem as if the website is slow.

To address this problem, the people at React popularized something called the virtual DOM.

## Virtual DOM

For every DOM object, there is a corresponding "virtual DOM object." This is a representation of a DOM object, like a lightweight copy.

This has the same properties as a real DOM object, but it lacks the power to directly change what's on the screen.

Manipulating the DOM is slow, but manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

When you render a JSX element, every single virtual DOM object gets updated.

This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly because nothing is drawn onscreen.

Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called **diffing.**

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item, and leave the rest of your list alone.

This makes a big difference! React can update only the necessary parts of the DOM. React's reputation for performance comes largely from this innovation.

In summary, here's what happens when you try to update the DOM in React:

1. The entire virtual DOM gets updated.
2. The virtual DOM gets compared to what it looked like before you updated it. 
3. React figures out which objects have changed.
4. The changed objects, and the changed objects only, get updated on the real DOM
5. Changes on the real DOM cause the screen to change.






