---
layout:  article
title:  Complexity of Algorithms
categories:  tech
tags:  [complexity of algorithms, algorithms]
comments:  true
ads:  true
image:
 feature: algorithm-complexity.jpg
 thumb: algorithm-complexity.jpg
 teaser: algorithm-complexity.jpg
---

The whole point of the big-O/Ω/Θ stuff was to be able to say something useful about algorithms.
So, let's return to some algorithms and see if we learned anything.
Consider this simple procedure that sums a list (of numbers, we assume):
procedure sum(list)
    total = 0
    for i from 0 to length(list)-1
        total += list[i]
    return total
First: is the algorithm correct? Does it solve the problem specified?
Second: is it fast?
To evaluate the running time of an algorithm, we will simply ask how many “steps” it takes.
In this case, we can count the number of times it runs the += line.
For a list with \(n\) elements, it takes \(n\) steps.
Or is counting the += line the right thing to do?
When implementing the for loop, each iteration requires an add (for the loop index) and a comparison (to check the exit condition). We should count those.
Also, the variable initialization and return steps.
So, \(3n+2\) steps.
But, not all of those steps are the same.
How long does an x86 ADD instruction take compared to a CMP or RET instruction?
Will the compiler keep both i and total in registers, or will one/both be in RAM? (A factor of ~10 difference.)
How do those instructions interact in the pipeline? Which can be sent through parallel pipelines in the processor and executed concurrently?
The answer to those is simple: I don't know and you don't either.
That's part of the reason we're asking about algorithms, not programs.
But both \(n\) and \(3n+2\) are perfectly reasonable proposals for the answer.
Deciding between them requires more knowledge about the actual implementation details than we have.
Good thing we have the function growth notation.
Remember: this is easy for \(n=5\) elements. A good or bad algorithm will both be fast then.
We want to know how the algorithm behaves for large \(n\).
Finally our answer: the sum procedure has running time \(\Theta(n)\).
We'll say that this algorithm has time complexity \(\Theta(n)\), or “runs in linear time”.
Both \(n\) and \(3n+2\) are \(\Theta(n)\), and so is any other “exact” formula we could come up with.
The easy answer (count the += line) was just as correct as the very careful one.
The big-Θ notation hides all of the details we can't figure out anyway.
Another example: print out the sum of each two numbers in a list.
That is, given the list [1,2,3,4,5], we want to find 1+2, 1+3, 1+4, 1+5, 2+3, 2+4,….
Pseudocode:
procedure sum_pairs(list)
    for i from 0 to length(list)-2
        for j from i+1 to length(list)-1
            print list[i] + list[j]
For a list with \(n\) elements, the for j loop iterates \(n-1\) times when it is called with i==0, then \(n-2\) times, then \(n-3\) times,…
So, the total number of times the print step runs is \[\begin{align*} (n-1)+(n-2)+\cdots+2+1 &= \sum_{k=1}^{n-1} k\\ &= \frac{n(n-1)}{2}\\ &= \frac{n^2}{2}-\frac{n}{2}\,. \end{align*}\]
If we had counted the initialization of the for loops, counter incrementing, etc, we might have come up with something more like \(\frac{3}{2}n^2 + \frac{1}{2}n + 1\).
Either way, the answer we give is that it takes \(\Theta(n^2)\) steps.
Or, the algorithm “has time complexity \(\Theta(n^2)\)” or “has \(\Theta(n^2)\) running time” or “has quadratic running time”.
The lesson: when counting running time, you can be a bit sloppy.
We only need to worry about the inner-most loop(s), not the number of steps in there, or work in the outer levels.
… because they are going to disappear anyway as constant factors and lower-order terms when they go into a big-O/Ω/Θ anyway.
Average and Worst Case

Consider a linear search: we want to find an element in a list and return its (first) position, or -1 if it's not there.
procedure linear_search(list, value)
    for i from 0 to length(list)-1
        if list[i] == value
            return i
    return -1
How many steps there?
The answer is: it depends.
If the thing we're looking for is in the first position, it takes \(\Theta(1)\) steps.
If it's at the end, or not there, it takes \(\Theta(n)\) steps.
The easiest thing to count is usually the worst case: what is the maximum steps required for any input of size \(n\)?
The worst case is that we go all the way to the end of the list, but don't find it and return -1.
The only line that makes sense to count here is the if line. It's in the inner-most loop, and is executed for every iteration.
We could also count the number of comparisons made: the == and the implicit comparison in the for loop.
That is either \(n\) or \(2n+1\) steps, so \(\Theta(n)\) complexity.
The other useful option is the average case: what is the average steps required over all inputs of size \(n\)?
Much harder to calculate, since you need to consider every possible input to the algorithm.
Even if we assume the element is found, the possible number of comparisons are:
Found in position	Comparisons
1	2
2	4
⋮	⋮
\(n\)	\(2n\)
On average, the number of comparisons is: \[\frac{2+4+\cdots+2n}{n} = n+1\,.\]
Again, we have \(\Theta(n)\) complexity.
… but it's a good thing we checked. Some algorithms are different.
Good/bad times

