var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  var count = 0;
  var storage = {};
  instance.count = count;
  instance.storage = storage;
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

queueMethods.dequeue = function () {
  var temp = this.storage['1'];
  delete this.storage['1'];
  var first = 1;

  for (var key in this.storage) {
    this.storage[first] = this.storage[key];
    first++;
  }
  
  if (this.count === 0) {
    this.count = 0;
  } else {
    this.count--;
  }
      
  return temp;
};

queueMethods.size = function () {
  return this.count;
};


