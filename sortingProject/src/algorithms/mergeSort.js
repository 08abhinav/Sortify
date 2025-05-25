import { delay } from "@/util/delay";

export const mergeSort = async (arr, setArray, speed, setCurrentLine) => {
  let array = [...arr]; // local copy to work on
  const n = array.length - 1;

  const merge = async (left, mid, right) => {
    setCurrentLine(8);
    let temp = [];
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
      setCurrentLine(9);
      array[i].state = 'compare';
      array[j].state = 'compare';
      setArray([...array]);
      await delay(speed);

      setCurrentLine(10);
      if (array[i].value <= array[j].value) {
        temp.push({ ...array[i] });
        i++;
      } else {
        temp.push({ ...array[j] });
        j++;
      }

      array.forEach((ele, idx) => {
        if (idx !== i && idx !== j) ele.state = 'default';
      });
      setArray([...array]);
      setCurrentLine(11);
      await delay(speed);
    }

    setCurrentLine(12);
    while (i <= mid) {
      temp.push({ ...array[i] });
      i++;
      await delay(speed);
    }

    setCurrentLine(13);
    while (j <= right) {
      temp.push({ ...array[j] });
      j++;
      await delay(speed);
    }

    setCurrentLine(14);
    for (let k = left; k <= right; k++) {
      array[k] = temp[k - left];
      array[k].state = 'sorted';
      setArray([...array]);
      await delay(speed);
    }
  };

  const mergeRecursive = async (left, right) => {
    setCurrentLine(1);
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    // Highlight current subarray as "dividing"
    for (let k = left; k <= right; k++) {
      array[k].state = 'dividing';
    }
    setArray([...array]);
    await delay(speed);

    setCurrentLine(4);
    await mergeRecursive(left, mid);

    setCurrentLine(5);
    await mergeRecursive(mid + 1, right);

    // Reset states before merging
    for (let k = left; k <= right; k++) {
      array[k].state = 'default';
    }
    setArray([...array]);

    setCurrentLine(6);
    await merge(left, mid, right);
  };

  await mergeRecursive(0, n);
  setCurrentLine(null);
};
