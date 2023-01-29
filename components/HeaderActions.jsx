import React from 'react'

const HeaderActions = ({Icon}) => {
  return (
    <div className='flex lg:h-12 lg:w-12 h-10 w-10 cursor-pointer hover:bg-gray-500/50 items-center justify-center rounded-full bg-[#3A3B3C]'>
      <Icon className='lg:text-2xl text-lg text-white' />
    </div>
  );
}

export default HeaderActions