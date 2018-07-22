const Helper = require('./Helper')
const selectionSort = require('../lib/selectionSort')

const helper = new Helper('选择排序')

const newArr = helper.create(10)
helper.inspect(newArr, '原数组')
helper.inspect(selectionSort(newArr), '升序')
helper.inspect(selectionSort(newArr, false), '降序')
