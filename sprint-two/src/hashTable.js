

const HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = (k, v) => {
  let index = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket, if !exists, create it
  let bucket = this._storage.get(index) || [];

  //iterate over bucket
  for ( let i = 0; i < bucket.length; i++ ) {
    let tuple = bucket[i];
    // key exists?
    if ( tuple[0] === k ) {
      // update it
      let oldVal = tuple[1];
      tuple[1] = v;
      return oldVal;
    }
  }

  // if no key was found
    // insert a new tuple
  bucket.push([k,v]);
  this._storage.set(index, bucket);
  this.size++;

  if ( this._size > this._limit * 0.75 ) {
    this.resize(this._limit * 2);
  }

  return undefined;
};

HashTable.prototype.retrieve = (k) => {
  let index = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket
  let bucket = this._storage.get(index) || [];

  // iterate over bucket to find key
  for ( let i = 0; i < bucket.length; i++ ) {
    let tuple = bucket[i];
    // if key exists, return value
    if ( tuple[0] === k ) {
      return tuple[1];
    } 
  }

  return undefined;
};

HashTable.prototype.remove = (k) => {
  let index = getIndexBelowMaxForKey(k, this._limit);

  // retrieve a bucket
  let bucket = this._storage.get(index) || [];

  // iterate over bucket
  for ( let i = 0; i < bucket.length; i++ ) {
    let tuple = bucket[i];
    if ( tuple[0] === k ) {
      bucket.splice(i, 1);
      this.size--;
      if ( this._size < this._limit * 0.25 ) {
        this._resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype._resize = function (newLimit) {
  let oldStorage = this._storage;

  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8);
  if ( newLimit === this._limit ) { return; }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(function (bucket) {
    if ( !bucket ) { return; }
    for ( let i = 0; i < bucket.length; i++ ) {
      let tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


const HashTableHOF = function () {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTableHOF.prototype.insert = function (k, v) {
  return this._tupleSearch(k,
    function (bucket, tuple, i) {
      let oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    },
    function (bucket) {
      bucket.push([k, v]);
      this._size++;
      if ( this._size > 0.75 * this._limit ) {
        this._resize(this._limit * 2);
      }
    }
  );
};

HashTableHOF.prototype.retrieve = function (k) {
  return this._tupleSearch(k,
    function (bucket, tuple, i) {
      return tuple[1];
    }
  );
};

HashTableHOF.prototype.remove = function (k) {
  return this._tupleSearch(k,
    function (bucket, tuple, i) {
      bucket.splice(i, 1);
      this._size--;
      if ( this._size < 0.25 * this._limit ) {
        this._resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  );
};

HashTableHOF.prototype._tupleSearch = function (key, foundCB, notFoundCB) {
  let index = getIndexBelowMaxForKey(key, this._limit);
  let bucket = this._storage.get(index) || [];

  this._storage.set(index, bucket);

  for ( let i = 0; i < bucket.length; i++ ) {
    let tuple = bucket[i];
    if ( tuple[0] === key ) {
      return foundCB.call(this, bucket, tuple, i);
    }
  }

  return notFoundCB ? notFoundCB.call(this, bucket) : undefined;
};

HashTableHOF.prototype._resize = function (newLimit) {
  let oldStorage = this._storage;

  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8);
  if ( newLimit === this._limit ) { return; }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(this._redistribute.bind(this));
};

HashTableHOF.prototype._redistribute = function (bucket) {
  if ( !bucket ) { return; }
  for (let i = 0; i < bucket.length; i++) {
    let tuple = bucket[i];
    this.insert(tuple[0], tuple[1]);
  }
};