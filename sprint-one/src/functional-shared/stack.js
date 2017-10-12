var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //debugger;
  var someInstance = {};
  var storage = {};
  someInstance.storage = storage;
  var count = 0;
  someInstance.count = count;
   // console.log(instance);
  // var instance = function () {
  //   var newInstance = {};
  // };
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};
//debugger;
stackMethods.push = function(value) {
  console.log(this.storage);
  this.count += 1;
  //console.log(someInstance);
  this.storage[this.count] = value;
};

stackMethods.pop = function() {
  var temp = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count === 0) {
    this.count = 0;
  } else {
    this.count--;
  }
  return temp;
};

stackMethods.size = function () {
  return this.count;
};






