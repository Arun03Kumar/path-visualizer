class Node
{
  constructor(div, row, col, isStart = false, isEnd = false, isWall = false, weight = 0) 
  {
    this.div = div
    this.row = row
    this.col = col
    this.isStart = isStart
    this.isEnd = isEnd
    this.isWall = isWall
    this.weight = weight
  }
}