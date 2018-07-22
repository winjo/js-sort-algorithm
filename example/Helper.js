class Helper {
  constructor (name) {
    this.name = name
  }
  create (size = 10, max = size + 1) {
    let i = 0
    const arr = []
    while(i < size) {
      arr[i] = Math.floor(Math.random() * max)
      i += 1
    }
    return arr
  }
  inspect (arr, desc) {
    let str = ''
    for (let i = 0, len = arr.length; i < len; i += 1) {
      str += arr[i] + ' '
      if (i > 0 && i % 10 === 0) str += '\n'
    }
    console.log(`【${this.name}】${desc}`)
    console.log(str)
    return str
  }
}

module.exports = Helper
