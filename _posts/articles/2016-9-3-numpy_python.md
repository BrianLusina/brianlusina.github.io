
---
layout: article
categories: articles
title: NumPy
excerpt: NumPy Arrays and Python Lists
author: brian_lusina
share: true
image:
 feature: numpy.jpg
 teaser: numpy.jpg
 thumb: numpy.jpg
 creditlink: http://www.numpy.org/
 credit: NumPy
ads: true
---

NumPy is Numerical Python in full. For those who shall continue on with Data Science using Python, I suggest you have a look at the NumPy package. It is a very powerful tool that will most definitely make your life that much simpler.

A basic example of the use of NumPy
```python
from numpy import array

baseball = [12, 46, 489, 46, 5, 312, 31, 2, 3, 12, 31, 3, 13, 1, 31, 3, 13, 13, 1, 31, 313, 1, 31, 189, 4, 4, 31, 564,
            9, 19, 416, 49, 498, 4984, 1984]

print(type(array(baseball)))
<class 'numpy.ndarray'>

print(type(baseball))
<class 'list'>
```
> The 2 types are not similar, but almost the same operations can be performed on them.

## Performing simple operations

Say for example you get the heights of each football player in England. You call the Barclay's Premier League and since you are a major fan and a major stakeholder in Barclays(They don't just send this data to everyone, I tried), they send you the data of 1000 players' heights as a list. Sadly, they are all in inches and you do not use inches, but rather meters. You could use a `for loop` converting each to meters and multiplying by 0.0254. This will work, but it will take quite a while to execute.

``` python
heights = [78,45,70,80,75,84,76,84,71,72,73,84,75,88,79,...]
heights_m = [x * 0.0254 for x in heights]
print(heights_m)
```
> This uses a list comprehension to obtain a new list of the newly converted heights to meters.

NumPy on the other hand makes this process very simple and efficient. You will not have to use a for loop to perform such an operation.

``` python
from numpy import array
heights = [78,45,70,80,75,84,76,84,71,72,73,84,75,88,79,...]

heights_m = array(heights) * 0.0254
print(m)
```
> The output will be the same. NumPy array function simply took in the list of heights and multiplied each to 0.0254. No loop used.

The same could apply for weights. Say we now get weight data from the BPL. Unfortunately, again, they send data in pounds. We don't use pounds, instead we decide to use *kilograms*. we could do the same for loop above instead replace the `heights` with weights and instead use `0.453592` to perform the conversion. Alternatively, you guessed it, we could use `array` function from numpy to perform the operation such that it becomes `array(weights) * 0.453592` which makes our life that much easier.

Maybe you will say. 'So what, the results are the same, so why use NumPy?'. True, they are the same, so the used of NumPy seems a little too much.

This is why.

Say, now you want to calculate the **Body Mass Index** (BMI) of each player in the BPL, well anonymously, considering the BPL did not send names attached to the data. This would require you to perform a loop within a loop. This is because to calculate the BMI we use this formula:

``` plain
BMI = weight (in kilograms)
  	   height (in meters)^2
```

Now, imagine performing a for loop in the two lists we now have `weights_kg` and `heights_m`. If you were to use standart Python this would be the most probable way to perform the operation:

``` python
bmi = []
m = list(zip(weights_kg, heights_m))
for x, y in m:
	bmi.append(x/y**2)

print(bmi)
```
> `zip` function creats an iterator that aggregates elements from each of the iterables.

With NumPy you can easily do the same with fewer lines and with less of a headache:

``` python
bmi = weights_m / heights_m **2
print(bmi)
```
> This is after the weights and heights lists have been passed as arguments to the `array` function of the NumPy module.

The results are the same, but it is more intuitive with NumPy, you can not perform the same operation with standard Python. So doint this : `bmi = weights_m / heights_m **2` without passing the `weights_m` and `heights_kg` as arguments in NumPy's array function will cause an error. Go ahead and try that :).

## Subsetting

Lists in Python can be *subsetted*, if that is a word at all. By subsetting a Python list this is what I mean:

``` python
x = [4 , 9 , 6, 3, 1]
x[1]
import numpy as np
y = np.array(x)
y[1]
```
> This is subsetting using squre brackets, this applies to both NumPy and standard Python lists

But NumPy has something special about subsetting that the standard Python lists do not have.
For Numpy specifically, you can also use boolean Numpy arrays:

``` python
high = y > 5
y[high]
```

Now, to put it all together:

``` python
# height and weight are available as a regular lists

# Import numpy
import numpy as np

# Calculate the BMI: bmi
np_height_m = np.array(height) * 0.0254
np_weight_kg = np.array(weight) * 0.453592
bmi = np_weight_kg / np_height_m ** 2

# Create the light array
light = np.array(bmi) < 21

# Print out light
print(light)

# Print out BMIs of all baseball players whose BMI is below 21
print(bmi[light])

```

Numpy is great to do vector arithmetic. If you compare its functionality with regular Python lists, however, some things have changed.

First of all, Numpy arrays cannot contain elements with different types. If you try to build such a list, some of the elments' types are changed to end up with a homogenous list. This is known as type coercion.

Second, the typical arithmetic operators, such as +, -, * and / have a different meaning for regular Python lists and Numpy arrays.

Have a look at this line of code:

``` python
>>>np.array([True, 1, 2]) + np.array([3, 4, False])
array([4, 5, 2])
```

 Python lists and Numpy arrays sometimes behave differently. Luckily, there are still certainties in this world. For example, subsetting (using the square bracket notation on lists or arrays) works exactly the same. To see this for yourself, try the following lines of code in the IPython Shell:

``` python
x = ["a", "b", "c"]
x[1]

np_x = np.array(x)
np_x[1]
# height and weight are available as a regular lists

# Import numpy
import numpy as np

# Store weight and height lists as numpy arrays
np_weight = np.array(weight)
np_height = np.array(height)

# Print out the weight at index 50
print(np_weight[50])

# Print out sub-array of np_height: index 100 up to and including index 11077
print(np_height[100:111])
```

Conclusion
---

Of course there is more to  the NumPy module that I have not covered, this was and is to cite that the NumPy array and the Python Lists are the same but you can perform certain operations on NumPy arrays that you can not perform on Python lists. NumPy is a powerful library to uses especially if you will become a data scientist of use if for **Big Data**.