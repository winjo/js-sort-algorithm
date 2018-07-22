/**
 * 希尔排序 复杂度 O(N^2)
 * @param {Array} arr [原数组]
 * @param {Boolean} asc [是否升序]
 */

const { swap } = require('./util')

module.exports = function insertionSort (arr, asc = true) {
  const resArr = arr.slice()
  const N = resArr.length
  let h = 1
  while (h < N / 3) {
    h = 3 * h + 1
  }
  while (h >= 1) {
    let flag
    for (let outer = h; outer < N; outer += 1) {
      flag = resArr[outer]
      for (
        let inner = outer - h;
        inner >= 0 && (
          (asc && resArr[inner] > flag) ||
          (!asc && resArr[inner] < flag)
        );
        inner -= h
      ) {
        swap(resArr, inner, inner + h)
      }
    }
    h = (h - 1) /3
  }
  return resArr
}
