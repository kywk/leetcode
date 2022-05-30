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
    return self.__data[1:]

  def create(self, nums):
    self.__data = [-1]
    self.__data.extend(nums)
    for i in range(len(nums) >> 1, 0, -1):
      self.__siftDown(i)

  def insert(self, num):
    self.__data.append(num)
    self.__siftUp(len(self.__data) - 1)

  def extractMax(self):
    if len(self.__data) < 1:
       raise Exception("Sorry, no numbers")

    result = self.__data[1]
    self.__data[1] = self.__data[len(self.__data) - 1]
    self.__data.pop()
    self.__siftDown(1)
    return result

  def __siftUp(self, idx):
    parent = idx >> 1
    while idx > 1 and self.__data[idx] > self.__data[parent]:
      self.__swap(idx, parent)
      idx = parent
      parent = idx >> 1

  def __siftDown(self, idx):
    leftLarger = False
    rightLarger = False

    left = idx << 1
    if left < len(self.__data) and self.__data[left] > self.__data[idx]:
      leftLarger = True

    right = left + 1
    if right < len(self.__data) and self.__data[right] > self.__data[idx]:
      rightLarger = True

    if leftLarger and rightLarger:
      if self.__data[left] > self.__data[right]:
        self.__swap(left, idx)
        self.__siftDown(left)
      else:
        self.__swap(right, idx)
        self.__siftDown(right)
    elif leftLarger:
      self.__swap(left, idx)
      self.__siftDown(left)
    elif rightLarger:
      self.__swap(right, idx)
      self.__siftDown(right)

  def __swap(self, i, j):
    self.__data[i], self.__data[j] = self.__data[j], self.__data[i]
