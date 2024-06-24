import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {

    const navigate =useNavigate();
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
            <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>
        </div>
        <div className='flex items-center gap-4'>
            <Link to='/premium' className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</Link>
            
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>U</p>

        </div>
        
      </div>
      <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <Link to='/music' className='bg-black text-white px-4 py-1  rounded-2xl cursor-pointer'>Music</Link>
            <Link to='/podcast' className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</Link>


        </div>
    </>
  )
}

export default Navbar
