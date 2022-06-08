import sys

import bst
import avl

def main(args):
    nums = [40, 54, 89, 29, 37, 18, 64, 51, 60, 55, 98, 92]
    #nums = [40, 50, 60]
    #b = bst.BST(nums)
    b = avl.AVL(nums)
    print(b.inorder())
    print(b.find_max(), b.find_predecessor(64), b.find_successor(64))

    b.remove(54)
    print(b.inorder())

main(sys.argv)
