class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item){
    let i = 0;
    while(item>this.items[i]){
      i++;
    }
    this.items.splice(i, 0, item);
    this.length++;
  }
  get(pos){
    if (this.length <= 0 || pos>this.length){
     return undefined;
    }else{
      return this.items[pos-1];
    }
  }
  max() {
    if(this.length!==0){
      return this.items[this.length-1];
    }
    else{
      throw new Error ("EmptySortedList");
    }
  }
  min() {
    if(this.length!==0){
      return this.items[0];
    }
    else{
      throw new Error ("EmptySortedList");
    }
  }
  average() {
    if(this.length>0){
      let totalSum = this.sum();
      return totalSum /this.length;
    }
    else{
      throw new Error ("EmptySortedList");
    }
  }
  sum() {
    let total = 0;
    if(this.length >0){
      
      this.items.forEach(e=>{
        total+=e;
      });
      
    }
    return total;
  }
};

module.exports = SortedList;
