import React from "react";
import FeedTabs from "./FeedTabs";
import InputBox from "./InputBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className='mt-3 flex w-full max-w-4xl flex-col p-3'>
      <div className='w-full space-y-3 py-2'>
        <FeedTabs />
        <InputBox />
        <Post />
        <Post />

        <Post />
      </div>
    </div>
  );
};

export default Feed;
