import React from 'react'

const HeaderActions = ({Icon}) => {
  return (
    <div className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-gray-500/50 lg:h-12 lg:w-12'>
      <Icon className='text-lg text-white lg:text-2xl' />
    </div>
  );
}

export default HeaderActions