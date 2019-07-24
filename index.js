class SortedList {
  constructor() {
    this.sortedList = [];
    this.length = 0;
  }
  add(item) {
    this.sortedList.push(item);
    this.length++;
  }
  get(pos) {
    if (this.sortedList[pos - 1] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.sortedList[pos - 1];
    }
  }
  max() {
    if (this.sortedList.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.sortedList);
    }
  }

  min() {
    if (this.sortedList.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.sortedList);
    }
  }
  average() {
    if (this.sortedList.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let result = this.sortedList.reduce((sum, num) => sum + num);
      return result / this.sortedList.length;
    }
  }
  sum() {
    if (this.sortedList.length === 0) {
      return 0;
    } else {
      return this.sortedList.reduce((sum, num) => sum + num);
    }
  }
}

module.exports = SortedList;
