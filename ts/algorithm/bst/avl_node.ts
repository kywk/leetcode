import { BSTNode } from "./bst_node"

function max(x: number, y: number) {
  return x > y ? x : y
}

type IAVLNode = AVLNode | null

export class AVLNode extends BSTNode {
  left: IAVLNode
  right: IAVLNode
  height: number

  constructor(data: number) {
    super(data)
    this.left = null
    this.right = null
    this.height = 1
  }

  static heightHelper(node: IAVLNode): number {
    return node !== null ? node.height : 0
  }

  static insertHelper(val: number, node: IAVLNode): IAVLNode {
    if (node === null)
      return new AVLNode(val)

    if (node.value > val)
      node.left = AVLNode.insertHelper(val, node.left)
    else
      node.right = AVLNode.insertHelper(val, node.right)

    return AVLNode.rotate(node)
  }

  static removeHelper(val: number, node: IAVLNode): IAVLNode {
    if (node === null)
      return null

    if (val < node.value) {
      node.left = AVLNode.removeHelper(val, node.left)
    } else if (node.value < val) {
      node.right = AVLNode.removeHelper(val, node.right)
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
        node.right = AVLNode.removeHelper(successor, node.right)
      }
    }
    return AVLNode.rotate(node)
  }

  static rotate(node: IAVLNode): IAVLNode {
    let left = AVLNode.heightHelper(node!.left)
    let right = AVLNode.heightHelper(node!.right)
    let bf = left - right

    if (bf > 1) {
      if (AVLNode.heightHelper(node!.left!.left) < AVLNode.heightHelper(node!.left!.right))
        node!.left = AVLNode.rotateLeft(node!.left)
      return AVLNode.rotateRight(node)
    } else if (bf < -1) {
      if (AVLNode.heightHelper(node!.right!.left) > AVLNode.heightHelper(node!.right!.right))
        node!.right = AVLNode.rotateRight(node!.right)
      return AVLNode.rotateLeft(node)
    } else {
      node!.updateHeight()
      return node
    }
  }

  static rotateRight(node: IAVLNode): IAVLNode {
    let result = node!.left
    let t = result!.right

    node!.left = t
    node!.height--

    result!.right = node
    return result
  }

  static rotateLeft(node: IAVLNode): IAVLNode {
    let result = node!.right
    let t = result!.left

    node!.right = t
    node!.height--

    result!.left = node
    return result
  }

  private updateHeight() {
    this.height = max(AVLNode.heightHelper(this.left),
      AVLNode.heightHelper(this.right)) + 1
  }

  public insert(val: number): IAVLNode {
    return AVLNode.insertHelper(val, this)
  }

  public remove(val: number): IAVLNode {
    return AVLNode.removeHelper(val, this)
  }
}
