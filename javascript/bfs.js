function bfs(grid, startNode, endNode, q, parentMap, choices)
{
  let curr = null
  if(q.length)
  {
    let size = q.length
    for(let i = 0; i < size; i++)
    {
      curr = q.shift()
      if(curr.isWall)
        continue

      curr.div.classList.add("node-current")
      setTimeout(() => {
        curr.div.classList.remove("node-current")
        curr.div.classList.add("node-check")
      }, 1000)
      if(curr === endNode)
      {
        let path = getPath(parentMap,endNode);
        setTimeout(drawPath,0,0,path);
        return
      }
      for(let j = 0; j < choices.length; j++)
      {
        let row = curr.row + choices[j][0]
        let col = curr.col + choices[j][1]
        if(grid[row] && grid[row][col] && !grid[row][col].isWall && !parentMap.has(grid[row][col]))
        {
          q.push(grid[row][col])
          parentMap.set(grid[row][col], curr)
        }
      }
    }
    setTimeout(bfs, 30, nodes, startNode, endNode, q, parentMap, choices)
  }
}