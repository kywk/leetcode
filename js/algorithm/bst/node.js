class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }

  static _removeHelper(val, currentNode) {
    if (currentNode === null)
      return null

    if (currentNode.value > val) {
      currentNode.left = Node._removeHelper(val, currentNode.left)
      return currentNode
    }
    if (currentNode.value < val) {
      currentNode.right = Node._removeHelper(val, currentNode.right)
      return currentNode
    }

    if ((currentNode.left === null) && (currentNode.right === null))
      return null
    if (currentNode.left === null)
      return currentNode.right
    if (currentNode.right === null)
      return currentNode.left

    let successor = currentNode.right.findMin()
    currentNode.value = successor
    currentNode.right = Node._removeHelper(successor, currentNode.right)
    return currentNode
  }

  search(val) {
    if (this.value == val) {
      return true
    }

    if (this.value > v)
      return this.left === null ? false : this.left.search(val)
    else
      return this.right === null ? false : this.right.search(val)
  }

  findMin() {
    if (this.left === null)
      return this.value
    return this.left.findMin()
  }

  findMax() {
    if (this.right === null)
      return this.value
    return this.right.findMax()
  }

  findPredecessor(val) {
    let predecessor = -1
    let node = this
    while ((node !== null) && (node.value !== val)) {
      if (node.value < val) {
        predecessor = node.value
        node = node.right
      } else {
        node = node.left
      }
    }

    if (node === null)
      return -1

    if (node.left !== null)
      return node.left.findMax()
    else
      return predecessor
  }

  findSuccessor(val) {
    let successor = -1
    let node = this
    while ((node !== null) && (node.value !== val)) {
      if (node.value > val) {
        successor = node.value
        node = node.left
      } else {
        node = node.right
      }
    }

    if (node === null)
      return -1
    if (node.right !== null)
      return node.right.findMin()
    else
      return successor
  }

  insert(val) {
    if (this.value > val) {
      if (this.left === null)
        this.left = new Node(val)
      else
        this.left.insert(val)
    } else {
      if (this.right === null)
        this.right = new Node(val)
      else
        this.right.insert(val)
    }
  }

  remove(val) {
    Node.__removeHelper(val, this)
  }

  inorder() {
    let result = []
    if (this.left !== null)
      result = result.concat(this.left.inorder())
    result.push(this.value)
    if (this.right !== null)
      result = result.concat(this.right.inorder())
    return result
  }
}

module.exports = Node
