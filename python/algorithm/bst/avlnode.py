from bstnode import *


class AVLNode(BSTNode):
    def __init__(self, data):
        self.value = data
        self.left = None
        self.right = None
        self.height = 1

    @classmethod
    def height_helper(cls, node):
        result = node.height if not node is None else 0
        return result

    @classmethod
    def insert_helper(cls, val, node):
        if node is None:
            return AVLNode(val)

        if val < node.value:
            node.left = AVLNode.insert_helper(val, node.left)
        else:
            node.right = AVLNode.insert_helper(val, node.right)

        return AVLNode.rotate(node)

    @classmethod
    def remove_helper(cls, val, node):
        if node is None:
            return None

        if val < node.value:
            node.left = AVLNode.remove_helper(val, node.left)
        elif node.value < val:
            node.right = AVLNode.remove_helper(val, node.right)
        else:
            if node.left is None and node.right is None:
                return None
            elif node.left is None:
                node = node.right
            elif node.right is None:
                node = node.left
            else:
                successor = node.right.find_min()
                node.value = successor
                node.right = AVLNode.remove_helper(successor, node.right)
        return AVLNode.rotate(node)

    @classmethod
    def rotate(cls, node):
        left = AVLNode.height_helper(node.left)
        right = AVLNode.height_helper(node.right)
        bf = left - right

        if bf > 1:
            if AVLNode.height_helper(node.left.left) < AVLNode.height_helper(node.left.right):
                node.left = AVLNode.rotate_left(node.left)
            return AVLNode.rotate_right(node)
        elif bf < -1:
            if AVLNode.height_helper(node.right.left) > AVLNode.height_helper(node.right.right):
                node.right = AVLNode.rotate_right(node.right)
            return AVLNode.rotate_left(node)
        else:
            node.update_height()
            return node

    @classmethod
    def rotate_left(cls, node):
        result = node.right
        t = result.left

        node.right = t
        node.height = node.height - 1

        result.left = node
        return result

    @classmethod
    def rotate_right(cls, node):
        result = node.left
        t = result.right

        node.left = t
        node.height = node.height - 1

        result.right = node
        return result

    def update_height(self):
        self.height = max(AVLNode.height_helper(self.left),
                          AVLNode.height_helper(self.right)) + 1

    def insert(self, val):
        return AVLNode.insert_helper(val, self)

    def remove(self, val):
        return AVLNode.remove_helper(val, self)
