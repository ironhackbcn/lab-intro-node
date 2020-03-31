'use strict'

class SortedList {
  constructor(){
    this.items = [];
    this.length = 0;
  }
  //test 2, 3 & 4
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }
  //test 5 & 6
  get(position){
    if (!this.items[position - 1]){
      throw new Error('OutOfBounds');
    } 
    return this.items[position - 1];
  }

  //test 7 & 8

  max(){
    try{
      if (this.items.length === 0){
      throw `EmptySortedList`;
      } else{
        return Math.max(...this.items);
        }
    } catch(error){
    throw new Error(error);
    }
  };

  //test 9 y 10
  min(){
    try{
      if (this.items.length === 0){
      throw `EmptySortedList`;
      } else{
        return Math.min(...this.items);
      }
    } catch(error){
    throw new Error(error);
  }
}

 //test 11 y 12

 sum(){
  if (this.items.length === 0){
    return 0;
  } else{
    return this.items.reduce((acum, current) => {
    return acum += current});
    }
  }

 //test 13 y 14

average(){
  try{
  if (this.items.length === 0){
    throw 'EmptySortedList';
  } else {
    return (this.sum()/this.items.length);
  }
  } catch(error){
    throw new Error(error);
  }
}
}

module.exports = SortedList;