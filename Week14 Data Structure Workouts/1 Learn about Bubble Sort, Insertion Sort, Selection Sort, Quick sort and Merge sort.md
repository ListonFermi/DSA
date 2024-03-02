Learn about Bubble Sort, Insertion Sort, Selection Sort,
Quick sort and Merge sort. Complete at least three sample workouts in each of them.

#BubbleSort :
Bubble sort is one of the simplest sorting algorithms.
It is done by checking each adjacent swapping the adjacent elements if they are not in the correct order.
This checking process of adjacent elements of the whole array is repeated by iterating until
no swapping is done during one iteration.
Big-O = O(n^2)
Auxiliary Space = O(1)

For Example for an array [-6,20,8,-2,4] :
Iteration1:
[-6,8,-2,2,20] Swapping is done, so the outer loop is repeated again.
Iteration2:
[-6,-2,2,8,20] Swapping is done, so the outer loop is repeated again.
Iteration3:
[-6,-2,2,8,20] Swapping is done, so the outer loop is repeated again.
Iteration4:
[-6,-2,2,8,20] No swapping is done, so the outer loop is ended and the array is sorted.

Pros:
>Easy to understand and implement
>Doesn't require additional memory space
Cons:
>Since, its O(n^2) it will be very slow for big datasets

Naming Reason: As the algorithm progresses, smaller items "bubble" to the top of the list. This is why it's called bubble sort.

#Insertion Sort:
The array is splitted into sorted part and unsorted part.
In ascending sort: The NumberToBeInserted is chosen as the 1st value from the unsorted part and compared with the values from
the sorted part in reverse order, there if we find a value smaller than the NTI we insert it there and the position of NTI.
Big-O=O(n^2)

#QuickSort:
In quick sort we use recurssion. We select an pivot element and consider it as a middle value. And compare all other values of the
array with the pivot element and seperate it into two arrays namely left and right. These left and right arrays are further sorted
by using the recurssion. The base case is when the length of the left array or right array's lenght is less than 2.
Worst Case: Big-O= O(n^2) 
Avg Case: O(nlogn)


#MergeSort:
Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray,
and then merging the sorted subarrays back together to form the final sorted array.