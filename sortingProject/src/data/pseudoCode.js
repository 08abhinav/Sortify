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
  ]
}

export default algopseudoCode