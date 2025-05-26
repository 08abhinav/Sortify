import React from 'react'

const PseudoCodeHighligt = ({lines, currentLine}) => {
  return (
    <div className='bg-neutral-900 p-4 rounded-xl w-full'>
      <div className='space-y-1'>
        {lines.map((line, index) => (
          <pre
            key={index}
            className={`px-2 py-1 rounded font-mono transition-colors duration-200 ${
              currentLine === index
                ? 'bg-yellow-300 text-black font-semibold'
                : 'text-white'
            }`}
          >
            {line}
          </pre>
        ))}
      </div>
    </div>
  )
}

export default PseudoCodeHighligt