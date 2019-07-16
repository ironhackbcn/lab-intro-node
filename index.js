class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }
    sum() {
    if (this.items.length === 0){
      return 0;
    }
    return this.items.reduce((acc, val) => acc + val);
  }
  average() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    const sum = this.items.reduce((acc, val) => acc + val);
    return sum / this.items.length;
  }

};

const sortedList = new SortedList();

console.log(sortedList.get(5));

module.exports = SortedList;


