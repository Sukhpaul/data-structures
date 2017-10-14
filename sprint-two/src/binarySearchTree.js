var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null; //depthfirst(less than value)
  tree.right = null; //depthfirst
  return tree;
};

  // add insert, contains ,depthfirstlog methods

BinarySearchTree.prototype.insert = function(value) {
  console.log(this.value);
  var root = this.value;
  // if value is less than root
  if (value < root) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  
  if (value > root) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }  
};

BinarySearchTree.prototype.contains = function (value) {
  var output = false;
  if (this.value === value) {
    output = true;
  }
  debugger;
  if (value < this.value && this.left !== null) {
    output = this.left.contains(value);
  }
  if (value > this.value && this.right !== null) {
    output = this.right.contains(value);
  } 
  return output; 
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  if (this.value) {
    callback(this.value);
  }
  if (this.left) {
    this.left.depthFirstLog(callback); 
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

// var newTree = BinarySearchTree();
/*
 * Complexity: What is the time complexity of the above functions?
 */
