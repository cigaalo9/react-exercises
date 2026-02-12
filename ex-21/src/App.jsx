import React from 'react';
import HeaderPage from "./HeaderPage";
import Stats from './statistics';
import MainContent from "./MainContent";

function App() {
  return (
    <div className='min-h-screen bg-gray-100 py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <HeaderPage />
        <Stats />
        <MainContent />
      </div>
    </div>
  )
}

export default App