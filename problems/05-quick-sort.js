// Implement Quick Sort

function quickSort(array) {
  if (array.length === 0) return array

  let pivot = array.shift();

  const left = array.filter(ele => ele <= pivot);
  const right = array.filter(ele => ele > pivot);

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted]
}

console.log(quickSort([5,2,7,4,3,9,1]))

module.exports = {
  quickSort
};
