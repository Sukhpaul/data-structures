var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
    } 
    list.head.next = Node(value);
    return list.tail = Node(value);
  };

  list.removeHead = function() {
    var temp = list.head.next;
    var output = list.head.value;
    delete list.head; 
    list.head = temp;
    return output;
  };

  list.contains = function(target) {
    var output = false;
    _.each(list, function(element, key) {
      if (element.value === target) {
        output = true;
      }
    });
    return output;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
