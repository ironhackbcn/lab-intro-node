class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => {
      return a - b;
    });

    this.length = this.items.length;
  }

  get(pos) {
    let value = this.items[pos - 1];
    return value;
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max.apply(null, this.items);
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(null, this.items);
  }

  average() {
    let avg = 0;
    try {
      avg = this.sum() / this.length;
      if (avg > 0) {
        return avg;
      } else {
        throw "EmptySortedList";
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  sum() {
    let sumValues = 0;
    if (this.length !== 0) {
      sumValues = this.items.reduce((accVal, cuVal) => accVal + cuVal);
    }
    return sumValues;
  }
}

module.exports = SortedList;
