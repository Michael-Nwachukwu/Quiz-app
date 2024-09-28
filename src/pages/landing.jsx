import React from 'react'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <div className='flex justify-center items-center w-full ml-14 sm:ml-0'>
      <div className="grid sm:grid-cols-2 gap-14 items-center">
        <img src="/images/shape-morph-animation.svg" className='h-48 sm:h-auto' alt="" />
        <div className='flex flex-col items-start gap-8'>
          <h1 className='font-bolder text-5xl'>Welcome to <span className="font-extrabold text-stone-700">QuizCon</span></h1>
          <Link className='font-bold  sm:text-3xl bg-black text-white py-2 sm:py-4 px-4 sm:px-8 rounded-full' to={'/quiz'}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing