---
layout: article
categories: articles
title: Big-O-Notation
excerpt: The Big Deal with the Big-O Notation and algorithms
author: brian_lusina
share: true
image:
 feature: big-o-notation-post.png
 teaser: big-o-notation-post.png
 thumb: big-o-notation-post.png
 creditlink: http://www.nuuneoi.com
 credit: NuuNoel
ads: true
---

Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.

A function's Big-O notation is determined by how it responds to different inputs. How much slower is it if we give it a list of 1000 things to work on instead of a list of 1 thing?

Consider this code:

```python
def item_in_list(to_check, the_list):
    for item in the_list:
        if to_check == item:
          return True
    return False
```

If we call this function like `item_in_list(2, [1,2,3])`, it should be quick. We loop over each thing in the list and if we find the first argument to our function, return True. If we get to the end and we didn't find it, return False.

The *"complexity"* of this function is **O(n)**. O(n) is read *"Order of N"* because the O function is also known as the Order function. which deals in *orders of magnitude*.

"Orders of magnitude" is basically tells the difference between classes of numbers. The difference between 1,000 and 10,000 is pretty big (in fact, its the difference between a junker car and a lightly used one). It turns out that in approximation, as long as you're within an order of magnitude, you're pretty close. 

If we were to graph the time it takes to run this function above with different sized inputs (e.g. an array of 1 item, 2 items, 3 items, etc), we'd see that it approximately corresponds to the number of items in the array. This is called a `linear graph`. This means that the line is basically straight if you were to graph it.

If, in the code sample above, our item was always the first item in the list, our code would be really fast! This is true, but Big-O is all about the **approximate worst-case performance of doing something**. The worst case for the code above is that the thing we're searching for isn't in the list at all. (Note: The math term for this is "upper bound", which means its talking about the mathematic limit of awfulness).

![image](https://justin.abrah.ms/static/images/o_n__plot.png "Run Time Characteristics of an O(n) function")
> Run Time characteristics of an O(n) function

Consider this next code snippet:

```python
def is_none(item):
    return item is None
```
This function is called `O(1)` which is called **"constant time"**. What this means is no matter how big our input is, it always takes the same amount of time to compute things.

![o1_charactersitics](https://justin.abrah.ms/static/images/o_1__plot.png 'Run time characteristics of O(1) function')
> Run time charactersitics of O(1) function

Consider this next example.
```python
def combinations(the_list):
   results = []
   for item in the_list:
       for inner_item in the_list:
           results.append((item, inner_item))
   return results
```

This matches every item in the list with every other item in the list. If we gave it an array `[1,2,3]`, we'd get back `[(1,1) (1,2), (1,3), (2, 1), (2, 2), (2, 3), (3, 1), (3, 2), (3, 3)]`. This is part of the field of **combinatorics**, which is the mathematical field which studies combinations of things. This function is considered **O(n^2)**. This is because for every item in the list we have to do n more operations. So n * n == n^2.

Below is a comparison of each of these graphs, for reference. You can see that an O(n^2) function will get slow very quickly where as something that operates in constant time will be much better. This is particularly useful when it comes to data structures.

![comparison](https://justin.abrah.ms/static/images/runtime_comparison.png)
> Comparison of O(n), O(1) and O(n^2) functions

Another Big O notation term is **O(2^N)** denotes an algorithm whose growth doubles with each additon to the input data set. The growth curve of an O(2^N) function is exponential - starting off very shallow, then rising meteorically. An example of an O(2^N) function is the recursive calculation of Fibonacci numbers:

An example:
```python
def fibonacci(number):
	if number <=1 :
		return number
    return fibonacci(number - 2) + fibonacci(number - 1);
}
```

