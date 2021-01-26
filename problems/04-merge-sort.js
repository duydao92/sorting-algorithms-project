function merge(array1, array2) {
  let result = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = ele1;
      array1.shift();
    } else {
      next = ele2;
      array2.shift();
    }

    result.push(next)
  }

  return result
}

console.log(merge([1,4,7,10], [4,6,8,10]))

function mergeSort(array) {
  if (array.length <= 1) return array

  let midIdx = Math.floor(array.length / 2)
  let leftHalf = array.slice(0, midIdx)
  let rightHalf = array.slice(midIdx)

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

module.exports = {
  merge,
  mergeSort
};
