import { delay } from "@/util/delay"
export async function bubbleSort(array, setArray, speed){
    const arr = [...array]
    const n = arr.length

    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            arr[j].state = 'compare'
            arr[j+1].state = 'compare'
            setArray([...arr])
            await delay(speed);

            if(arr[j].value > arr[j+1].value){
                [arr[j], arr[j+1]] =  [arr[j+1], arr[j]]
                arr[j].state = 'swap';
                arr[j+1].state = 'swap';
                setArray([...arr]);
                await delay(speed)
            }
            arr[n-i-1].state = 'sorted';
            setArray([...arr])
        }
    }
    arr[0].state = 'sorted';
    setArray([...arr])
}