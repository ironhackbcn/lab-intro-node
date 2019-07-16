class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a,b) => a-b)
    this.length =this.items.length
  }
  get(i) {
    if (this.items[i-1] === undefined) return;
    return this.items[i - 1];
  }
  max() {
    try {
      this.items.reduce((max,a) => {
        if (a > max) {
          return a;
        }
        return max;
      })
    }
    catch {
      throw new Error ('EmptySortedList');
    }
  }
  min() {
    try {
      this.items.reduce((min,a) => {
        if (a > min) {
          return min;
        }
        return a;
      })
    }
    catch {
      throw new Error ('EmptySortedList');
    }
  }
  average() {}
  sum() {}
};

module.exports = SortedList;
