function executeDFS()
{
  let s = []
  let parentMap = new Map()
  s.push(startNode)
  // console.log(startNode)
  let choice = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  setTimeout(dfs, 0, nodes, startNode, endNode, s, parentMap, choice)
}


