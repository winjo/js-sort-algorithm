const Benchmark = require('benchmark')
const Helper = require('../example/Helper')
const bubbleSort = require('../lib/bubbleSort')
const insertionSort = require('../lib/insertionSort')
const selectionSort = require('../lib/selectionSort')

const helper = new Helper()
const newArr = helper.create(100)

const suite = new Benchmark.Suite

suite
  .add('冒泡', () => bubbleSort(newArr))
  .add('选择', () => selectionSort(newArr))
  .add('插入', () => insertionSort(newArr))
  .on('cycle', e => console.log(e.target.toString()))
  .run({ 'async': true });
