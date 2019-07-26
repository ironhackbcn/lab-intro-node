class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;

    this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {}
  min() {}
  average() {}
  sum() {}
}

module.exports = SortedList;

// var sl = new SortedList();

// var foo = 10;
// for (let i = 0; i < 200; i++) {
//   sl.add(foo * i);
//   sl.get(i + 1);
// }
