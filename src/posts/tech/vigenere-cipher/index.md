---
path:  "/tech/vigenere-cipher"
title: Vigenere Cipher
subtitle: The Vigenere Cipher Broken down in Python
excerpt: The Vigenere cipher is likely the the most secure ciphers out there. It builds on the principle of the Caesar cipher yet provides a decent way to avoid the easy to solve shift problems. The basic gist of this cipher is we have both a message and a key. The key can be any length, but you must repeat the key for the length of our message to get this to work
tags: [algorithms, puzzles, ciphers]
category: tech
date: "2016-09-07T12:00:00+00:00"
author:
  name: Brian Lusina
  link: "/brian_lusina"
  avatar: brian_lusina.jpg
image:
 feature: vigenere_cipher.jpg
 teaser: vigenere_cipher.jpg
 thumbnail: vigenere_cipher.jpg
 creditlink: www.cs.mtu.edu
 credit: MTU
published: true
---

The Vigenere cipher is likely the the most secure ciphers out there. It builds on the principle of the Caesar cipher yet provides a decent way to avoid the easy to solve shift problems. The basic gist of this cipher is we have both a message and a key. The key can be any length, but you must repeat the key for the length of our message to get this to work. This can be seen here:

```plain
alpha = ABCDEFGHIJKLMNOPQRSTUVWXYZ
message  = IAMTHEWALRUS
key  = HELLOHELLOHE
```

Our key is actually "HELLO", but we expanded it to the length of our message giving us the repeated nature we see. Once we have these defined, we go character by character performing a pseudo-Caesar cipher.

```plain
m1 = I = 9
k1 = H = 8
9 + 8 = 17 % 26 = 17 = Q
c1 = Q
```

Looking at this, we see that the first character of our message is "I" which is the ninth letter in the alphabet. We then look at the first character of the key which is "H" or the eighth letter in the alphabet. We add those two numbers and modulo 26 giving us 17 which points to the seventeenth letter in the alphabet: "Q". We now know that the first letter of our ciphertext is "Q".

We then repeat this method for each character in our message until we have the ciphertext. This can be better shown as the algorithm:

Let m be our message and k be our key:
E(m) = ((m1 + k1) % 26, (m2 + k2) % 26, ..., (mi + ki) % 26)
D(m) = ((c1 - k1) % 26, (c2 - k2) % 26, ..., (ci - ki) % 26)
This is much like the Caesar cipher except instead of defining a fixed rotation, we allow our key's character index to be the rotation. As you can see, this is why the Vigenere cipher can be considered a string of Caesar ciphers. Pretty cool when you actually see it.

So how do we attack this then?

Well, the problem with this cipher is the fact that the key repeats itself. When you have a repeating key, it's common to see patterns in the ciphertext that completely match each other. By recognizing those patterns, you can determine the block size of the key and from there you simply do a Caesar brute force shift on each block until the plaintext appears.

On relatively short messages, this is harder to crack (as with any short ciphertext) but if encrypting a uniformly distributed text then you can really start to pick up on these things.

Now let's code this up in Python and see how how we can automate this:

```python
from itertools import cycle

ALPHA = 'abcdefghijklmnopqrstuvwxyz'


def encrypt(key, plaintext):
    """Encrypt the string and return the ciphertext"""
    pairs = zip(plaintext, cycle(key))
    result = ''

    for pair in pairs:
        total = reduce(lambda x, y: ALPHA.index(x) + ALPHA.index(y), pair)
        result += ALPHA[total % 26]

    return result.lower()


def decrypt(key, ciphertext):
    """Decrypt the string and return the plaintext"""
    pairs = zip(ciphertext, cycle(key))
    result = ''

    for pair in pairs:
        total = reduce(lambda x, y: ALPHA.index(x) - ALPHA.index(y), pair)
        result += ALPHA[total % 26]

    return result


def show_result(plaintext, key):
    """Generate a resulting cipher with elements shown"""
    encrypted = encrypt(key, plaintext)
    decrypted = decrypt(key, encrypted)

    print 'Key: %s' % key
    print 'Plaintext: %s' % plaintext
    print 'Encrytped: %s' % encrypted
    print 'Decrytped: %s' % decrypted
```

## Step One

Import the `cycle()` function from the `itertools` library.

Define our alphabet in order to get character indexes correctly, this can be done with the `string` module in Python, which enables us to get all the letters in the alphabet we need. This avoids the issue of forgetting a letter in case you hardcode the alphabet.

The function `encrypt(key, plaintext)` takes in a key and a plain text, I build a tuple with the `zip()` function which is a terminating function. Which means it will stop as soon as the shorter string is exhausted.

An example

```python
# in
list(zip(string.ascii_lowercase, string.ascii_uppercase))

# out
[('a', 'A'), ('b', 'B'), ('c', 'C'), ('d', 'D'), ('e', 'E'), ('f', 'F'), ('g', 'G'), ('h', 'H'), ('i', 'I'), ('j', 'J'), ('k', 'K'), ('l', 'L'), ('m', 'M'), ('n', 'N'), ('o', 'O'), ('p', 'P'), ('q', 'Q'), ('r', 'R'), ('s', 'S'), ('t', 'T'), ('u', 'U'), ('v', 'V'), ('w', 'W'), ('x', 'X'), ('y', 'Y'), ('z', 'Z')]
```

`cycle` is used to repeat the letters of the key for the entirety of the plaintext, note that this can repeat indefinately.

Perform a loop in each of the pairs reducing them to a single value with `reduce` function from functools library. The `reduce` function takes in a function and an iterable object.

The sum could be used here as well, but it would mean remembring that indexes of the letters and not the letters themselves are needed, or else we'll get a value error.

Finally get the new letter after a modulo of 26 and append that to our resulting ciphertext string.

## Step 2

Create the decipher function. This is fundamentally the same with the only difference being the fact that we subtract instead of adding the letters.

## Step 3

Output these results. :)

## Conclusion

In essence this is a Caeser's cipher with the only difference being the fact that we allow out key's character index to rotate instead of defining a fixed rotation. As you can see, this is why the Vigenere cipher can be considered a string of Caesar ciphers.
