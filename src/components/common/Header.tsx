import React from 'react';
import Image from 'next/image';
import { IoMailOutline } from 'react-icons/io5';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';
import { SearchIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className='flex justify-between items-center gap-5 px-5 md:px-10 py-2 shadow-sm shadow-secondary-light'>
      <div className='flex items-center gap-5 md:gap-10'>
        <div className='flex items-center gap-2 md:gap-5'>
          <div className='relative w-10 h-10'>
            <Image
              src='/original-logo.png'
              alt='logo'
              fill
              className='object-contain'
            />
          </div>
          <h3 className='text-xl font-light'>
            {' '}
            HireHub.<span className='text-secondary-light font-bold'>AI</span>
          </h3>
        </div>
        <div className='hidden md:relative'>
          <SearchIcon
            size={16}
            className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-500'
          />
          <input
            type='text'
            name='search'
            placeholder='Search for jobs, candidates'
            className='w-full h-10 rounded-sm border-2 border-secondary-light outline-secondary-light pl-8 pr-4 py-2 text-sm'
          />
        </div>
      </div>
      <div className='hidden md:flex items-center gap-4'>
        <IoMailOutline
          size={32}
          className='cursor-pointer hover:bg-secondary-light rounded-full p-1 transition-all duration-300'
        />
        <IoIosNotificationsOutline
          size={32}
          className='cursor-pointer hover:bg-secondary-light rounded-full p-1 transition-all duration-300'
        />
        <button
          type='button'
          className='flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-sm'
        >
          <FaPlus />
          Post a Job
        </button>
      </div>
    </header>
  );
};

export default Header;
