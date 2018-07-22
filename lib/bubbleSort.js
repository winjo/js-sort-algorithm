/**
 * 冒泡排序 复杂度 O(N^2)
 * @param {Array} arr [原数组]
 * @param {Boolean} asc [是否升序]
 */

const { swap } = require('./util')

module.exports = function bubbleSort (arr, asc = true) {
  const resArr = arr.slice()
  const { length } = resArr;
  for (let outer = length; outer > 1; outer -= 1) {
    for (let inner = 0; inner < outer; inner += 1) {
      if (
        (asc && resArr[inner] > resArr[inner + 1]) ||
        (!asc && resArr[inner] < resArr[inner + 1])
      ) {
        swap(resArr, inner, inner + 1)
      }
    }
  }
  return resArr
}
