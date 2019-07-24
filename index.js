class SortedList {
  constructor() {
    this.item = [];
    this.length = 0;
  }
  add(item) {
    this.item.push(item);
    this.lenght=this.item.length;
  }
  get(pos) {}
  max() {
    if (this.item.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.item.length;
    }
  }
  min() {}
  average() {}
  sum() {}
}
const sortedList = new SortedList 
module.exports = SortedList;
module.exports = sortedList;
