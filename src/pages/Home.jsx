import React from 'react'
import Nav from '../components/Nav'
import FloatingParicles from '../components/FloatingParicles';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <Nav/>
        <section className="relative h-screen flex flex-col justify-center items-center text-center bg-black overflow-hidden">
            {/* Content */}
            <h1 className="text-white font-mono text-5xl md:text-7xl font-bold mb-6">
                Sorting, Visualized.
            </h1>

            <p className="text-gray-300 max-w-xl mb-8 px-4 md:px-0">
                Understand sorting algorithms intuitively with live, interactive animations.
            </p>

            <button className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700  text-white font-semibold transition">
                <Link to="/description">Try Sortify Now</Link>
            </button>

            {/* GIF Preview */}
            <div className="overflow-hidden mt-12 mx-auto max-w-md p-4 rounded-xl bg-gradient-to-tr from-gray-800 via-gray-900 to-black shadow-2xl">
                <img
                    src="https://user-images.githubusercontent.com/76222459/222598048-dc963ef3-39cf-488d-81dd-6cb5cf45d098.gif"
                    alt="Sorting Animation"
                    className="w-80 rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
                />
            </div>
            <FloatingParicles/>
        </section>
        </>
  )
}

export default Home