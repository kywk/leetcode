
from http.client import NOT_FOUND

NOT_FOUND = -1

class BSTNode:
    def __init__(self, data):
        self.value = data
        self.left = None
        self.right = None

    @classmethod
    def insert_helper(cls, val, node):
        if node == None:
            return BSTNode(val)

        if val < node.value:
            node.left = BSTNode.insert_helper(val, node.left)
        else:
            node.right = BSTNode.insert_helper(val, node.right)
        return node

    @classmethod
    def remove_helper(cls, val, node):
        if node == None:
            return None

        if val < node.value:
            node.left = BSTNode.remove_helper(val, node.left)
        elif node.value < val:
            node.right = BSTNode.remove_helper(val, node.right)
        else:
            if node.left == None and node.right == None:
                return None
            elif node.left == None:
                node = node.right
            elif node.right == None:
                node = node.left
            else:
                successor = node.right.find_min()
                node.value = successor
                node.right = BSTNode.remove_helper(successor, node.right)
        return node

    def search(self, val):
        if self.value == val:
            return True
        if val < self.value:
            return False if self.left == None else self.left.search(val)
        else:
            return False if self.right == None else self.right.search(val)

    def find_min(self):
        return self.value if self.left == None else self.left.find_min()

    def find_max(self):
        return self.value if self.right == None else self.right.find_max()

    def find_predecessor(self, val):
        predecessor = NOT_FOUND
        node = self
        while node != None and node.value != val:
            if node.value < val:
                predecessor = node.value
                node = node.right
            else:
                node = node.left

        if node == None:
            return NOT_FOUND
        if node.left != None:
            return node.left.find_max()
        else:
            return predecessor

    def find_successor(self, val):
        successor = NOT_FOUND
        node = self
        while node != None and node.value != val:
            if val < node.value:
                successor = node.value
                node = node.left
            else:
                node = node.right

        if node == None:
            return NOT_FOUND
        if node.right != None:
            return node.right.find_min()
        else:
            return successor

    def insert(self, val):
        return BSTNode.insert_helper(val, self)

    def remove(self, val):
        return BSTNode.remove_helper(val, self)

    def inorder(self):
        result = []
        if self.left != None:
            result.extend(self.left.inorder())
        result.append(self.value)
        if self.right != None:
            result.extend(self.right.inorder())
        return result
