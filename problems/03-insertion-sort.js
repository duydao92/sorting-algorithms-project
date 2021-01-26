// procedure insertionSort( A : array of items )
//    int holePosition
//    int valueToInsert

//    for i = 1 to length(A) inclusive do:

//       /* select value to be inserted */
//       valueToInsert = A[i]
//       holePosition = i

//       /*locate hole position for the element to be inserted */

//       while holePosition > 0 and A[holePosition-1] > valueToInsert do:
//          A[holePosition] = A[holePosition-1]
//          holePosition = holePosition -1
//       end while

//       /* insert the number at hole position */
//       A[holePosition] = valueToInsert

//    end for

// end procedure
// function insertionSort(list) {
//   for (let i = 1; i < list.length; i++) {
//     let valueToInsert = list[i];
//     let holePosition = i;
//     for (var j = i - 1; j >= 0 && valueToInsert < list[j]; j--) {
//       // let temp = list [holePosition];
//       list [j] = list[j - 1]
//     }
//     list [j] = valueToInsert
//   }

//   return list
// }
function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let valueToInsert = list[i];

    let j = i - 1;
    while(j >= 0 && valueToInsert < list[j])  {
      list [j + 1] = list [j]
      j--;
    }
    list [j + 1] = valueToInsert
  }

  return list
}

console.log(insertionSort([6,4,7,5,1,3,2,9,8]))

module.exports = {
  insertionSort
};
