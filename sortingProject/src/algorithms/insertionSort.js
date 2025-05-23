import { delay } from "@/util/delay";

export async function insertionSort(array, setArray, speed) {
  const arr = [...array];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = { ...arr[i] };
    let j = i - 1;

    arr[i].state = 'compare';
    setArray([...arr]);
    await delay(speed);

    while (j >= 0 && arr[j].value > key.value) {
      arr[j].state = 'compare';
      setArray([...arr]);
      await delay(speed);

      arr[j + 1] = { ...arr[j] };
      arr[j].state = 'swap';
      setArray([...arr]);
      await delay(speed);

      arr[j].state = 'default';
      j--;
    }

    arr[j + 1] = { ...key, state: 'swap' };
    setArray([...arr]);
    await delay(speed);

    arr[j + 1].state = 'default';
  }

  // Mark all as sorted at the end
  for (let i = 0; i < n; i++) {
    arr[i].state = 'sorted';
  }
  setArray([...arr]);
}
