class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.length - 1 < pos) {
      throw new Error("OutOfBounds");
    }
   else return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.length;
    }
  }
  min() {}
  average() {}
  sum() {}
}

module.exports = SortedList;
