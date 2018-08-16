---
path:  "/tech/memoize-python"
title: Concept of Memoize
subtitle: A gentle introduction to memoize
excerpt: Memoization ensures that a function doesn't run for the same inputs more than once by keeping a record of the results for given inputs (usually in a dictionary).
tags: [data-structures, python, algorithms, memoize]
category: tech
date: "2017-05-17T12:00:00+00:00"
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image:
 teaser: memoize.png
 thumbnail: memoize.png
---

Memoization ensures that a function doesn't run for the same inputs more than once by keeping a record of the results for given inputs (usually in a dictionary).

For example, a simple recursive function for computing the n<sup>th</sup> fibonacci number:

```python
def fib_recursive(n):
	if n < 0:
	    raise IndexError('Index was negative. No such thing as a negative index in a series.')

	# base cases
	if n in [0, 1]:
	    return n

	print "computing fib_recursive(%i)" % n
	return fib_recursive(n - 1) + fib_recursive(n - 2)
```

This will run the same input a couple of times

```bash
>>> fib_recursive(8)
computing fib_recursive(8)
computing fib_recursive(7)
computing fib_recursive(6)
computing fib_recursive(5)
computing fib_recursive(4)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(2)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(4)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(2)
computing fib_recursive(5)
computing fib_recursive(4)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(2)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(6)
computing fib_recursive(5)
computing fib_recursive(4)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(2)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(4)
computing fib_recursive(3)
computing fib_recursive(2)
computing fib_recursive(2)
21
```

We can imagine the recursive calls of this function as a tree, where the two children of a node are the two recursive calls it makes. We can see that the tree quickly branches out of control:

![](https://www.interviewcake.com/images/svgs/fibonacci__binary_tree_recursive.svg?bust=145)

To avoid the duplicate work caused by the branching, we can wrap the function in a class that stores an instance variable, memo, that maps inputs to outputs. Then we simply:

1.  Check memo to see if we can avoid computing the answer for any given input, and
2.  Save the results of any calculations to memo.

```python
class Fibber:
	def __init__(self):
        self.memo = {}

    def fib(self, n):

        if n < 0:
            raise Exception("Index was negative. No such thing as a negative index in a series.")

        # base cases
        elif n in [0, 1]:
            return n

        # see if we've already calculated this
        if n in self.memo:
            print "grabbing memo[%i]" % n
            return self.memo[n]

        print "computing fib(%i)" % n
        result = self.fib(n - 1) + self.fib(n - 2)

        # memoize
        self.memo[n] = result

        return result
```

We save a bunch of calls by checking the memo:

```python
>>> Fibber().fib(8)
computing fib(8)
computing fib(7)
computing fib(6)
computing fib(5)
computing fib(4)
computing fib(3)
computing fib(2)
grabbing memo[2]
grabbing memo[3]
grabbing memo[4]
grabbing memo[5]
grabbing memo[6]
21
```

Now in our recurrence tree, no node appears more than twice:

![](https://www.interviewcake.com/images/svgs/fibonacci__binary_tree_memoized.svg?bust=145)

Memoization is a common strategy for dynamic programming problems, which are problems where the solution is composed of solutions to the same problem with smaller inputs (as with the fibonacci problem, above). The other common strategy for dynamic programming problems is going bottom-up, which is usually cleaner and often more efficient.
