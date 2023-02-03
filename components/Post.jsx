import Image from "next/image";
import React from "react";
import { BiCommentDetail, BiLike, BiWorld } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

const Post = () => {
  return (
    <div className='w-full rounded-lg bg-black/10 p-3 shadow-lg'>
      <div className='flex flex-col space-y-1'>
        <div className='flex space-x-3'>
          <Image
            src='/images/avatar.png'
            width={100}
            height={100}
            className='h-12 w-12 rounded-full object-contain'
          />
          <div className='flex flex-col'>
            <span className='text-lg font-bold text-white'>
              I Love the Weekend
            </span>
            <p className='flex items-center text-sm font-normal text-gray-400'>
              {/* {new Date(timestamp?.toDate()).toLocaleString()} */}
              2h
              <BiWorld className='ml-1 text-sm' />
            </p>
          </div>
        </div>
        <div className=' flex flex-col space-y-2'>
          <h2 className='font-sm text-base text-white'>
            New track in asphalt 9 China
          </h2>
          <div className='relative  h-[500px] min-h-max'>
            <Image src='/images/mkbhd.jpg' fill className=' object-cover' />
          </div>
        </div>
        <div className='flex items-center justify-around'>
          <div className='flex  cursor-pointer items-center space-x-2 rounded-lg px-5 py-1.5 text-gray-800 hover:bg-slate-600/40 dark:text-white'>
            <BiLike className='text-2xl' />
            <p>Like</p>
          </div>
          <div className='flex cursor-pointer items-center space-x-2 rounded-lg  px-5 py-2 text-gray-800 hover:bg-slate-600/40 dark:text-white'>
            <BiCommentDetail className='text-2xl' />
            <p>Comment</p>
          </div>
          <div className='flex h-10 cursor-pointer items-center space-x-2 rounded-lg px-5 text-gray-800 hover:bg-slate-600/40 dark:text-white'>
            <RiShareForwardLine className='text-2xl' />
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
