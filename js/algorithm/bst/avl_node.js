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

  static _heightHelper(node) {
    return node !== null ? node.height : 0
  }

  static _insertHelper(val, node) {
    if (node === null)
      return new AVLNode(val)

    if (node.value > val)
      node.left = AVLNode._insertHelper(val, node.left)
    else
      node.right = AVLNode._insertHelper(val, node.right)

    return AVLNode._rotate(node)
  }

  static _removeHelper(val, node) {
    if (node === null)
      return null

    if (val < node.value) {
      node.left = AVLNode._removeHelper(val, node.left)
    } else if (node.value < val) {
      node.right = AVLNode._removeHelper(val, node.right)
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
        node.right = AVLNode._removeHelper(successor, node.right)
      }
    }
    return AVLNode._rotate(node)
  }

  static _rotate(node) {
    let left = AVLNode._heightHelper(node.left)
    let right = AVLNode._heightHelper(node.right)
    let bf = left - right

    if (bf > 1) {
      if (AVLNode._heightHelper(node.left.left) < AVLNode._heightHelper(node.left.right))
        node.left = AVLNode._rotateLeft(node.left)
      return AVLNode._rotateRight(node)
    } else if (bf < -1) {
      if (AVLNode._heightHelper(node.right.left) > AVLNode._heightHelper(node.right.right))
        node.right = AVLNode._rotateRight(node.right)
      return AVLNode._rotateLeft(node)
    } else {
      node._updateHeight()
      return node
    }
  }

  static _rotateLeft(node) {
    let result = node.right
    let t = result.left

    node.right = t
    node.height--

    result.left = node
    return result
  }

  static _rotateRight(node) {
    let result = node.left
    let t = result.right

    node.left = t
    node.height--

    result.right = node
    return result
  }

  _updateHeight() {
    this.height = max(AVLNode._heightHelper(this.left),
      AVLNode._heightHelper(this.right)) + 1
  }

  insert(val) {
    return AVLNode._insertHelper(val, this)
  }

  remove(val) {
    return AVLNode._removeHelper(val, this)
  }
}

module.exports = AVLNode
