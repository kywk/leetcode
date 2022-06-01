let Node = require("./node.js")

class BST {
  constructor(nums) {
    this.root = null
    for (let i = 0; i < nums.length; i++)
      this.insert(nums[i])
  }

  search(val) {
    return this.root === null ? false : this.root.search(val)
  }

  findPredecessor(val) {
    return this.root === null ? -1 : this.root.findPredecessor(val)
  }

  findSuccessor(val) {
    return this.root === null ? -1 : this.root.findSuccessor(val)
  }

  insert(val) {
    console.log(">> insert:", val)
    if (this.root === null)
      this.root = new Node(val)
    else
      this.root.insert(val)
  }

  remove(val) {
    console.log(">> remove:", val)
    if (this.root !== null)
      this.root.remove(val)
  }

  inorder() {
    return this.root === null ? null : this.root.inorder()
  }
}

module.exports = BST
