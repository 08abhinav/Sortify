import React from 'react';
import FloatingParicles from './FloatingParicles';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-[#000] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-start space-x-2">
          <div className="text-white font-bold text-3xl">🔢</div>
          <div className='flex flex-col'>
            <span className="text-white text-3xl font-mono leading-tight font-semibold">Sortify</span>
            <span className='text-sm text-white font-mono font-semibold'>Sorting Algorithms, Made Simple.</span>
          </div>
        </div>

        {/*  Nav Links  */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="relative group font-semibold text-white text-lg font-mono hover:text-gray-400 transition duration-400">
            Home
            <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-400 group-hover:w-full'></span>
          </Link>
          <Link to="/about-us" className="relative group font-semibold text-white text-lg font-mono hover:text-gray-400 transition duration-400">
            About
            <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-400 group-hover:w-full'></span>
          </Link>
          <Link to="/description" className="relative group font-semibold text-white text-lg font-mono hover:text-gray-400 transition duration-400">
            Visualizer
            <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-400 transition-all duration-400 group-hover:w-full'></span>
          </Link>
        </div>
      </div>
      <FloatingParicles/>
    </nav>
  );
};

export default Nav;
