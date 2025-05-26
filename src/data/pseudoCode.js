const algopseudoCode = {
    bubble: [
    "for i from 0 to n-1",
    "for j from 0 to n-i-1",
    "if arr[j] > arr[j+1]",
    "swap(arr[j], arr[j+1])"
  ],
  insertion: [
    "for i from 1 to n-1",
    "key = arr[i]",
    "j = i-1",
    "while j >= 0 and arr[j] > key",
    "arr[j+1] = arr[j]",
    "j--",
    "arr[j+1] = key"
  ],
  selection:[
    "for i from 0 to n-2",
    "minIndex = i",
    "for j from i+1 to n-1",
    "if arr[j] < arr[minIndex]",
    "minIndex = j",
    "swap arr[minIndex] and arr[i]"
  ],
  merge: [
  "function mergeSort(arr, left, right)",
    "if left >= right",
    "    return",
    "  mid = (left + right) / 2",
    "  mergeSort(arr, left, mid)",
    "  mergeSort(arr, mid + 1, right)",
    "  merge(arr, left, mid, right)",
    "",
    "function merge(arr, left, mid, right)",
    "  while i <= mid and j <= right",
    "    if arr[i] <= arr[j]",
    "      temp.push(arr[i])",
    "      i++",
    "    else",
    "      temp.push(arr[j])",
    "      j++",
    "  while i <= mid",
    "    temp.push(arr[i])",
    "    i++",
    "  while j <= right",
    "    temp.push(arr[j])",
    "    j++",
    "  for k = left to right",
    "    arr[k] = temp[k - left]"
  ],
  quick:[
    "function quickSort(arr, low, high)",
    "  if low < high",
    "    pivotIndex = partition(arr, low, high)",
    "    quickSort(arr, low, pivotIndex - 1)",
    "    quickSort(arr, pivotIndex + 1, high)",
    "function partition(arr, low, high)",
    "  pivot = arr[high]",
    "  i = low - 1",
    "  for j = low to high - 1",
    "    if arr[j] < pivot",
    "      i++",
    "      swap arr[i] and arr[j]",
    "  swap arr[i+1] and arr[high]",
    "  return i + 1"
  ],
  heap:[
    "function heapSort(arr)",
    "  buildMaxHeap(arr)",
    "  for i from n-1 to 1",
    "    swap arr[0] and arr[i]",
    "    heapify(arr, 0, i)",
    "",
    "function buildMaxHeap(arr)",
    "  for i from ⌊n/2⌋ - 1 to 0",
    "    heapify(arr, i, n)",
    "",
    "function heapify(arr, i, heapSize)",
    "  largest = i",
    "  left = 2*i + 1",
    "  right = 2*i + 2",
    "  if left < heapSize and arr[left] > arr[largest]",
    "    largest = left",
    "  if right < heapSize and arr[right] > arr[largest]",
    "    largest = right",
    "  if largest != i",
    "    swap arr[i] and arr[largest]",
    "    heapify(arr, largest, heapSize)"
  ]

}

export default algopseudoCode