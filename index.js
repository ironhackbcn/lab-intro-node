class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    // if (this.items.length === 0) {
    // return new Error("EmptySortedList");
    // } else {
    // return Math.max(...this.items);
    // }
    try {
      return Math.max(...this.items);
    } catch (e) {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length === 0) {
      return new Error("EmptySortedList");
    } else {
      // return this.items[0];
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items.length === 0) {
      // return new Error("EmptySortedList");
      return "EmptySortedList";
    } else {
      return this.sum() / this.length;
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      let sumOfArr = this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
      return sumOfArr;
    }
  }
}

module.exports = SortedList;
