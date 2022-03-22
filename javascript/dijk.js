function dijkstra(grid, startNode, endNode, disMap, visited, choices, parentMap, minHeap)
{
  if(minHeap.length)
  {
    minHeap.sort((a, b) => disMap.get(b) - disMap.get(a))
    let curr = minHeap.pop()
    if(visited.has(curr))
    {
      curr.div.classList.add("node-backtrack")
      setTimeout(dijkstra, 0, grid, startNode, endNode, disMap, visited, choices, parentMap, minHeap)
      return
    }
    curr.div.classList.add("node-current")
    setTimeout(() => {
      curr.div.classList.remove("node-current")
      curr.div.classList.add("node-check")
    }, 1000)

    visited.add(curr)
    if(curr === endNode)
    {
      let path = getPath(parentMap,endNode);
      setTimeout(drawPath,0,0,path);
      return
    }
    for(let i = 0; i < choices.length; i++)
    {
      let row = curr.row + choices[i][0]
      let col = curr.col + choices[i][1]
      if(grid[row] && grid[row][col] && !grid[row][col].isWall && !visited.has(grid[row][col]))
      {
        let currentDistace = disMap.get(curr)
        let edgeDistance
        if(grid[row][col].weight)
          edgeDistance = grid[row][col].weight
        else
          edgeDistance = 1
        
        let newDistance = currentDistace + edgeDistance
        if(newDistance <= disMap.get(grid[row][col]))
        {
          parentMap.set(grid[row][col], curr)
          disMap.set(grid[row][col], newDistance)
        }
        minHeap.push(grid[row][col])
      }
    }
    setTimeout(dijkstra, 0, grid, startNode, endNode, disMap, visited, choices, parentMap, minHeap)
  }
}