const Helper = require('./Helper')
const bubbleSort = require('../lib/bubbleSort')

const helper = new Helper('冒泡排序')

const newArr = helper.create(10)
helper.inspect(newArr, '原数组')
helper.inspect(bubbleSort(newArr), '升序')
helper.inspect(bubbleSort(newArr, false), '降序')
