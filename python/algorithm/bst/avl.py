from bst import *
from avlnode import *

class AVL(BST):
    def __init__(self, data):
        self.root = None
        if isinstance(data, int):
            self._root = AVLNode(data)
        elif isinstance(data, list):
            self._root = AVLNode(data[0])
            for i in range(1, len(data), 1):
                self.insert(data[i])

    def insert(self, val):
        print(">> insert", val)
        if self._root is None:
            self._root = AVLNode(val)

        self._root = self._root.insert(val)
