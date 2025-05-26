import { useState } from 'react'
import './index.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Description from './pages/Description'
import SortingVisualizer from './visualizer/SortingVisualizer'
import Visualizer from './components/Visualizer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/description" element={<Description />} />
        <Route path="/visualize/:type" element={<SortingVisualizer   />} />
    </Routes>
    </div>
  )
}

export default App
