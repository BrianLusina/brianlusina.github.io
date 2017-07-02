---
layout: article
categories:  tech
title: Perfect Binary Tree
excerpt: A gentle introduction to perfect binary trees
author: brian_lusina
share: true
image:
 feature: binary_tree.png
 teaser: binary_tree.png
 thumb: binary_tree.png
 creditlink: https://www.quora.com/What-are-binary-trees-and-how-can-I-practice-implementing-them-in-Python
 credit: Quora
---

Binary trees are part of a data structure known as `Trees`, yeah, I know, the forefathers of computer science and software engineering were quite creative. They were quite observant. Trees, more or less, look like trees, like the literal trees in nature. Now, that we have the most basic and almost worst analogy out there, what are binary trees?

I shall give a basic and brief introduction into `binary trees`, this will assume that you have knowledge on tree data structures. Even if you don't, you can still read on, they are all pretty much related, so the knowledge is transferable.

A binary tree is a `tree` where every node has 2 or fewer children. The children are usually called `left` and `right`.
A simple implementation in `Python`:

``` python
class BinaryTreeNode(object):
	def __init__(self, value):
    	self.value = value
         self.left = None
         self.right = None
````
> A class definition for a Binary Tree Node in Python

In JavaScript:

``` javascript
function BinaryTreeNode(value){
	this.value = value;
    this.left = null;
    this.right = null;
}
```
> An object definition in JavaScript

In Java:

``` java
public class <T> BinaryTreeNode{
	public T value;
    public BinaryTreeNode left;
    public BinaryTreeNode right;
    
    public BinaryTreeNode(T value){
    	this.value = value;
    }
}
```
> Binary Tree node implementation of Binary Tree node in Java, this uses T to define objects.

And finally in Ruby:

``` ruby
class BinaryTreeNode

    attr_accessor :value, :left, :right

    def initialize(value)
        @value = value
        @left  = nil
        @right = nil
    end
end
```

Why these languages? Well, because I am familiar with them and also to show that it does not matter the language, the implementation of a data structure is usually the same.

![binary tree](https://www.interviewcake.com/images/svgs/binary_tree__depth_5.svg?bust=138)
> Binary tree data structure, you will notice, it pretty much looks like a tree.

This particular example is special because every level of the tree is completely full. There are no "gaps." We call this kind of tree "perfect."

Binary trees have a few interesting properties when they're perfect:

1. The number of total nodes on *each* doubles as we move down the tree
	![perfectBinaryTree](https://www.interviewcake.com/images/svgs/binary_tree__depth_5_with_number_of_nodes_labelled.svg?bust=138)

2. The number of nodes on the last level is equal to the sum of all the nodes on other levels(plus 1)
	Let's call the number of nodes `n`, and the height of the tree `h`. `h` can also be thought of as the *number of levels*. If we had `h`, how could we calculate `n`?
    Let's just add up the number of nodes on each level! How many nodes are on each level?
    If we zero-index the levels, the number of nodes on the `x`th level is exactly `2^x`!
    
    + Level 0: 2^0 nodes
    + Level 1: 2^1 nodes,
    + Level 2: 2^2 nodes,
    + Level 3: 2^3 nodes,
    + etc
    
    So our total number of nodes is:
    	$$n= 2^0 + 2^1 +2^2 +2^3 +...+2^{h−1}$$
        > Why only up to 2^{h-1} ? Notice that we started counting our levels at 0. So if
        > we have h levels in total, the last level is actually the "h−1"-th level. 
        > That means the number of nodes on the last level is 2^{h-1}.
    
    But we can simplify. Property 2 tells us that the number of nodes on the last level is (1 more than) half of the total number of nodes, so we can just take the number of nodes on the last level, multiply it by 2, and subtract 1 to get the number of nodes overall. 
    We know the number of nodes on the last level is 2^{h-1}, So:
    
    $$ n = 2^{h-1} * 2 - 1$$
    $$n = 2^{h−1}∗2^{1}−1$$
    $$n = 2^{h-1+1}- 1$$
    $$n = 2^{h} - 1$$
    
    So that's how we can go from `h` to `n`. What about the other direction?
    
    We need to bring the `h` down from the exponent. That's what logs are for!
    
    First, some quick review on Algebra. $$log_{10}(100)$$ simply means, "What power must you raise 10 to in order to get 100?". Which is 2, because $$10^2 = 100$$.
    We can use logs in algebra to bring variables down from exponents by exploiting the fact that we can simplify $$log_{10}(10^2)$$. What power must we raise 10 to in order to get $$10^2$$?
    That's easy — it's 2.
    
    So in this case we can take the $$log_{2}$$ of both sides:
    
    $$n = 2^{h} - 1$$
    $$n + 1 = 2^{h}$$
    $$log_{2}{((n+1))} = log_{2}{(2^{h})}$$
    $$log_{2}{(n+1)} = h$$
    

### Conclusion

So that's the relationship between height and total nodes in a perfect binary tree.
I know it involved a bit of Math, which you did not want nor expect, however, this will make the programs you write faster and better and of course easier to maintain and debug.

Let us plant more trees!
 
