let BST = require("./bst")
let AVLNode = require("./avl_node")

class AVL extends BST {
  constructor(data) {
    super()
    this.root = null
    if (typeof(data) === 'number') {
      this.root = new AVLNode(data)
    } else if (Array.isArray(data)) {
      this.root = new AVLNode(data[0])
      for (let i = 1; i < data.length; i++)
        this.insert(data[i])
    }
  }
}

module.exports = AVL
