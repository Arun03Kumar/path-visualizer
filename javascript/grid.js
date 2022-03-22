const NODE_SIZE = 28
let nodes = []
let startNode = null
let endNode = null
let grid = null
let mouseDown = false
document.addEventListener('DOMContentLoaded', generateGrid)

function generateGrid()
{
  grid = document.createElement('div')
  grid.id = "grid"
  document.querySelector('.grid-container').appendChild(grid)

  let rows = Math.floor(grid.offsetHeight / NODE_SIZE)
  let cols = Math.floor(grid.offsetWidth / NODE_SIZE)
  let startRow = Math.floor(Math.random() * rows)
  let starCol = Math.floor(Math.random() * cols)
  let endRow = Math.floor(Math.random() * rows)
  let endCol = Math.floor(Math.random() * cols)

  while(starCol === endCol)
  {
    endCol = Math.floor(Math.random() * cols)
  }
  grid.addEventListener('click', clickedDiv)
  grid.addEventListener('mouseover', hoverDiv)
  grid.addEventListener('mouseout', hoverout)
  


  let fragment = document.createDocumentFragment()
  for(let i = 0; i < rows; i++)
  {
    let rowDiv = document.createElement('div')
    rowDiv.className = 'grid-row'
    nodes.push([])
    // console.log(nodes)

    for(let j = 0; j < cols; j++)
    {
      let colDiv = document.createElement('div')
      colDiv.className = 'node'
      colDiv.dataset.row = i
      colDiv.dataset.col = j
      colDiv.style.height = `${NODE_SIZE}px`
      colDiv.style.width = `${NODE_SIZE}px`
      nodes[i][j] = new Node(colDiv, i, j)
      if(i === startRow && j === starCol)
      {
        colDiv.classList.add('start-node')
        startNode = nodes[i][j]
        // console.log(startNode)
        nodes[i][j].isStart = true
      }
      else if(i === endRow && j === endCol)
      {
        colDiv.classList.add('end-node')
        endNode = nodes[i][j]
        nodes[i][j].isEnd = true
      }

      rowDiv.appendChild(colDiv)
    }
    fragment.appendChild(rowDiv)
  }
  grid.appendChild(fragment)
  // console.log(startNode)
  helper()
}

function clickedDiv(e)
{
  if(e.target === grid)
  {
    return 
  }
  let i = e.target.dataset['row']
  let j = e.target.dataset['col']
  let node = nodes[i][j]
  if(node.isStart || node.isEnd || node.isWall || node.weight !== 0)
  {
    return  
  }
  if(startNode && endNode)
  {
    node.isWall = true
    e.target.classList.add('node-wall')
    return
  }
  else if(!startNode)
  {
    e.target.classList.add('start-node')
    node[i][j].isStart = true
    startNode = nodes[i][j]
  }
  else if(!nodes[i][j].isStart)
  {
    e.target.classList.add('end-node')
    nodes[i][j].isEnd = true
    endNode = nodes[i][j]
    grid.removeEventListner('click', clickedDiv)
  }
}

function hoverDiv(e)
{
  if(e.target.classList.contains('grid-row'))
  {
    return
  } 
  if(e.target === grid || e.target.classList.contains('end-node') || e.target.classList.contains('start-node'))
  {
    return 
  }
  if(startNode && endNode)
  {
    e.target.classList.add("node-wall-hover")
  }
  else if(!startNode)
  {
    e.target.classList.add("start-node");
  }
  else
  {
    e.target.classList.add("end-node");
  }
}

function hoverout(e)
{
  
  if(startNode && endNode)
  {
    e.target.classList.remove("node-wall-hover")
  }
  else if(startNode)
  {
    e.target.classList.remove("end-node");
  }
  else
  {
    e.target.classList.remove("start-node");
  }
}






let clearGrid = () => {
  for(let i = 0; i < nodes.length; i++)
  {
    for(let j = 0; j < nodes[i].length; j++)
    {
      nodes[i][j].div.className = 'node'
      if(nodes[i][j].isStart)
      {
        nodes[i][j].div.classList.add('start-node')
      }
      if(nodes[i][j].isEnd)
      {
        nodes[i][j].div.classList.add('end-node')
      }
    }
  }
  // nodes[i][j].div.style.backgroundColor = 'white'
}

