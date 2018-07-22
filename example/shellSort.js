const Helper = require('./Helper')
const insertionSort = require('../lib/shellSort')

const helper = new Helper('希尔排序')

const newArr = helper.create(10, 100)
helper.inspect(newArr, '原数组')
helper.inspect(insertionSort(newArr), '升序')
helper.inspect(insertionSort(newArr, false), '降序')
