class Heap:
    def __init__(self, nums):
        self.create(nums)

    @classmethod
    def sort(cls, nums):
        h = Heap(nums)
        result = [None] * len(nums)
        for i in range(len(nums) - 1, -1, -1):
            result[i] = h.extractMax()
        return result

    def data(self):
        return self._data[1:]

    def create(self, nums):
        self._data = [-1]
        self._data.extend(nums)
        for i in range(len(nums) >> 1, 0, -1):
            self._siftDown(i)

    def insert(self, num):
        self._data.append(num)
        self._siftUp(len(self._data) - 1)

    def extractMax(self):
        if len(self._data) < 1:
            raise Exception("Sorry, no numbers")

        result = self._data[1]
        self._data[1] = self._data[len(self._data) - 1]
        self._data.pop()
        self._siftDown(1)
        return result

    def _siftUp(self, idx):
        parent = idx >> 1
        while idx > 1 and self._data[idx] > self._data[parent]:
            self._swap(idx, parent)
            idx = parent
            parent = idx >> 1

    def _siftDown(self, idx):
        leftLarger = False
        rightLarger = False

        left = idx << 1
        if left < len(self._data) and self._data[left] > self._data[idx]:
            leftLarger = True

        right = left + 1
        if right < len(self._data) and self._data[right] > self._data[idx]:
            rightLarger = True

        if leftLarger and rightLarger:
            if self._data[left] > self._data[right]:
                self._swap(left, idx)
                self._siftDown(left)
            else:
                self._swap(right, idx)
                self._siftDown(right)
        elif leftLarger:
            self._swap(left, idx)
            self._siftDown(left)
        elif rightLarger:
            self._swap(right, idx)
            self._siftDown(right)

    def _swap(self, i, j):
        self._data[i], self._data[j] = self._data[j], self._data[i]
