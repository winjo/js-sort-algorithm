/**
 * 选择排序 复杂度 O(N^2)
 * @param {Array} arr [原数组]
 * @param {Boolean} asc [是否升序]
 */

const { swap } = require('./util')

module.exports = function selectionSort (arr, asc = true) {
  const resArr = arr.slice()
  let flag
  for (let outer = 0; outer < resArr.length - 1; outer += 1) {
    flag = resArr[outer]
    for (let inner = outer + 1; inner < resArr.length; inner += 1) {
      if (
        (asc && resArr[inner] < flag) ||
        (!asc && resArr[inner] > flag)
      ) {
        flag = resArr[inner]
        swap(resArr, outer, inner)
      }
    }
  }
  return resArr
}
