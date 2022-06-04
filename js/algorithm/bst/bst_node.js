const NOT_FOUND = -1

class BSTNode {
  constructor(data) {
    this.value = data
    this.left = null
    this.right = null
  }

  static _insertHelper(val, node) {
    if (node === null) return new BSTNode(val)

    if (val < node.value)
      node.left = BSTNode._insertHelper(val, node.left)
    else
      node.right = BSTNode._insertHelper(val, node.right)
    return node
  }

  static _removeHelper(val, node) {
    if (node === null) return null

    if (val < node.value) {
      node.left = BSTNode._removeHelper(val, node.left)
    } else if (node.value < val) {
      node.right = BSTNode._removeHelper(val, node.right)
    } else {
      if ((node.left === null) && (node.right === null))
        return null
      else if (node.left === null)
        result = node.right
      else if (node.right === null)
        result = node.left
      else {
        let successor = node.right.findMin()
        node.value = successor
        node.right = BSTNode._removeHelper(successor, node.right)
      }
    }
    return node
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
    return this.left === null ? this.value : this.left.findMin()
  }

  findMax() {
    return this.right === null ? this.value : this.right.findMax()
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
    return BSTNode._insertHelper(val, this)
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
