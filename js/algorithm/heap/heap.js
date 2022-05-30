class Heap {
  static sort(nums) {
    let h = new Heap(nums)
    let result = new Array(nums.length)
    for (let i = nums.length - 1; i >= 0; i--)
      result[i] = h.extractMax()
    return result
  }

  constructor(nums) {
    this._data = [-1].concat(nums)
    for (let i = this._data.length >> 1; i >= 1; i--)
      this.siftDown(i)
  }

  get data() {
    return this._data.slice(1)
  }

  insert(num) {
    this._data.push(num)
    this.siftUp(this._data.length - 1)
  }

  extractMax() {
    if (this._data.length < 1)
      return null

    let result = this._data[1]
    this._data[1] = this._data[this._data.length - 1]
    this._data.pop()
    this.siftDown(1)
    return result
  }

  updateKey(idx, value) {
    if ((idx < 1) || (idx >= this._data.length))
      return

    this._data[idx] = value
    this.siftUp(idx)
    this.siftDown(idx)
  }

  delete(idx) {
    if ((idx < 1) || (idx >= this._data.length))
      return

    this._data[idx] = Infinity
    this.siftUp(idx)
    this.extractMax()
  }

  siftUp(idx) {
    let parent = idx >> 1
    while ((idx > 1) && (this._data[idx] > this._data[parent])) {
      this.swap(idx, parent)
      idx = parent
      parent = idx >> 1
    }
  }

  siftDown(idx) {
    let isLeftLarger = false
    let isRightLarger = false

    let left = idx << 1
    if ((left < this._data.length) &&
        (this._data[left] > this._data[idx]))
      isLeftLarger = true

    let right = left + 1
    if ((right < this._data.length) &&
        (this._data[right] > this._data[idx]))
      isRightLarger = true

    if (isLeftLarger && isRightLarger) {
      if (this._data[right] > this._data[left]) {
        this.swap(right, idx)
        this.siftDown(right)
      } else {
        this.swap(left, idx)
        this.siftDown(left)
      }
    } else if (isLeftLarger) {
      this.swap(left, idx)
      this.siftDown(left)
    } else if (isRightLarger) {
      this.swap(right, idx)
      this.siftDown(right)
    }
  }

  swap(i, j) {
    let tmp = this._data[i]
    this._data[i] = this._data[j]
    this._data[j] = tmp
  }
}


module.exports = Heap;
