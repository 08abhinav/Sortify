const sortingAlgorithms = [
  {
    name: 'Bubble Sort',
    description: 'A simple comparison-based algorithm. Repeatedly steps through the list and swaps adjacent elements if they are in the wrong order.',
    type: 'bubble',
  },
  {
    name: 'Selection Sort',
    description: 'Selects the smallest element and swaps it with the first unsorted element in each iteration.',
    type: 'selection',
  },
  {
    name: 'Insertion Sort',
    description: 'Builds the final sorted array one item at a time. Best for small datasets.',
    type: 'insertion',
  },
  {
    name: 'Merge Sort',
    description: 'A divide-and-conquer algorithm that divides the list and merges sorted halves.',
    type: 'merge',
  },
  {
    name: 'Quick Sort',
    description: 'Efficient, recursive algorithm that uses a pivot to partition the list.',
    type: 'quick',
  },
  {
    name: 'Heap Sort',
    description: 'In-place, comparison-based algorithm that builds a binary heap and repeatedly extracts the maximum element.',
    type: 'heap',
    }
];

export default sortingAlgorithms;