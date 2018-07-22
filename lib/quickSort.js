/**
* 快速排序 复杂度 O(NlogN)
* @param {Array} arr [原数组]
* @param {Boolean} asc [是否升序]
*/

module.exports = function quickSort (arr, asc = true) {
  if (arr.length <= 1) return arr
  const leftArr = []
  const rightArr = []
  const k = Math.floor(arr.length / 2)
  const pivot = arr[k]
  for (let i = 0; i < arr.length; i += 1) {
    if (i === k) continue
    if (asc) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i])
      } else {
        rightArr.push(arr[i])
      }
    } else {
      if (arr[i] < pivot) {
        rightArr.push(arr[i])
      } else {
        leftArr.push(arr[i])
      }
    }
  }
  return quickSort(leftArr, asc).concat(pivot, quickSort(rightArr, asc))
}
