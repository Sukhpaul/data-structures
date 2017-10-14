

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // search for bucket
  var bucket = this._storage.get(index);
    // if no bucket, create bucket
  if (!bucket) {
    bucket = [];
  } 
  // check if bucket doesnt have tuple
  for (var i = 0; i <= bucket.length; i++) {

    if (bucket[i] === undefined) {
      bucket[i] = [k, v];
    }
    // if tuple exists change key value
    if (bucket[i][0] === k) {
      bucket[i] = [k, v];
      break;
    }
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  console.log(bucket)
  
  // go through bucket
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
    // find index with key value
      //remove value

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


