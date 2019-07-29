class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    });
  }
  get(i) {
    i = i - 1;
    if (this.items[i] != null) {
      return this.items[i];
    } else {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((acc, value) => acc + value);
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
