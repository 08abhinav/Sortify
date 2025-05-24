import React, { useState } from 'react'
import algopseudoCode from '@/data/pseudoCode';
import FloatingParicles from '@/components/FloatingParicles';
import Visualizer from '@/components/Visualizer';
import { useParams } from 'react-router-dom';
import PseudoCodeHighligt from '@/components/PseudoCodeHighlight';
import Nav from '@/components/Nav';

const SortingVisualizer = () => {
  const {type} = useParams()
  const [currentLine, setCurrentLine] = useState(null)
  return (
    <>
      <div className='bg-black min-h-screen text-white relative'>
        <Nav/>
        <div className='max-w-8xl mx-auto px-4 pt-28'>
          <h1 className='text-4xl font-mono font-bold text-center mb-6'>
            Visualizing: <span className='underline font-bold font-mono'>{type.charAt(0).toUpperCase()+type.slice(1)} Sort</span>
          </h1>

          <div className='flex flex-col md:flex-row gap-10'>
            {/* left side */}
            <div className='w-full md:w-1/2 p-4 m-6'>
              <h2 className='text-xl font-semibold font-mono'>Pseudocode</h2>
              <div className='md:w-1/2 mt-2 w-full'>
                <PseudoCodeHighligt
                lines={algopseudoCode[type] || 'unsupported algo'}
                currentLine={currentLine}/>
              </div>
            </div>

            {/* right side */}
            <div className='w-full md:w-1/2'>
              <Visualizer type={type} setCurrentLine={setCurrentLine}/>
            </div>
          </div>
        </div>
      </div>
      <FloatingParicles/>
    </>
  )
}

export default SortingVisualizer