var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  var count = 0;
  var storage = {};
  instance.count = count;
  instance.storage = storage;

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  console.log(this.storage);
  this.count += 1;
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




