class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((fItem, sItem) => {
      return fItem - sItem;
    });
  }

  get(pos) {
    if (this.length === 0 || pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos-1];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (this.length === 0) return 0;
    else {
      return this.items.reduce(
        (previusValue, currentValue) => previusValue + currentValue,
        0
      );
    }
  }
}

module.exports = SortedList;
