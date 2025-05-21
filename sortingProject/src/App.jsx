import { useState } from 'react'
import SortingVisualizer from './visualizer/SortingVisualizer'
import './index.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        {/* <Route path="/visualizer" element={<Visualizer />} /> */}
    </Routes>
    </div>
  )
}

export default App
