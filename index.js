//Hay errores, para revisar más tarde
class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;

  }
  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    try {
      if (this.length === 0) {
        throw 'EmptySortedList'
      } else {
        return Math.max[...this.items] //no me lo pilla
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  min() {
    try {
      if (this.length === 0) {
        throw 'EmptySortedList'
      } else {
        return this.items[0]
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");

    } else {
      return this.sum() / this.items.length;
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => {
        return a + b
      })
    }
  }
  module.exports = SortedList;