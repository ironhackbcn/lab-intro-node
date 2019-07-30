class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos + 1];
  }

  max() {
    if(this.length < 1){
      throw new Error("EmptySortedList");
    } else{
      let max = 0;
      this.items.forEach( element =>{
        if(element > max){
          max = element;
        }
      });
    }
    return this.max;
  }

  min() {
    if(this.length < 1){
      throw new Error("EmptySortedList");
    } else{
      let min = this.items[0];
      this.items.forEach( element =>{
        if(element < min){
          min = element;
        }
      });
    }
    return this.min;
  }

  average() {
    let theAverage = 0;
    if(this.length < 1){
      throw new Error("EmptySortedList");
    } else{
      this.items.forEach( element =>{
        theAverage+= element;
      });
    }
    return theAverage/this.length;
  }

  sum() {
    let theSum = 0;
    if(this.length < 1){
      throw new Error("EmptySortedList");
    } else{
      this.items.forEach( element =>{
        theSum+= element;
      });
    }
    return theSum;
  }
}

module.exports = SortedList;
