# Graphs

![Graph](/Images/graphs.png)

- A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph

## Uses

- Social Networks
- Location / Mappings
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Recommendations
- Everywhere

## Essential Terms

- Vertex - a node
- Edge - connection between nodes
- Weighted / Unweighted - values assigned to distances between vertices
- Directed / Undirected - directions assigned to distances between vertices (Directed - Followers on Instagram; Undirected - Friends on Facebook)

![AdjacencyMatrix](/Images/adjacencyMatrix.png)
![AdjacencyList](/Images/adjacencyList.png)

## Differences & Big O

|V| - number of vertices
|E| - number of edges

| Operation     | Adjacency List                   | Adjacency Matrix             |
| :------------ | :------------------------------- | :--------------------------- |
| Add Vertex    | O(1)                             | O(&#124;V<sup>2</sup>&#124;) |
| Add Edge      | O(1)                             | O(1)                         |
| Remove Vertex | O(&#124;V&#124; + &#124;E&#124;) | O(&#124;V<sup>2</sup>&#124;) |
| Remove Edge   | O(&#124;E&#124;)                 | O(1)                         |
| Query         | O(&#124;V&#124; + &#124;E&#124;) | O(1)                         |
| Storage       | O(&#124;V&#124; + &#124;E&#124;) | O(&#124;V<sup>2</sup>&#124;) |

### Adjacency List

- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

### Adjacency Matrix

- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

## Graph Class

```
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}
```

## Add Vertex

- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

```
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
```

## Add Edge

- This function should accept two vertices, we can call then vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices

```
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
```

## Remove Edge

- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

```
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (e) => e !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (e) => e !== vertex1
    );
  }
```

## Remove Vertex

- The function should accept a vertex to remove
- The function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex

```
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
```
