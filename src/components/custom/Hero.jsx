import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-auto gap-9'>
    <h1 className='font-extrabold text-[60px] text-center mt-16'>Plan Trips with AI</h1>
    <p className='text-xl text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <Button>Get Started</Button>
    </div>
  )
}

export default Hero