import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Post from "./Post";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Feed = () => {


  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className='mt-3 flex w-full max-w-4xl flex-col p-3'>
      <div className='w-full space-y-3 py-2'>
        <div className="relative">
          <div
            id='slider'
            className='group overflow-x-auto scroll-smooth scrollbar-hide'>
            <Stories />
            <button
              className='slider left-5  bg-white dark:bg-[#303132]'
              onClick={slideLeft}>
              <AiOutlineLeft className='text-lg text-white' />
            </button>
            <button
              className='slider right-5 bg-white dark:bg-[#303132] '
              onClick={slideRight}>
              <AiOutlineRight className='text-lg text-gray-300 ' />
            </button>
          </div>
        </div>
        <InputBox />
        <Post />
        <Post />

        <Post />
      </div>
    </div>
  );
};

export default Feed;
