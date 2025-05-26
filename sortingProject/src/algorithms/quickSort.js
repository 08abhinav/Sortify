import { delay } from "@/util/delay";

export const quickSort = async (arr, setArray, speed, setCurrentLine) => {
  let array = [...arr];
  let n = array.length;

  const partition = async (low, high) => {
    setCurrentLine(7); // "pivot = arr[high]"
    let pivot = array[high];
    pivot.state = 'pivot';

    let i = low - 1;
    setArray([...array]);
    await delay(speed);

    for (let j = low; j < high; j++) {
      setCurrentLine(10); // "if arr[j] < pivot"
      array[j].state = 'compare';
      setArray([...array]);
      await delay(speed);

      if (array[j].value < pivot.value) {
        i++;
        setCurrentLine(12); // "swap arr[i] and arr[j]"
        [array[i], array[j]] = [array[j], array[i]];
        array[i].state = 'swap';
        array[j].state = 'swap';
        setArray([...array]);
        await delay(speed);
      }

      array[j].state = 'default'; // Reset after comparison
    }

    setCurrentLine(14); // "swap arr[i+1] and arr[high]"
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    array[i + 1].state = 'pivot';
    array[high].state = 'default';
    setArray([...array]);
    await delay(speed);

    return i + 1;
  };

  const quickSortRecursive = async (low, high) => {
    setCurrentLine(1); // "if low < high"
    if (low < high) {
      const pivotIndex = await partition(low, high);

      for (let k = low; k <= high; k++) {
        array[k].state = 'default';
      }
      array[pivotIndex].state = 'sorted';
      setArray([...array]);

      setCurrentLine(3); // left
      await quickSortRecursive(low, pivotIndex - 1);

      setCurrentLine(4); // right
      await quickSortRecursive(pivotIndex + 1, high);
    } else if (low === high) {
      array[low].state = 'sorted';
      setArray([...array]);
    }
  };

  await quickSortRecursive(0, n - 1);
  setCurrentLine(null);
};
