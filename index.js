class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    try {
      return this.items[pos - 1];
    } catch (error) {
      throw new Error("OutOfList");
    }
  }
  max() {
    // try {
    //   return this.items[this.length - 1]; -> Es undefined , NO ERROR !!!
    // } catch (error) {
    //   throw new Error("EmptySortedList");
    // }

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    return this.items.reduce((accum, actualValue) => accum + actualValue, 0);
  }
}

module.exports = SortedList;
