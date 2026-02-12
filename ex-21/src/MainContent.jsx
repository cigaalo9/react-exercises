import React from 'react'
import CourseProgress from "./CourseProgress";
import Assignment from "./Assignment";
import Announcements from '../Announcements';

function MainContent() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        <CourseProgress />
        <div>
        <Assignment />
        <Announcements />
        </div>
    </div>
  )
}

export default MainContent