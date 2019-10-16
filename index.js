class SortedList {
  constructor() {
    this.items =[],
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length  = this.items.length;
    this.items.sort((a, b) => a-b);
  }

  get(pos) {
    if (pos < 1 || pos > this.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos-1];
  }
  
  max() {  
    try{
      if (this.length === 0){
      throw new Error("EmptySortedList");
      }else{
      return this.items[this.length-1];
      }   
    }catch(error){
      throw new Error("EmptySortedList");
    } 
  }

  min() {
    try{
       if(this.length === 0){
        throw new Error("EmptySortedList");
      }else{
        return this.items[0];
      }  
    }catch(error){
      throw new Error("EmptySortedList");
    }     
  }

  average() {
  try{
      if(this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      return this.sum()/this.length;
    }

  } catch(error){
      throw new Error("EmptySortedList");
    }
    
  }

  sum() {
  
    if(this.length === 0){
      return 0;
    }else{
      return this.items.reduce(function(a, b){
            return a + b;
      });
    }
  }

};

module.exports = SortedList;
