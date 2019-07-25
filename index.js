class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((value1, value2) => value1 - value2);
  }
  get(pos) {
    try {
      return this.items[pos - 1];
    } catch (error) {
      throw new Error("OutOfBounds");
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
      return (
        this.items.reduce((valAnterior, valActual) => valAnterior + valActual) /
        this.length
      );
    }
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce(
        (valAnterior, valActual) => valAnterior + valActual
      );
    }
  }
}

module.exports = SortedList;
