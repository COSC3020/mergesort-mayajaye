# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

#### I've deduced that $T(n) \in \Theta(n^{2}\log(n)^{2})$ by this reasoning:

The worst case for mergesort is if every subarray in the data set is out of
order, so shifting and comparisons will need to happen for every element.
 

##### The steps in this algorithm are:
1. For loop to check if i is greater than the array length and increment i to the

next power of 2. Each iteration of i will be the next power of 2 all the way

up to n for the worst case, so this step will run on at most $\log_{2}n$

  

2. A nested for loop to check if k + i is greater than the array length and

increment k by 2*i to set the bounds of the current sub array. On the worst

case this will run on at most $n$ since n will be divided by a constant factor

for each iteration which does not matter for asymptotic analysis.

  

3. A while loop that checks if the merge is finished or if the merge does

not need to be done. On the worst case this will run on at most $\log_{2}n$

since the subarray starts out small and doubles each iteration.

  

4. A while loop that shifts the array so the current value can be sorted

in place. On the worst case this will iterate over the whole array

(n)


That would make the runtime equation equal to

$n\log_{2}n  \cdot n\log_{2}n$

where steps 1 and 2 are the first $n\log_{2}n$ and steps 3 and 4 are the second.

  

This is equivalent to:

$n^{2}\log_{2}(n)^{2}$

  

The log base is asymptotically insignificant, so the $\Theta$ bound for T(n) is

$\Theta(n^{2}\log(n)^{2})$

    
#### Sources

-Copilot for debugging (I didn't know how to handle hi being out of bounds)
-Help from TA

"I certify that I have listed all sources used to complete this exercise,
including the use of any Large Language Models. All of the work is my own, except
where stated otherwise. I am aware that plagiarism carries severe penalties and
that if plagiarism is suspected, charges may be filed against me without prior
notice."