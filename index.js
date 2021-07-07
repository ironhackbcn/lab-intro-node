class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => a-b);
  }

  get(pos) {
    return this.items[pos-1];
  }

  max() {
    return this.minMax(this.items.length);  
  }

  min() {
    return this.minMax(1);
  }

  minMax(param){
    try {
      if(this.items.length === 0){
        throw 'EmptySortedList';
      }
      return this.get(param);
    }
    catch(error){
      throw new Error(error);
    }
  }

  average() {
    try {
      if(this.items.length === 0){
        throw 'EmptySortedList';
      }

      return this.sum()/this.items.length;
    }
    catch(error){
      throw new Error(error);
    }
  }

  sum() {
    return (this.items.length === 0) ? 0 : this.items.reduce((a,b) => a+b);
  }
};

module.exports = SortedList;
