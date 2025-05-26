const sortingAlgorithms = [
  {
    name: 'Bubble Sort',
    description: 'A simple comparison-based algorithm. Repeatedly steps through the list and swaps adjacent elements if they are in the wrong order.',
    type: 'bubble',
    complexities: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
    },
    legend: [
      { color: "bg-blue-400", label: "Default" },
      { color: "bg-yellow-400", label: "Compare" },
      { color: "bg-green-400", label: "Sorted" },
      { color: "bg-red-400", label: "Swapping" }
    ]
  },
  {
    name: 'Selection Sort',
    description: 'Selects the smallest element and swaps it with the first unsorted element in each iteration.',
    type: 'selection',
    complexities: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
    },
    legend: [
      { color: "bg-blue-400", label: "Default" },
      { color: "bg-yellow-400", label: "Compare" },
      { color: "bg-green-400", label: "Sorted" },
      { color: "bg-red-400", label: "Swapping" }
    ]
  },
  {
    name: 'Insertion Sort',
    description: 'Builds the final sorted array one item at a time. Best for small datasets.',
    type: 'insertion',
    complexities: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)',
    },
    legend: [
      { color: "bg-blue-400", label: "Default" },
      { color: "bg-yellow-400", label: "Compare" },
      { color: "bg-green-400", label: "Sorted" },
      { color: "bg-red-400", label: "Swapping" }
    ]
  },
  {
    name: 'Merge Sort',
    description: 'A divide-and-conquer algorithm that divides the list and merges sorted halves.',
    type: 'merge',
    complexities: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)',
    },
    legend: [
      { color: "bg-blue-400", label: "Default" },
      { color: "bg-yellow-400", label: "Compare" },
      { color: "bg-green-400", label: "Sorted" },
      { color: "bg-red-400", label: "Swapping" },
      { color: "bg-orange-400", label: "Divide"},
    ],
  },
  {
    name: 'Quick Sort',
    description: 'Efficient, recursive algorithm that uses a pivot to partition the list.',
    type: 'quick',
    complexities: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)',
    },
    complexity: "O(nlogn)",
    legend: [
      { color: "bg-blue-400", label: "Default" },
      { color: "bg-yellow-400", label: "Compare" },
      { color: "bg-green-400", label: "Sorted" },
      { color: "bg-red-400", label: "Swapping" },
      { color: "bg-purple-500", label: "Pivot" },
    ]
  },
  {
    name: 'Heap Sort',
    description: 'In-place, comparison-based algorithm that builds a binary heap and repeatedly extracts the maximum element.',
    type: 'heap',
    complexities: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)',
    },
    legend: [
      { color: "bg-blue-400", label: "Default" },
      { color: "bg-yellow-400", label: "Compare" },
      { color: "bg-green-400", label: "Sorted" },
      { color: "bg-red-400", label: "Swapping" }
    ]
    }
];

export default sortingAlgorithms;