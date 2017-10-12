var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage['1'];
    delete storage['1'];
    var first = 1;

    for (var keys in storage) {
      storage[first] = storage[keys];
      first++;
    }

    if (count === 0) {
      count = 0;
    } else {
      count--;    
    }

    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
