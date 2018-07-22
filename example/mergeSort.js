const Helper = require('./Helper')
const mergeSort = require('../lib/mergeSort')

const helper = new Helper('归并排序')

const newArr = helper.create(10, 100)
helper.inspect(newArr, '原数组')
helper.inspect(mergeSort(newArr), '升序')
helper.inspect(mergeSort(newArr, false), '降序')
