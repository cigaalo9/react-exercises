import React from 'react'
function HeaderPage() {
  return (
    <div className='w-full  p-4 md:p-6  flex items-center justify-between bg-white rounded-2xl shadow mb-6'>
      <div >
        <h1 className='text-xl md:text-3xl font-bold text-gray-800 capitalize'>Welcome back, students!</h1>
        <p className='text-sm   md:text-base lg:text-lg text-gray-600'>Here's what's happening with your courses today.</p>
      </div>
      <div className='flex items-center justify-between gap-6'>
        <div className='relative p-2'>
          <span className='w-2 h-2 rounded-full bg-rose-400 absolute top-0 left-8'></span>
          <button className='w-6 h-6 text-center text-xl text-gray-300 hover:text-gray-500 cursor-pointer '>🔔</button>
        </div>
        <div className='w-8 h-8 rounded-full text-base text-white font-semibold bg-linear-to-r  from-purple-400  to-pink-500 flex justify-center items-center'>N</div>
      </div>
    </div>
  )
}

export default HeaderPage