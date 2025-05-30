import React from 'react';

const Bar = ({ value, state, maxVal }) => {
  const heightPercent = (value / maxVal) * 100;
  const getColor = (state) => {
    switch (state) {
      case 'compare': return 'bg-yellow-400';
      case 'swap': return 'bg-red-500';
      case 'sorted': return 'bg-green-500';
      case 'divide': return 'bg-orange-400';
      case 'pivot': return 'bg-purple-500'
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="flex flex-col items-center justify-end">
      <div
        className={`w-6 ${getColor(state)} rounded-t transition-all duration-300 `}
        style={{
          height: `${heightPercent}px`,
          minHeight: '5px',
        }}
      ></div>
      <span className="text-sm text-white mt-1">{value}</span>
    </div>
  );
};

export default Bar;
