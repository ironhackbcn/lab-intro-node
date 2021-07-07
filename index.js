class SortedList {
  constructor () {
    this.items = []
    this.length = 0
  }

  add (item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length++
  }

  get (pos) {
    return this.items[pos - 1]
  }

  max () {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      this.items.sort((a, b) => b - a)
      return this.items[0]
    }
  }

  min () {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      this.items.sort((a, b) => a - b)
      return this.items[0]
    }
  }

  average () {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items.reduce((a, b) => a + b) / this.length
    }
  }

  sum () {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b)
    }
  }
};

module.exports = SortedList
