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

  static heightHelper(currentNode: IAVLNode): number {
    if (currentNode !== null)
      return currentNode.height
    else
      return 0
  }

  static insertHelper(val: number, currentNode: IAVLNode): IAVLNode {
    if (currentNode === null)
      return new AVLNode(val)

    if (currentNode.value > val)
        currentNode.left = AVLNode.insertHelper(val, currentNode.left)
    else
        currentNode.right = AVLNode.insertHelper(val, currentNode.right)

    return AVLNode.rotate(currentNode)
  }

  static removeHelper(val:number, currentNode: IAVLNode): IAVLNode {
    if (currentNode === null)
      return null

    let result
    if (val < currentNode.value) {
      currentNode.left = AVLNode.removeHelper(val, currentNode.left)
      result = currentNode
    } else if (currentNode.value < val) {
      currentNode.right = AVLNode.removeHelper(val, currentNode.right)
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
        currentNode.right = AVLNode.removeHelper(successor, currentNode.right)
        result = currentNode
      }
    }
    return AVLNode.rotate(result)
  }

  static rotate(currentNode: IAVLNode): IAVLNode {
    currentNode!.updateHeight()
    let left = AVLNode.heightHelper(currentNode!.left)
    let right = AVLNode.heightHelper(currentNode!.right)
    let bf = left - right

    if (bf > 1) {
      if (AVLNode.heightHelper(currentNode!.left!.left) < AVLNode.heightHelper(currentNode!.left!.right))
        currentNode!.left = AVLNode.rotateLeft(currentNode!.left)
      return AVLNode.rotateRight(currentNode)
    } else if (bf < -1) {
      if (AVLNode.heightHelper(currentNode!.right!.left) > AVLNode.heightHelper(currentNode!.right!.right))
        currentNode!.right = AVLNode.rotateRight(currentNode!.right)
      return AVLNode.rotateLeft(currentNode)
    } else {
      return currentNode
    }
  }

  static rotateRight(currentNode: IAVLNode): IAVLNode {
    let result = currentNode!.left
    let t = result!.right

    currentNode!.left = t
    currentNode!.height--

    result!.right = currentNode
    result!.height++

    return result
  }

  static rotateLeft(currentNode: IAVLNode): IAVLNode {
    let result = currentNode!.right
    let t = result!.left

    currentNode!.right = t
    currentNode!.height--

    result!.left = currentNode
    result!.height++

    return result
  }

  private updateHeight() {
    this.height = max(AVLNode.heightHelper(this.left),
                      AVLNode.heightHelper(this.right)) + 1
  }

  public insert(val: number) {
    if (this.value > val)
      this.left = AVLNode.insertHelper(val, this.left)
    else
      this.right = AVLNode.insertHelper(val, this.right)
  }

  public remove (val: number): IAVLNode {
    return AVLNode.removeHelper(val, this)
  }
}
