const Helper = require('./Helper')
const quickSort = require('../lib/quickSort')

const helper = new Helper('快速排序')

const newArr = helper.create(10, 100)
helper.inspect(newArr, '原数组')
helper.inspect(quickSort(newArr), '升序')
helper.inspect(quickSort(newArr, false), '降序')
