const NOT_FOUND = -1

type IBSTNode = BSTNode | null

export class BSTNode {
  value: number
  left: IBSTNode
  right: IBSTNode

  constructor(data: number) {
    this.value = data
    this.left = null
    this.right = null
  }

  static findPredecessor(val: number, currentNode: IBSTNode): number {
    let predecessor = NOT_FOUND
    let node = currentNode
    while ((node !== null) && (node.value !== val)) {
      if (node.value < val) {
        predecessor = node.value
        node = node.right
      } else {
        node = node.left
      }
    }

    if (node === null)
      return NOT_FOUND
    if (node.left !== null)
      return node.left.findMax()
    else
      return predecessor
  }

  static findSuccessor(val: number, currentNode: IBSTNode): number {
    let successor = NOT_FOUND
    let node = currentNode
    while ((node !== null) && (node.value !== val)) {
      if (node.value > val) {
        successor = node.value
        node = node.left
      } else {
        node = node.right
      }
    }

    if (node === null)
      return NOT_FOUND
    if (node.right !== null)
      return node.right.findMin()
    else
      return successor
  }

  static removeHelper(val: number, currentNode: IBSTNode): IBSTNode {
    if (currentNode === null)
      return null

    let result
    if (val < currentNode.value) {
      currentNode.left = BSTNode.removeHelper(val, currentNode.left)
      result = currentNode
    } else if (currentNode.value < val) {
      currentNode.right = BSTNode.removeHelper(val, currentNode.right)
      result = currentNode
    } else {
      if ((currentNode.left === null) && (currentNode.right === null))
        return null
      else if (currentNode.left === null)
        result = currentNode.right
      else if (currentNode.right === null)
        result = currentNode.left
      else {
        let successor = currentNode.right.findMin()
        currentNode.value = successor
        currentNode.right = BSTNode.removeHelper(successor, currentNode.right)
        result = currentNode
      }
    }
    return result
  }

  public search(val: number): boolean {
    if (this.value === val)
      return true
    if (this.value > val)
      return this.left === null ? false : this.left.search(val)
    else
      return this.right === null ? false : this.right.search(val)
  }

  public findMin(): number {
    return this.left === null ?  this.value : this.left.findMin()
  }

  public findMax(): number {
    return this.right === null ? this.value : this.right.findMax()
  }

  public findPredecessor(val : number): number{
    return BSTNode.findPredecessor(val, this)
  }

  public findSuccessor(val : number): number{
    return BSTNode.findSuccessor(val, this)
  }

  public insert(val: number) {
    if (val < this.value) {
      if (this.left === null)
        this.left = new BSTNode(val)
      else
        this.left.insert(val)
    } else {
      if (this.right === null)
        this.right = new BSTNode(val)
      else
        this.right.insert(val)
    }
  }

  public remove(val: number): BSTNode | null {
    return BSTNode.removeHelper(val, this)
  }

  public inorder(): Array<number> {
    let result: Array<number> = new Array()
    if (this.left !== null)
      result = result.concat(this.left.inorder())
    result.push(this.value)
    if (this.right !== null)
      result = result.concat(this.right.inorder())
    return result
  }
}
