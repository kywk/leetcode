import { AVLNode } from './avl_node';
import { BST } from './bst';

export class AVL extends BST {
  constructor(data: number | Array<number>) {
    super(null)
    this.root = null
    if (typeof (data) === 'number') {
      this.root = new AVLNode(data)
    } else if (Array.isArray(data)) {
      this.root = new AVLNode(data[0])
      for (let i = 1; i < data.length; i++)
        this.insert(data[i])
    }
  }
}
