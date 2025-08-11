import React from 'react';
import Sidebar from './Sidebar';

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 p-8'>{children}</div>
    </div>
  );
};

export default MainContent;
