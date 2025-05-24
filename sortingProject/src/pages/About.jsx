import FloatingParicles from '@/components/FloatingParicles'
import Nav from '@/components/Nav'
import React from 'react'

const About = () => {
  return (
    <div className='relative h-fit min-h-screen bg-black text-white'>
      <Nav/>

      <div className='pt-32 text-center px-4'>
        <h1 className='text-4xl font-bold font-mono underline decoration-white/40'>About-Us</h1>
        <div className='mt-6 items-center'>
          <p className='text-xl text-gray-100 max-w-3xl mx-auto font-mono'>
            Hi! I'm a Computer Science student who believes that theory is just the beginning. 
            To bring my classroom knowledge to life, I created this simple sorting visualization project. 
            The goal? Make learning algorithms easier, more visual, and just a bit more fun.
          </p>
          <p className='text-xl text-gray-100 max-w-3xl mx-auto font-mono mt-6'>
            I hope you find it helpful and enjoyable. Thanks for checking it out!          
          </p>
        </div>
      </div>
      <FloatingParicles/>
    </div>
  )
}

export default About