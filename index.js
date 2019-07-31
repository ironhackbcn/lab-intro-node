class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(
      (a, b) => a - b
    );
  }

  get(i) {
    if (this.items[i - 1] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[i - 1];
    }
  }

  max() {
    let max = 0;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach(element => {
        if (element > max) {
          max = element;
        }
      });
    }
    return max;
  }

  min() {
    let min = this.items[0];
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach(element => {
        if (element < min) {
          min = element;
        }
      });
    }
    return min;
  }

  average() {
    let theAverage = 0;
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach(element => {
        theAverage += element;
      });
    }
    return theAverage / this.length;
  }

  sum() {
    let theSum = 0;
    if (this.length === undefined) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach(element => {
        theSum += element;
      });
    }
    return theSum;
  }
}

module.exports = SortedList;
