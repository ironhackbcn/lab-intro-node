class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });

    // this.items.sort((a, b) => a - b); ES6
  }
  get(pos) {
    try {
      return this.items[pos - 1];
    } catch (error) {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max.apply(Math, this.items); // ES5
    }
    // return Math.max(...this.items); Spread Operator ES6
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min.apply(Math, this.items); // ES5
    }
    // return Math.min(...this.items); Spread Operator ES6
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return (
        this.items.reduce((previous, current) => (previous += current)) /
        this.items.length
      );
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((previous, current) => previous + current);
    }
  }
}

module.exports = SortedList;
