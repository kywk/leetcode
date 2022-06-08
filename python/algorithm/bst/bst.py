from bstnode import *

NOT_FOUND = -1


class BST:
    def __init__(self, data):
        self._root = None
        if isinstance(data, int):
            self._root = BSTNode(data)
        elif isinstance(data, list):
            self._root = BSTNode(data[0])
            for i in range(1, len(data), 1):
                self.insert(data[i])

    def search(self, val):
        return self._root.search(val) if not self._root is None else NOT_FOUND

    def find_max(self):
        return self._root.find_max() if not self._root is None else NOT_FOUND

    def find_min(self):
        return self._root.find_min() if not self._root is None else NOT_FOUND

    def find_predecessor(self, val):
        return self._root.find_predecessor(val) if not self._root is None else NOT_FOUND

    def find_successor(self, val):
        return self._root.find_successor(val) if not self._root is None else NOT_FOUND

    def insert(self, val):
        print(">> insert", val)
        if self._root is None:
            self._root = BSTNode(val)

        self._root = self._root.insert(val)

    def remove(self, val):
        print(">> remove", val)
        if self._root is None:
            return
        self._root = self._root.remove(val)

    def inorder(self):
        return self._root.inorder() if not self._root is None else None
