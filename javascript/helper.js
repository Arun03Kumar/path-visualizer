let algo = ""

document.querySelector('.dfs').addEventListener('click', () => {
  algo = "dfs"
  console.log(algo)
})
document.querySelector('.bfs').addEventListener('click', () => {
  algo = "bfs"
  console.log(algo)
})
document.querySelector('.dijk').addEventListener('click', () => {
  algo = "dijk"
  console.log(algo)
})
document.querySelector('.bidirbfs').addEventListener('click', () => {
  algo = "bidirbfs"
  console.log(algo)
})
document.querySelector('.bidirdij').addEventListener('click', () => {
  algo = "bidirdij"
  console.log(algo)
})
document.querySelector('.astar').addEventListener('click', () => {
  algo = "astar"
  console.log(algo)
})
document.querySelector('.bidirastar').addEventListener('click', () => {
  algo = "bidirastar"
  console.log(algo)
})  
let helper = () => {
  document.querySelector('.clearb').addEventListener('click', clearGrid)
  document.querySelector('#visbtn').addEventListener('click', () => {
    if(algo == "dfs")
    {
      executeDFS()
    }
  })
}






