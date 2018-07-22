const Helper = require('./Helper')
const heapSort = require('../lib/heapSort')

const helper = new Helper('堆排序')

// const newArr = helper.create(10, 100)
const newArr = [61, 67, 17, 43, 49, 22, 96, 36, 5, 10]
helper.inspect(newArr, '原数组')
helper.inspect(heapSort(newArr), '升序')
helper.inspect(heapSort(newArr, false), '降序')
