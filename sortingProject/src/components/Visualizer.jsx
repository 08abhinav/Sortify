import React, { useEffect, useState } from 'react'
import Bar from './Bar'
import { Button } from '@/components/ui/button';
import {bubbleSort} from '@/algorithms/bubbleSort'
import { insertionSort } from '@/algorithms/insertionSort';
import { selectionSort } from '@/algorithms/selectionSort';

const Visualizer = ({type, setCurrentLine}) => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false)
  const [arrlen, setArrLen] = useState(8)
  const maxVal = Math.max(...array.map(item=> item.value)|| 0)
    useEffect(()=>{
    resetArray();
    }, [arrlen]);

    const handleSorting = async()=>{
        setIsSorting(true)
        if(type=== 'bubble'){
            await bubbleSort(array, setArray, speed, setCurrentLine);
        }
        else if (type=== 'insertion'){
            await insertionSort(array, setArray, speed, setCurrentLine);
        }
        else if(type=== 'selection'){
            await selectionSort(array, setArray, speed, setCurrentLine);
        }
        else{ 
        alert('Unsupported') 
        }
        setIsSorting(false)
  }

    const resetArray = ()=>{
        const temp = Array.from({length: arrlen}, ()=>({
            value: Math.floor(Math.random()*100)+10,
            state: 'default',
        }))
        setArray(temp);
    }
  return (
    <>
    <div className='text-white'>
        <div className="flex items-end justify-center space-x-2 h-[300px] px-4">
            {array.map((bar, index) => (
                <Bar key={index} value={bar.value} state={bar.state} maxVal={maxVal}/>
            ))}
        </div>
        
        {/* Speed Control and array size*/}
        <div className="flex flex-col justify-center items-center mb-6">
        {/* range control */}
        <div className='mt-4 flex items-center space-x-4'>
            <label className='text-lg font-mono w-31'>Array size ({arrlen}):</label>
            <input type="range"
            min="8"
            max="15"
            step="1" 
            value={arrlen}
            onChange={(e)=>{
                if(!isSorting){
                setArrLen(Number(e.target.value))
                }}}
            disabled={isSorting}
            className="w-64 accent-white cursor-pointer"/>
        </div>

        {/* speed control */}
        <div className='mt-4 flex items-center space-x-4'>
            <label className="text-lg font-mono w-31">Speed ({speed}ms):</label>
            <input
            type="range"
            min="10"
            max="700"
            step="5"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="w-64 accent-white cursor-pointer"
            />
        </div>
        </div>

        {/* start and reset buttons container */}
        <div className='flex justify-center space-x-4 mb-8'>
        <Button
            onClick={handleSorting}
            variant="outline"
            className="rounded-xl hover:bg-white/10"
        >
            Start Sorting
        </Button>

        <Button
            onClick={resetArray}
            variant="outline"
            className="rounded-xl hover:bg-white/10"
            disabled={isSorting}
        >
            Reset Array
        </Button>
        </div>
    </div>
    </>
  )
}

export default Visualizer