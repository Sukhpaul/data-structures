var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Queue.prototype.enqueue = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function () {
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

Queue.prototype.size = function () {
  return this.count;
};

