import { BSTNode } from "./bst_node"

const NOT_FOUND = -1

export class BST {

  root: BSTNode | null

  constructor(data: number | Array<number> | null) {
    this.root = null
    if (typeof(data) === 'number') {
      this.root = new BSTNode(data)
    } else if (Array.isArray(data)) {
      this.root = new BSTNode(data[0])
      for (let i = 1; i < data.length; i++)
        this.insert(data[i])
    }
  }

  search(val: number): boolean {
    return this.root === null ? false : this.root.search(val)
  }

  findMax(): number {
    return this.root === null ? NOT_FOUND : this.root.findMax()
  }

  findMin(): number {
    return this.root === null ? NOT_FOUND : this.root.findMin()
  }

  findPredecessor(val: number): number {
    return this.root === null ? NOT_FOUND : this.root.findPredecessor(val)
  }

  findSuccessor(val: number): number {
    return this.root === null ? NOT_FOUND : this.root.findSuccessor(val)
  }

  insert(val: number) {
    if (this.root === null)
      return

    console.log(">> insert:", val)
    this.root.insert(val)
  }

  remove(val: number) {
    if (this.root === null)
      return

    console.log(">> remove:", val)
    this.root = this.root.remove(val)
  }

  inorder(): Array<number> | null {
    return this.root === null ? null : this.root.inorder()
  }
}
