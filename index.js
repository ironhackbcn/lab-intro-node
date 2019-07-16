class SortedList {
  constructor() {
    this.item = [];
    this.length = 0;
  }
  add(item) {
    this.item.push(item);
    this.item.sort((a, b) =>  a - b) 
    this.length++;
  }
  get(pos) {
    return this.item[pos - 1]
  }
  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.item[this.length - 1]
  }
  min() {
    if(this.item.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.item[0]
  }
  average() {
    if(this.item.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
  sum() {
    return this.item.reduce((acc, curr) => acc + curr, 0);
  }
};

module.exports = SortedList;
