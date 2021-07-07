class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort();
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.items.length !== 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    let sum = 0;
    if (this.items.length !== 0) {
      this.items.forEach(element => {
        sum += element;
      });
    }
    return sum;
  }

  average() {
    if (this.items.length !== 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
