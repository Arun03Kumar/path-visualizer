function dfs(grid, start, end, s, parentMap, choices, prev = null)
{
  let curr = null
  if(s.length)
  {
    curr = s.pop()
    // curr.div.style.backgroundColor = '#C65D7B'
    // console.log(curr)
    let div = curr.div
    // console.log(parentMap.has(curr))
    if(parentMap.has(curr))
    {
      div.classList.add('node-backtrack')
      setTimeout(dfs, 10, grid, start, end, s, parentMap, choices, curr)
      // dfs(grid, start, end, s, parentMap, choices, curr)
      return 
    }
    curr.div.classList.add("node-current");
    setTimeout(()=> {
      div.classList.remove("node-current"); 
      div.classList.add("node-check");
    },1000);
    parentMap.set(curr, prev)
    // console.log(parentMap)
    if(curr === end)
    {
      let path = getPath(parentMap,endNode);
      setTimeout(drawPath,0,0,path);
      return
    }
    for(let i = 0; i < choices.length; i++)
    {
      let row = curr.row + choices[i][0]
      let col = curr.col + choices[i][1]
      // console.log(`${curr.row} + ${curr.col} + ${row} + ${col}`)
      // return
      if(grid[row] && grid[row][col] && !grid[row][col].isWall && !parentMap.has(grid[row][col]))
      {
        s.push(grid[row][col])
      }
    }
    setTimeout(dfs, 10, grid, start, end, s, parentMap, choices, curr)
    // dfs(grid, start, end, s, parentMap, choices, curr)
  }
}


function getPath(parentMap,curr){
  let path = [];
  while(curr !== null){
    path.unshift(curr);
    curr = parentMap.get(curr);
  }
  return path;
}

function drawPath(counter,path){
  if(counter !== path.length){
    const curr = path[counter];
    curr.div.classList.add("node-path");
    setTimeout(drawPath,45,++counter,path);
  }
}