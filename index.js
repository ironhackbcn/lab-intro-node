class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
  }
  get(pos) {
    return this.items[pos]  
  }
  max() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let max = 0;
    for(let i = 0; i <= this.items.length; i++) {
      if(max < this.items[i]) {
        max = this.items[i];
      }
    }
    return max;
  }
  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let min = this.items[0];
    for(let i = 0; i <= this.items.length; i++) {
      if(min > this.items[i]) {
        min = this.items[i];
      }
    }
    return min;
  }
  average() {
    let media = 0;

    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    media = this.items.reduce( (acumulator, currentValue) => {
      return acumulator + currentValue;
    });
    return media / this.items.length;
  }
  sum() {
    let suma = 0;
    if(this.items.length === 0){
      return suma;
    }
   suma = this.items.reduce( (acumulator, currentValue) => {
      return acumulator + currentValue;
   });
   return suma;
  }
};

module.exports = SortedList;
