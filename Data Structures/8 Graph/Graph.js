class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
  } // Time: O(1) | Space: O(1)

  addEdges(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  } // Time: O(1) | Space: O(1)

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  } // Time: O(1) | Space: O(1)

  removeVertex(vertex) {
    for (let neighbor of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, neighbor);
    }
    delete this.adjacencyList[vertex];
  } // Time: O(n) number of neighbors | Space: O(1)

  //DFS
  depthFirstRecursive(start) {
    const visited = {};
    const result = [];
    const adjacencyList1 = this.adjacencyList;

    (function dfs(vertex) {
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList1[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(start);

    return result;
  }

  //BFS
  breadthFirstSearch(start) {
    const visited = {};
    const queue = [start];

    while (queue.length) {
      const curr = queue.shift();
      if (!visited[curr]) {
        console.log(curr);

        for (let neighbor of this.adjacencyList[curr]) {
          queue.push(neighbor);
        }

        visited[curr] = true;
      }
    }
  }
}

const graph = new Graph();
graph.addEdges("A", "B");
graph.addEdges("B", "C");
graph.addEdges("C", "A");
console.log(graph.depthFirstRecursive("A"));
