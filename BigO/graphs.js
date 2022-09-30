class Graph {
  constructor () {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex (node) {
    this.adjacentList[node] = []
    this.numberOfNodes++
  }

  addEdge (node1, node2) {
    // undirected graph
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)

  }
}

const graph = new Graph()
graph.addVertex('0')
graph.addVertex('1')
graph.addVertex('2')
graph.addEdge('0', '1')
console.log(graph.adjacentList)