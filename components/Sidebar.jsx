import Image from "next/image";
import React from "react";
import sideItems from "@/lib/sidebarData";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className='flex w-96 flex-col space-y-5'>
      <ul className='flex w-full flex-col space-y-3 p-3'>
        <li className='rounded-md py-1.5 pl-2 hover:bg-white/20'>
          <Link href='#' className='sidebar-link'>
            <Image
              src='/images/avatar.png'
              height={100}
              width={100}
              alt=''
              className='h-10 w-10 rounded-full object-contain'
            />
            <span className='text-lg font-bold text-gray-800 dark:text-white'>
              O'vonee Delpesche
            </span>
          </Link>
        </li>

        {sideItems.map((item) => (
          <li className='rounded-md py-1.5 pl-2 hover:bg-white/20' key={item.id}>
            <Link href={item.link} className='sidebar-link'>
              <Image
                src={item.image}
                height={100}
                width={100}
                alt=''
                className='h-8 w-8  object-contain'
              />
              <span className='text-lg font-bold text-gray-800 dark:text-white'>
                {item.name}
              </span>
            </Link>
          </li>
        ))}

        <li className='flex cursor-pointer items-center space-x-3 rounded-md py-1.5 pl-2 hover:bg-white/20'>
          <div className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-700/50 text-black dark:text-white'>
            <BiChevronDown className='h-7 w-7' />
          </div>
          <span className='text-lg font-bold text-gray-800 dark:text-white'>
            See more
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
