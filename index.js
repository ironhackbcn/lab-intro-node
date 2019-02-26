'use strict'

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  };

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  };

  get(pos) {
    return this.items[pos -1];
  };

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  };

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  };

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.items.length;
    }
  };

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const suma = this.items.reduce((acum, current) => {
        return acum += current;
      });
      return suma;
    }    
  };

}

module.exports = SortedList;