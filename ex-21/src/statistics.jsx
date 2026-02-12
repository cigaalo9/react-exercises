import React from 'react'

function statistics() {
    const stats =[
        {text: "Average Grade" , value: "88%" , icon: "📊"},
        {text: "Course" , value: "5" , icon: "📚"},
        {text: "Study Hours" , value: "45h" , icon: "⏰"},
        {text: "Assiments" , value: "21" , icon: "✍️"},
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 mb-6'>
        {
            stats.map(stat => (
                <div key={stat} className='bg-white shadow-md p-4 md:p-6 rounded-2xl flex jusfity-center items-center gap-4 hover:shadow-xl'> 
                    <div className='text-3xl '>{stat.icon}</div>
                    <div >
                        <h3 className='text-sm  md:text-lg text-gray-600'>{stat.text}</h3>
                        <h2 className='text-xl font-bold md:text-2xl lg:text-3xl text-gray-900'>{stat.value}</h2>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default statistics