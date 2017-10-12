var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};
 
Stack.prototype.push = function(value) {
  this.count += 1;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count === 0) {
    this.count = 0;
  } else {
    this.count--;
  }
  return temp;
};

Stack.prototype.size = function () {
  return this.count;
};
