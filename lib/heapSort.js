/**
* 堆排序 复杂度 O(NlogN)
* @param {Array} arr [原数组]
* @param {Boolean} asc [是否升序]
*/

const { swap } = require('./util')

module.exports = function heapSort (arr, asc = true) {
  var resArr = arr.slice()
  for (let i = Math.floor(resArr.length / 2); i >= 0; i -= 1) {
    pearDown(resArr, i, resArr.length, asc)
  }
  for (let j = resArr.length - 1; j > 0; j -= 1) {
    swap(resArr, 0, j)
    pearDown(resArr, 0, j, asc)
  }
  return resArr
}

function pearDown (arr, i, n, asc) {
  const leftChild = i => 2 * i + 1

  let child
  let tmp
  for (tmp = arr[i]; leftChild(i) < n; i = child) {
    child = leftChild(i)
    if (asc) {
      if (child !== n - 1 && arr[child] < arr[child + 1]) {
        child += 1
      }
      if (tmp < arr[child]) {
        arr[i] = arr[child]
      } else {
        break
      }
    } else {
      if (child !== n - 1 && arr[child] > arr[child + 1]) {
        child += 1
      }
      if (tmp > arr[child]) {
        arr[i] = arr[child]
      } else {
        break
      }
    }
  }
  arr[i] = tmp
}
