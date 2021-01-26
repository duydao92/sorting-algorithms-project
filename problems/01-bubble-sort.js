// Implement Bubble Sort



// Bubble Sort: (array)
//   n := length(array)
//   repeat
//   swapped = false
//   for i := 1 to n - 1 inclusive do

//       /* if this pair is out of order */
//       if array[i - 1] > array[i] then

//         /* swap them and remember something changed */
//         swap(array, i - 1, i)
//         swapped := true

//       end if
//     end for
//   until not swapped
function swap(array, idx1, idx2) {
  let temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        swapped = true;
      }
    }
  }

  return array
}

// console.log(bubbleSort([6,4,7,5,1,3,2,9,8]))


module.exports = {
  bubbleSort,
  swap
};
