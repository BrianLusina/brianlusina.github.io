---
layout:  article
categories:  tech
tags:  [algorithms, sorting algorithms, array]
title:  Sorting Algorithms
image:
 feature: sorting-algorithms.png
 thumb: sorting-algorithms.png
 teaser: sorting-algorithms.png
---

Algorithms are set to achieve a certain outcome. The
Sorting algoritms follow numerical order and usually has random access to an array. This means that it can access random indexes of an array to perform a sort.

# Bubble Sort

Convinient for small data sets. Consider an array of elements such that:
		int[] arr = new int[]{14,33,27,10,33,19,42,44};
The array is not sorted. To sort this array, we compare 2 values at a time.
Steps:

+ compare 14 and 33, since 14 is less than 33, it remains in place
+ next we compare 33 and 27, 27 is less than 33, hence we have to swap postions such that;
	`arr[1]` = 33 takes the place of `arr[2]` and vice versa.
	The array now becomes:
		{14,27,33,10,33,19,48,44}
+ The next comparison is now between 33 and 10. 10 is less than 33, so we swap positions as before.
+ The process continues until all the elements in the array follow natural ordering.

This is obviously convenient for small data sets as we are comparing 2 elements at a time. If the array was of length 50, it would take much longer to complete and would be inefficient. This is not what an ideal algorithm should achieve.

```java
    /**
     * @implNote
     * set flag to true to begin first pass, initialize the step variable, create the temp variable
     * within while loop, set the flag to false awaiting first pass
     * record the steps taken in a variable called steps
     * holds the temp value for the current element in array
     * assign the current position of the array to the next element
     * assign the next position of the array to the temp value
     * set the flag to true to allow continuing of loop, record the steps taken
     * @param toSort array to perform the bubble sort
     * @return toSort the sorted array
     * */
    public static int[] bubbly(int[] toSort){
        boolean flag = true;
        int steps = 0;
        int temp;
        while(flag){
            flag = false;
            for(int x = 0; x < toSort.length-1;x++){
                if(toSort[x] > toSort[x+1]){
                    steps++;
                    temp = toSort[x];
                    toSort[x] = toSort[x+1];
                    toSort[x+1] = temp;
                    flag = true;
                }

            }
        }
        System.out.println(String.valueOf(steps)+ " steps taken");
        return toSort;
    }

    public static void main(String[] args){
        int[] arr = new int[]{18,29,1,100,17};
        int[] arrTwo = new int[]{100,16,33,48,60,21,80};
        /*Bubble sort Ascending*/
        System.out.println(Arrays.toString(bubbly(arr)));
        System.out.println(Arrays.toString(bubbly(arrTwo)));
		/*5 steps taken
		[1, 17, 18, 29, 100]
		9 steps taken
		[16, 21, 33, 48, 60, 80, 100]*/
    }

```
> Demonstration of a bubble sort algorithm, sorting elements in ascending order

Code snippet right [here](https://github.com/BrianLusina/Java-Playground/blob/master/Toy%20Problems/src/SortingAlgorithms/BubbleSortDemo.java).

# Merge Sort

Uses the *divide and conquer rule* it divides a problem into smaller parts until it reaches the simplest form possible. Then it rejoins the divided elements in a sorted format until it is a full list again. This sorting algorithm is mostly used in arrays.

Consider this example
27  10  12  25  34  16  15  31
divide it into two parts
27  10  12  25            34  16  15  31
divide each part into two parts
27  10            12  25            34  16            15  31
divide each part into two parts
27       10       12       25       34       16       15       31
 

merge (cleverly-!) parts

10  27            12  25            16  34            15  31
merge parts
10  12  25  27                 15  16  31  34
merge parts into one
10  12  15  16  25  27  31  34


# Insertion Sort


