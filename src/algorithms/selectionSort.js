import { delay } from "@/util/delay";

export async function selectionSort(array, setArray, speed, setCurrentLine) {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    setCurrentLine(0)
    let min = i;
    arr[min].state = "compare";

    for (let j = i + 1; j < n; j++) {
      setCurrentLine(1)
      arr[j].state = "compare";
      setArray([...arr]);
      await delay(speed);

      if (arr[j].value < arr[min].value) {
        setCurrentLine(2)
        arr[min].state = "default";
        min = j;
        arr[min].state = "compare";
      } else {
        arr[j].state = "default";
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      arr[i].state = "swap";
      arr[min].state = "swap";
      setArray([...arr]);
      await delay(speed);
    }

    arr[i].state = "sorted";
    setCurrentLine(3)
    if (min !== i) arr[min].state = "default";
    setArray([...arr]);
  }

  arr[n - 1].state = "sorted";
  setArray([...arr]);

  setCurrentLine(null);
}
