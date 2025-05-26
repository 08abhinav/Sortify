import { delay } from "@/util/delay";

export const heapSort = async (arr, setArray, speed, setCurrentLine) => {
  let array = [...arr];
  const n = array.length;

  const heapify = async (size, i) => {
    setCurrentLine(11);
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    setCurrentLine(13);
    if (left < size) array[left].state = 'compare';
    if (right < size) array[right].state = 'compare';
    array[largest].state = 'compare';
    setArray([...array]);
    await delay(speed);

    setCurrentLine(14);
    if (left < size && array[left].value > array[largest].value) {
      largest = left;
    }

    setCurrentLine(16);
    if (right < size && array[right].value > array[largest].value) {
      largest = right;
    }

    setCurrentLine(18);
    if (largest !== i) {
      setCurrentLine(19);
      [array[i], array[largest]] = [array[largest], array[i]];
      array[i].state = 'swap';
      array[largest].state = 'swap';
      setArray([...array]);
      await delay(speed);

      array[i].state = 'default';
      array[largest].state = 'default';
      await heapify(size, largest);
    } else {
      array[i].state = 'default';
      if (left < size) array[left].state = 'default';
      if (right < size) array[right].state = 'default';
    }
    setArray([...array]);
  };

  const buildMaxHeap = async () => {
    setCurrentLine(7);
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(n, i);
    }
  };

  await buildMaxHeap();

  setCurrentLine(3);
  for (let i = n - 1; i > 0; i--) {
    setCurrentLine(4);
    [array[0], array[i]] = [array[i], array[0]];
    array[i].state = 'sorted';
    array[0].state = 'swap';
    setArray([...array]);
    await delay(speed);

    array[0].state = 'default';
    await heapify(i, 0);
  }

  array[0].state = 'sorted'; 
  setArray([...array]);
  setCurrentLine(null);
};
