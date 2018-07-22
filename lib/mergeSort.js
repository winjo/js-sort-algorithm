/**
* 合并排序 复杂度 O(NlogN)
* @param {Array} arr [原数组]
* @param {Boolean} asc [是否升序]
*/

module.exports = function mergeSort (arr, asc = true) {
  const resArr = arr.slice()
  if (resArr.length < 2) return
  let [step, left, right] = [1]
  while (step < resArr.length) {
    left = 0
    right = step
    while (right + step <= resArr.length) {
      mergeArrays(resArr, left, left + step, right, right + step, asc)
      left = right + step
      right = left + step
    }
    if (right < resArr.length) {
      mergeArrays(resArr, left, left + step, right, arr.length, asc)
    }
    step *= 2
  }
  return resArr
}

function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight, asc) {
  const leftArr = arr.slice(startLeft, stopLeft).concat(asc ? Infinity : -Infinity)
  const rightArr = arr.slice(startRight, stopRight).concat(asc ? Infinity : -Infinity)

  let [m, n] = [0, 0]
  for (let k = startLeft; k < stopRight; k += 1 ) {
    if (
      (asc && leftArr[m] <= rightArr[n]) ||
      (!asc && leftArr[m] >= rightArr[n])
    ) {
      arr[k] = leftArr[m]
      m += 1
    } else {
      arr[k] = rightArr[n]
      n += 1
    }
  }
}
