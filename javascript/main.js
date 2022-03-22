function executeDFS()
{
  let s = []
  let parentMap = new Map()
  s.push(startNode)
  // console.log(startNode)
  let choice = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  setTimeout(dfs, 0, nodes, startNode, endNode, s, parentMap, choice)
}



function executeBFS()
{
  let q = []
  q.push(startNode)
  let parentMap = new Map()
  parentMap.set(startNode, null)
  let choices = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  setTimeout(bfs, 0, nodes, startNode, endNode, q, parentMap, choices)
}


function executeDijkstra()
{
  let curr = startNode
  let disMap = new Map()
  for(let i = 0; i < nodes.length; i++)
    for(let j = 0; j < nodes[i].length; j++)
      disMap.set(nodes[i][j], Infinity)
  disMap.set(curr, 0)
  let visited = new Set()
  let parentMap = new Map()
  parentMap.set(curr, null)
  let minHeap = []
  minHeap.push(curr)
  let choices = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  setTimeout(dijkstra, 0, nodes, startNode, endNode, disMap, visited, choices, parentMap, minHeap)
} 



