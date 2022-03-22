let algo = "dfs"
document.querySelector('#tit').innerText = "DEPTH FIRST SEARCH"
document.querySelector('.dfs').addEventListener('click', () => {
  algo = "dfs"
  document.querySelector('#tit').innerText = "DEPTH FIRST SEARCH"
  console.log(algo)
})
document.querySelector('.bfs').addEventListener('click', () => {
  algo = "bfs"
  document.querySelector('#tit').innerText = "BREADTH FIRST SEARCH"
  console.log(algo)
})
document.querySelector('.dijk').addEventListener('click', () => {
  algo = "dijk"
  document.querySelector('#tit').innerText = "DIJKSTRA's ALGORITHM"
  console.log(algo)
})
 
let helper = () => {
  document.querySelector('.clearb').addEventListener('click', clearGrid)
  document.querySelector('#visbtn').addEventListener('click', () => {
    if(algo == "dfs")
    {
      executeDFS()
    }
    else if(algo == "bfs")
    {
      executeBFS()
    }
    else if(algo == "dijk")
    {
      executeDijkstra()
    }
    
  })
}







