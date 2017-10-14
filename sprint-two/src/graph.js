

// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.edges[node] = [];
  this.vertices.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var output = false;
  _.each(this.vertices, function(element) {
    if (element === node) {
      output = true;
    }
  });
  return output;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.edges.indexOf(node);
  for (var i = 0; i < this.edges.length; i++) {
    if (this.vertices[i] === node) {
      this.vertices.splice(i, 1);
      if (index !== -1) {
        this.edges[index] = [];
      }
    }
    if (this.edges[i] && this.edges[i].includes(node)) {
      this.edges[i] = [];
    }
    this.edges[node] = [];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (Array.isArray(this.edges[fromNode])) {
    for (var i = 0; i < this.edges[fromNode].length; i++) {
      if (this.edges[fromNode][i] === toNode) {
        return true;
      } else {
        return false;
      }     
    }    
  } else {
    if (this.edges[fromNode] === toNode) {
      return true;
    } else {
      return false;
    }
  }
  // index frome === to node
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //console.log(this.edges[fromNode]);
  if (this.edges[fromNode].indexOf(toNode) === -1) {
    this.edges[fromNode].push(toNode);
    this.edges[toNode].push(fromNode);
  }

  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edges[fromNode] = [];
  this.edges[toNode] = [];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  this.vertices.forEach(function(element) {
    cb(element);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


