//Collection functions
const myEach = function(collection, callback) {
    const NewCollection = standardizeInput(collection);
    for (let elm = 0; elm < NewCollection.length; elm++) {
    callback(NewCollection[elm]);
    }
    return collection;
  }
  
const myMap = function(collection, callback) {
    const NewCollection = standardizeInput(collection);
    const NewArray = [];
    for (let elm = 0; elm < NewCollection.length; elm++) {
      NewArray.push(callback(NewCollection[elm]));
    }
    return NewArray;
  }
  
const myReduce = function(collection, callback, acc) {
    let NewCollection = standardizeInput(collection);
  if (!accumulator) {
      accumulator = NewCollection[0];
      NewCollection = NewCollection.slice(1);
    }
    const long = NewCollection.length;
  for (let i = 0; i < long; i++) {
      accumulator = callback(accumulator, NewCollection[i], NewCollection);
    }
    return accumulator;
  }
  
const myFind = function(collection, predicate) {
    const NewCollection = standardizeInput(collection);
    for (let elm = 0; elm < NewCollection.length; elm++) {
      if (predicate(NewCollection[elm])) return NewCollection[elm];
    }
    return undefined;
  }
  
const myFilter = function(collection, predicate) {
    const NewCollection = standardizeInput(collection);
    const NewArray = [];
    for (let elm = 0; elm < NewCollection.length; elm++) {
      if (predicate(NewCollection[elm])) NewArray.push(NewCollection[elm]);
    }
    return NewArray;
  }
  
const mySize = function(collection) {
    const NewCollection = standardizeInput(collection);
    return NewCollection.length;
  }
  
// Array Functions
const myFirst = function(array, stop=false) {
    return (stop) ? array.slice(0, stop) : array[0];
  }
  
const myLast = function(array, start=false) {
    return (start) ? array.slice(array.length-start, array.length) : array[array.length-1];
  }
  
// Object Functions
const myKeys = function(object) {
    const keys = [];
    for (let key in object){
      keys.push(key);
    }
    return keys;
  }
  
const myValues = function(object) {
    const values = [];
    for (let key in object){
      values.push(object[key]);
    }
    return values;
  
  }