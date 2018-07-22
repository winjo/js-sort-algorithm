const Helper = require('./Helper')
const insertionSort = require('../lib/insertionSort')

const helper = new Helper('插入排序')

const newArr = helper.create(10, 20)
helper.inspect(newArr, '原数组')
helper.inspect(insertionSort(newArr), '升序')
helper.inspect(insertionSort(newArr, false), '降序')
