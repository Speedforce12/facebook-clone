import React from 'react'

const SidebarItems = ({item}) => {
  return (
    <div className='mr-auto flex items-center justify-center space-x-3 cursor-pointer hover:bg-gray-700/60 rounded-lg p-2'>
      <item.Icon
       
        className={`text-[${item.color}] text-blue-500/80 h-8 w-8`}
      />
      <span className='text-lg font-bold'>{item.name}</span>
    </div>
  );
}

export default SidebarItems