var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  //console.log(newTree);
  var output = false;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  debugger;
  var hasChildren = [];
  var child = {
    value: value,
    children: hasChildren,
  };
  this.value = value;
  _.extend(child, treeMethods);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var output = false;
  //debugger;
  console.log(this);
  if (this.value) {
    if (this.value === target) {
      output = true;
    }
  }
  
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      output = true;
    }

    if (this.children[i].children) {
      for (var j = 0; j < this.children[i].children.length; j++) {
        this.children[i].children[j].contains(target);
      }
    }
  }

  
  return output;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
