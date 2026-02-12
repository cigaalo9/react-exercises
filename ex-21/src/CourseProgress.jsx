import React from 'react'

function CourseProgress() {
      
  const courses = [
    { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
    { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
    { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
  ];
  return (
    <div className='lg:col-span-2'>
        <div className='bg-white shadow rounded-2xl p-4 md:p-6 lg:p-8 space-y-4'>
            <h1 className='text-xl md:text-2xl font-bold mb-4 text-gray-700'>Course Progress</h1>
           
            {
                courses.map(course => (
                    <div key={course.id} className='flex flex-col  bg-gray-100 rounded-2xl p-2 md:p-4 gap-2 '>
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-gray-900 text-base md:text-xl font-semibold'>{course.name}</h1>
                            <span className='text-gray-700 text-sm md:text-base lg:text-lg'>{course.progress}%</span>
                        </div>
                        <div className='bg-gray-300 h-1.5 rounded-full'>
                            <div className={` ${course.progress <= 50 && "bg-purple-500 w-[45%]" } ${course.progress > 50 && "bg-blue-500 w-[75%]" } ${course.progress >= 90 && "bg-rose-500 w-[90%]" } h-1.5 rounded-full  `}></div>
                        </div>
                        <div className='flex justify-between items-center text-gray-500'>
                            <div >Next: {course.nextLesson}</div>
                            <div>{course.instructor}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CourseProgress