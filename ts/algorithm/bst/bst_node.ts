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

  static insertHelper(val: number, node: IBSTNode): IBSTNode {
    if (node === null) return new BSTNode(val)

    if (val < node.value)
      node.left = BSTNode.insertHelper(val, node.left)
    else
      node.right = BSTNode.insertHelper(val, node.right)
    return node
  }

  static removeHelper(val: number, node: IBSTNode): IBSTNode {
    if (node === null)
      return null

    if (val < node.value) {
      node.left = BSTNode.removeHelper(val, node.left)
    } else if (node.value < val) {
      node.right = BSTNode.removeHelper(val, node.right)
    } else {
      if ((node.left === null) && (node.right === null))
        return null
      else if (node.left === null)
        node = node.right
      else if (node.right === null)
        node = node.left
      else {
        let successor = node.right.findMin()
        node.value = successor
        node.right = BSTNode.removeHelper(successor, node.right)
      }
    }
    return node
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
    return this.left === null ? this.value : this.left.findMin()
  }

  public findMax(): number {
    return this.right === null ? this.value : this.right.findMax()
  }

  public findPredecessor(val: number): number {
    return BSTNode.findPredecessor(val, this)
  }

  public findSuccessor(val: number): number {
    return BSTNode.findSuccessor(val, this)
  }

  public insert(val: number): IBSTNode {
    return BSTNode.insertHelper(val, this)
  }

  public remove(val: number): IBSTNode {
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
