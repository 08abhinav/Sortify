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
  ]
}

export default algopseudoCode