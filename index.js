class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length += 1;
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    
    try{
      if(this.length > 0){
        return Math.max(...this.items)
      } else {
        throw "EmptySortedList"
      }

    } catch(error){
      throw new Error(error)
    }

  }
  min() {
    try{
      if(this.length > 0){
        return Math.min(...this.items)
      } else {
        throw "EmptySortedList"
      }

    } catch(error){
      throw new Error(error)
    }
  }
  average() {
    try{
      if(this.length > 0){
        return this.sum()/this.length
      } else {
        throw "EmptySortedList"
      }

    } catch(error){
      throw new Error(error)
    }
  }
  sum() {
    if(this.length === 0 ){
      return 0
    } else {
      return this.items.reduce((a,b)=> a+b)
    }  
  }
};

module.exports = SortedList;
