---
layout:  article
title:  Leap Years
categories:  articles
excerpt:  Obtaining Next Leap Years
author:  brian_lusina
tags:  [data types, algorithms, puzzles]
ads:  true
share:  true
image: 
 feature: leap-years.jpg
 teaser: leap-years.jpg
 thumb: leap-years.jpg
---

Output all the leap years for the next 20 years between begin year and end year

The following code outputs all the leap years in an ArrayList. The user inputs the beginning year and end year and the program checks for all the years in between the beginning year and end year.
An error is thrown if the end year the user inputs is less than the start year. An example below.
 

```Java

public class forloops {
       public static void main(String[] args){
        System.out.println(leaps(2016,2036)); //output [2016, 2020, 2024, 2028, 2032, 2036]
		System.out.println(leaps(2016,2012)); //java.lang.NumberFormatException: 2012 cannot be less than 2016
    }

    public static ArrayList<Integer> leaps(int begin, int end){
        if(end< begin){
            throw new NumberFormatException(String.valueOf(end) + " cannot be less than " + String.valueOf(begin));
        }
        ArrayList<Integer> leapYears = new ArrayList<>();
        for(int n = begin ; n <= end; n++) {
            //check if year is leap
            if ((!(n % 100 == 0) && n % 400 == 0) || n % 4 == 0) {
                leapYears.add(n);
            }
        }
        return leapYears;
    }
}

```
> A demonstration of for loops that inputs the leap years between 2 year ranges


The code begins by checking if the end year is less than the beginning year and `throw`s an error if that is true. If it is not, it continues on with the code and creates a new `ArrayList` which takes in Integer objects and performs a for loop to cycle through all the years from the begin year to the end year.

The code then checks if the year is a leap year by ascertaining whether the input year is divisible by 100 (meaning it is not a century year like 1900 or 2100 0r 2000), negates it and checks whether it is also it is divisible by 400. This could evaluate to true or if the year is divisble by 4.

If this condition is met, the year is added to the `ArrayList` and continues the loop until the `boolean` condition in the for loop is false and breaks out of the for loop to return the `ArrayList`.
