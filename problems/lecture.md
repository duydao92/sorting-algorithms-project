### Sorting
### W7D2

---

### Agenda

* Swap Function
* Bubble Sort
* Insertion Sort
* Selection Sort
* Quick Sort
* Merge Function
* Merge Sort

---

### Three Different Ways To Swap

#### version 1
```js
[ list[i], list[j] ] = [ list[j], list[i] ];
```

#### version 2
```js
const value1 = list[i], value2 = li[j];

list[i] = value2, li[j] = value1;
```

#### version 3
```js
const temp = list[i];
list[i] = list[j];
list[j] = temp;
```
---

### Bubble Sort Overview

* iterate over the list
* compare each element with its subsequent element
* if you deem a swap is necessary
	* perform swap
  
* this process must be continually repeated (hint: use a `while` loop)

---

### Bubble Sort

```js
const li = [4,3,2,1];
4 <=> 3

[3,4,2,1]
4 <=> 2

[3,2,4,1]
4 <=> 1

[3,2,1,4]

"four has been 'bubbled up' and is now in its final resting place"

"continually repeat this process for all elements"
```

---

### Selection Sort Overview

* iterate over list
* select a minimum place holder at position 0
  * search for any value that is smaller than the place holder
  * if a value is found
  	* swap found min value with value at place holder position
  * else
  	* increment place holder position
    
* repeat until list is sorted

---

### Selection Sort

```js
const li = [80, 70, 60, 50];
let min = 80, placeHolder = 0, minIdx = 0;

80 <=> 70
min = 70, minIdx = 1;
70 <=> 60
min = 60, minIdx = 2;
60 <=> 50
min = 50, minIdx = 3;

swap(li, placeHolder, minIdx);

[50, 70, 60, 80];

"50 was selection as the new 'min' - swapped with place holder 80"
"iterate place holder"
```

---

### Insertion Sort Overview 

* iterate over list starting at position 1
	* grab the element at position 1
  * compare element with all previous positions (only 0 in this case)
  * if `list[1] < list[0]`
  	* perform swap
    * position 0 and 1 is now a sorted 'sub list'
    
* iterate and repeat - position 0,1,2 will be sorted, then 0,1,2,3...

---

### Insertion Sort

```js
const li = [4,3,2,1]; "position 0 is a sorted 'sub list'"
let valueToInsert = 3;

3 <=> 4
[3,4,2,1] "position 0,1 is a now sorted 'sub list'"

valueToInsert = 2;

2 <=> 4
[3,2,4,1]
2 <=> 3
[2,3,4,1] "position 0,1,2 is now a sorted 'sub list'"

"continue iterating until the sorted 'sub list' is the entire list"
```

---

### Quick Sort Overview

* choose a pivot element (i usually use the first element)
* create two new lists where you will filter all elements based on pivot
* iterate over list
	* ele < pivot goes into left list var
  * ele >= pivot goes into right list var
  
* recursively call quickSort on both the leftList and rightList
	* this should return two sorted lists
* return the left list, pivot element, and right list in a single, sorted list

---

### Quick Sort

```js
const list = [5,2,7,1,6]
const left, right, pivot = [2,1], [7,6], 5

quickSort(left) => [1,2];
quickSort(right) => [6,7];

return [1,2,5,6,7]
```

---

### Merge Function Overview - merging two sorted lists

* instantiate a new result list
* compare the first element in each list
	* append the element with lesser value in the new list
  * repeat until one of the lists is empty
* return the result list
* remember to append items that may not have been appended during the comparison

---

### Merge

```js
const listOne = [1,3,5,7], listTwo = [2,4,6,8], res = new Array();

1 <=> 2
res = [1], listOne = [3,5,7], listTwo = [2,4,6,8];

3 <=> 2
res = [1,2], listOne = [3,5,7], listTwo = [4,6,8];

"continue comparing until one of the lists is empty"

res = [1,2,3,4,5,6,7], listOne = [], listTwo = [8];

return res.concat(listOne).concat(listTwo);

```

---

### Merge Sort Overview

* split the list into a left half and right half
* recursively call mergeSort on each half resulting in two sorted halves
* call the merge function on the two sorted halves

---

### Merge Sort

```js
const list = [5,4,3,6,7,2,1,8], left = [5,4,3,6], right = [7,2,1,8];

mergeSort(left) => [3,4,5,6];
mergeSort(right) => [1,2,7,8];

return merge(left, right);
```
