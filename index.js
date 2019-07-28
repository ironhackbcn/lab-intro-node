class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;

    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    this.checkLength();
    return Math.max(...this.items);
  }

  min() {
    this.checkLength();
    return Math.min(...this.items);
  }

  average() {
    this.checkLength();
    return this.sum(this.items) / this.length;
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((item1, item2) => item1 + item2);
  }

  checkLength() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
