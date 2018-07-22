/**
 * 插入排序 复杂度 O(N^2)
 * @param {Array} arr [原数组]
 * @param {Boolean} asc [是否升序]
 */

const { swap } = require('./util')

module.exports = function insertionSort (arr, asc = true) {
  const resArr = arr.slice()
  let flag
  for (let outer = 1; outer < resArr.length; outer += 1) {
    flag = resArr[outer]
    for (
      let inner = outer - 1;
      inner >= 0 && (
        (asc && resArr[inner] > flag) ||
        (!asc && resArr[inner] < flag)
      );
      inner -= 1
    ) {
      swap(resArr, inner, inner + 1)
    }
  }
  return resArr
}
