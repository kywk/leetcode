let BSTNode = require("./bst_node")

const NOT_FOUND = -1

class BST {
  constructor(data) {
    this.root = null
    if (typeof (data) === 'number') {
      this.root = new BSTNode(data)
    } else if (Array.isArray(data)) {
      this.root = new BSTNode(data[0])
      for (let i = 1; i < data.length; i++)
        this.insert(data[i])
    }
  }

  search(val) {
    return this.root === null ? false : this.root.search(val)
  }

  findMax() {
    return this.root === null ? NOT_FOUND : this.root.findMax()
  }

  findMin() {
    return this.root === null ? NOT_FOUND : this.root.findMin()
  }

  findPredecessor(val) {
    return this.root === null ? NOT_FOUND : this.root.findPredecessor(val)
  }

  findSuccessor(val) {
    return this.root === null ? NOT_FOUND : this.root.findSuccessor(val)
  }

  insert(val) {
    if (this.root === null)
      return

    console.log(">> insert:", val)
    this.root = this.root.insert(val)
  }

  remove(val) {
    if (this.root === null)
      return

    console.log(">> remove:", val)
    this.root = this.root.remove(val)
  }

  inorder() {
    return this.root === null ? null : this.root.inorder()
  }
}

module.exports = BST
