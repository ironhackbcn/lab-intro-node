class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;

    this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    var maxVal = Math.max(...this.items);
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return maxVal;
  }
  min() {
    var minVal = Math.min(...this.items);
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return minVal;
  }
  average() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
  sum() {
    let sumVal = 0;
    sumVal = this.items.reduce((counter, val) => counter + val);
    if (!this.length) {
      return sumVal;
    }
    return sumVal;
  }
}

module.exports = SortedList;