We have said that these running times are important when it comes to running times of algorithm.
But we are throwing away a lot of information when we look only at big-O/Ω/Θ.
The lower-order terms must mean something.
The leading constants definitely do.
Assuming one million operations per second, this is the approximate running time of an algorithm given running time, with an input of size \(n\):
\(n\)	\(\log_2 n\)	\(n\)	\(n\log_2 n\)	\(n^2\)	\(n^{3}\)	\(2^n\)
\(10\)	3.3 μs	10 μs	33 μs	100 μs	1 ms	1 ms
\(10^2\)	6.6 μs	100 μs	664 μs	10 ms	1 s	\(4\times 10^{16}\) years
\(10^4\)	13 μs	10 ms	133 ms	1.7 minutes	11.6 days	\(10^{2997}\) years
\(10^6\)	20 μs	1 s	20 s	11.6 days	32000 years	\(10^{300000}\) years
Maybe that gives a little idea why we'll only worry about complexity
… at least at first.
A summary:
If you can get \(O(\log n)\) life is good: hand it in and go home.
\(O(n\log n)\) is pretty good: hard to complain about it.
\(O(n^k)\) could be bad, depending on \(k\): you won't be solving huge problems. These are polynomial complexity algorithms for \(k\ge 1\).
\(\Omega(k^n)\) is a disaster: almost as bad as no algorithm at all if you have double-digit input sizes. These are exponential complexity algorithms for \(k\gt 1\).
See also: Numbers everyone should know
A problem that has a polynomial-time algorithm is called tractable.
No polynomial time algorithm: intractable.
There is a big category of problems that nobody has a polynomial-time algorithm for, but also can't prove that none exists: the NP-complete problems.
Some examples: Boolean satisfiability, travelling salesman, Hamiltonian path, many scheduling problems, Sudoku (size \(n\)).
If you have an algorithm with a higher complexity than necessary, no amount of clever programming will make up for it.
No combination of these will make a \(O(n^2)\) algorithm faster than an \(O(n\log n)\): faster language, better optimizer, hand-optimization of code, faster processor.
Important point: the complexity notations only say things about large \(n\).
If you always have small inputs, you might not care.
Algorithms with higher complexity class might be faster in practice, if you always have small inputs.
e.g. Insertion sort has running time \(\Theta(n^2)\) but is generally faster than \(\Theta(n\log n)\) sorting algorithms for lists of around 10 or fewer elements.
The most important info that the complexity notations throw away is the leading constant.
There is a difference between \(n^2\) instructions and \(100n^2\) instructions to solve a problem.
Once you have the right big-O, then it's time to worry about the constants.
That's what clever programming can do.
When we're talking about algorithms (and not programming), the constants don't usually matter much.
It's rare to have an algorithm with a big leading constant.
So it's not really possible to decide between the algorithms.
Usually it's a choice between \(4n\log n\) or \(5n\log n\): you probably have to implement, compile, and profile to decide for sure.
Example: sorting algorithms. There are several algorithms to sort a list/array.
Insertion/Selection/Bubble Sorts: \(\Theta(n^2)\).
Merge/Heap Sorts: \(\Theta(n\log n)\).
Quicksort: \(\Theta(n\log n)\) average case but (very rarely) \(\Theta(n^2)\) worst case.
But quicksort is usually faster in practice.
… except when it isn't.
Several recent languages/libraries have implemented a heavily-optimized mergesort (e.g. Python, Perl, Java ≥JDK1.3, Haskell, some STL implementations) instead of Quicksort (C, Ruby, some other STL implementations).
Space Complexity

We have only been talking about running time/speed so far.
It also makes good sense to talk about the complexity of other things.
Most notably, memory use by an algorithm.
An algorithm that uses \(\Theta(n^{3})\) space is bad. Maybe as bad as \(\Theta(n^{3})\) time.
An algorithm that uses \(O(1)\) extra space (in addition to space needed to store the input) is called in-place.
e.g. selection sort is in-place, but mergesort (\(\Theta(n)\) extra space) and Quicksort (\(\Theta(\log n)\) extra space, average case) aren't.
