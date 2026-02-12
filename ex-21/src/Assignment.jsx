import React from 'react'

function Assignment() {
    const assignments = [
        { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
        { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
        { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
    ];
    return (
        <div className='mb-8'>
            <div className='bg-white rounded-2xl shadow p-4 md:p-6 '>
                <h1 className='text-base md:text-xl font-bold my-4 text-gray-700'>Upcoming Assignments</h1>
                <div className='flex flex-col gap-4'>
                    {
                        assignments.map(assign => (
                            <div key={assign.id} >
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-gray-800 text-base md:text-lg font-medium'>{assign.title}</h1>
                                    <button className={` mt-1 px-3 text-center py-0.5 rounded-full text-xs font-medium ${assign.status === 'completed' ? 'bg-green-100 text-green-800' :
                                        assign.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>{assign.status}</button>
                                </div>
                                <div className='flex justify-between mt-2 items-center text-md text-gray-500'>
                                    <div>{assign.course}</div>
                                    <div>{assign.dueDate}</div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Assignment