import { delay } from "@/util/delay";

export const bubbleSort = async (array, setArray, speed, setCurrentLine) => {
  let arr = [...array];
  let n = arr.length

  for (let i = 0; i < n; i++) {
    setCurrentLine(0);
    await delay(speed);

    for (let j = 0; j < n - i - 1; j++) {
      setCurrentLine(1);
      
      arr[j].state = 'compare';
      arr[j+1].state = 'compare';
      setArray([...arr])
      await delay(speed);
        
      if (arr[j] && arr[j + 1] && arr[j].value > arr[j + 1].value) {
        setCurrentLine(2);
        await delay(speed);

        const temp1 = { ...arr[j] };
        const temp2 = { ...arr[j + 1] };

        arr[j] = temp2;
        arr[j + 1] = temp1;

        arr[j].state = 'swap';
        arr[j + 1].state = 'swap';

        setArray([...arr]);

        setCurrentLine(3);
        await delay(speed);

        arr[j].state = 'default';
        arr[j + 1].state = 'default';
      }
    }
    arr[n-i-1].state = 'sorted';
    setArray([...arr])
  }

  setCurrentLine(null);
};
