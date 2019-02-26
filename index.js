class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b)
    this.length += 1;
  }
  get(pos) {
    if(this.length === 0) {
      return 0;
    } else {
      return this.items[pos - 1];
    }
    
  }
  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.length -1];
    }
  }
  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return this.items[0];
    }
  }
  average() {
    if(this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return (this.items.reduce((acc, next) => acc + next) / this.length);
    }
  }
  sum() {
    if(this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, next) => acc + next);

    }
  }
}

module.exports = SortedList;
