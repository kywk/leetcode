const NOT_FOUND = -1

class BSTNode {
  constructor(data) {
    this.value = data
    this.left = null
    this.right = null
  }

  static _removeHelper(val, currentNode) {
    if (currentNode === null)
      return null

    let result
    if (val < currentNode.value) {
      currentNode.left = BSTNode._removeHelper(val, currentNode.left)
      result = currentNode
    } else if (currentNode.value < val) {
      currentNode.right = BSTNode._removeHelper(val, currentNode.right)
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
        currentNode.right = BSTNode._removeHelper(successor, currentNode.right)
        result = currentNode
      }
    }
    return result
  }

  search(val) {
    if (this.value === val)
      return true

    if (this.value > val)
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
    let predecessor = NOT_FOUND
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
      return NOT_FOUND
    if (node.left !== null)
      return node.left.findMax()
    else
      return predecessor
  }

  findSuccessor(val) {
    let successor = NOT_FOUND
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
      return NOT_FOUND
    if (node.right !== null)
      return node.right.findMin()
    else
      return successor
  }

  insert(val) {
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

  remove(val) {
    return BSTNode._removeHelper(val, this)
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

module.exports = BSTNode
