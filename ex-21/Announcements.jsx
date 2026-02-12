import React from 'react'

function Announcements() {
     const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];

  return (
    <div className='space-y-8'>
        <div className='bg-white rounded-2xl p-4 md:p-6'>
            <h1 className='text-base md:text-xl font-bold my-4 text-gray-700'>Announcements</h1>
            <div className='flex flex-col gap-4 md:gap-8'>
                {
                announcements.map(ann =>(
                    <div key={ann.id} className='flex gap-2 '>
                        <div className='bg-blue-600 p-0.5 rounded-full'></div>
                        <div>
                            <h1 className='text-lg font-medium text-gray-800 mb-1'>{ann.title}</h1>
                            <p className='text-base text-gray-600'>{ann.message}</p>
                            <span className='text-gray-400'>{ann.time}</span>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Announcements