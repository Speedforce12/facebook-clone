import React from "react";
import { TbSearch } from "react-icons/tb";

const NavSearch = () => {
  return (
    <div className='flex w-full items-center  rounded-full bg-[#F0F2F5] p-2.5 text-gray-400 dark:bg-[#29323a]'>
      <TbSearch className='text-2xl' />
      <input
        type='text'
        placeholder='Search Facebook'
        className='placeholder:text-md hidden w-full bg-transparent px-3 text-white focus:outline-none md:block'
      />
    </div>
  );
};

export default NavSearch;
