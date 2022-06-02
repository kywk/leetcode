let BSTNode = require("./bst_node")

function max(x, y) {
  return x > y ? x : y
}

class AVLNode extends BSTNode {
  constructor(data) {
    super()
    this.value = data
    this.left = null
    this.right = null
    this.height = 1
  }

  static _heightHelper(currentNode) {
    if (currentNode !== null)
      return currentNode.height
    else
      return 0
  }

  static _insertHelper(val, currentNode) {
    if (currentNode === null)
      return new AVLNode(val)

    if (currentNode.value > val)
        currentNode.left = AVLNode._insertHelper(val, currentNode.left)
    else
        currentNode.right = AVLNode._insertHelper(val, currentNode.right)

    return AVLNode._rotate(currentNode)
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
    return AVLNode._rotate(result)
  }

  static _rotate(currentNode) {
    currentNode._updateHeight()
    let left = AVLNode._heightHelper(currentNode.left)
    let right = AVLNode._heightHelper(currentNode.right)
    let bf = left - right

    if (bf > 1) {
      if (AVLNode._heightHelper(currentNode.left.left) < AVLNode._heightHelper(currentNode.left.right))
        currentNode.left = AVLNode._rotateLeft(currentNode.left)
      return AVLNode._rotateRight(currentNode)
    } else if (bf < -1) {
      if (AVLNode._heightHelper(currentNode.right.left) > AVLNode._heightHelper(currentNode.right.right))
        currentNode.right = AVLNode._rotateRight(currentNode.right)
      return AVLNode._rotateLeft(currentNode)
    } else {
      return currentNode
    }
  }

  static _rotateRight(currentNode) {
    let result = currentNode.left
    let t = result.right

    currentNode.left = t
    currentNode.height--

    result.right = currentNode
    result.height++

    return result
  }

  static _rotateLeft(currentNode) {
    let result = currentNode.right
    let t = result.left

    currentNode.right = t
    currentNode.height--

    result.left = currentNode
    result.height++

    return result
  }

  _updateHeight() {
    this.height = max(AVLNode._heightHelper(this.left),
                      AVLNode._heightHelper(this.right)) + 1
  }

  insert(val) {
    if (this.value > val)
      this.left = AVLNode._insertHelper(val, this.left)
    else
      this.right = AVLNode._insertHelper(val, this.right)
  }

  remove (val) {
    return AVLNode._removeHelper(val, this)
  }
}

module.exports = AVLNode
