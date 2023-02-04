import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import profilePic from "../public/images/mkbhd.jpg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const BASEURL = "https://random-data-api.com/api/v2";

const Stories = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getRandomData = async () => {
      try {
        const res = await axios.get(`${BASEURL}/users?size=5`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getRandomData();
  }, []);

  return (
    <div className='flex h-40 w-20 items-center gap-x-1 rounded-xl  lg:h-60 lg:w-40'>
      <Image
        src={profilePic}
        priority
        className='h-full w-full  cursor-pointer rounded-lg object-cover hover:scale-[1.01]'
      />
      <Image
        src={profilePic}
        priority
        className='h-full w-full  cursor-pointer rounded-lg object-cover hover:scale-[1.01]'
      />
      <Image
        src={profilePic}
        priority
        className='h-full w-full  cursor-pointer rounded-lg object-cover hover:scale-[1.01]'
      />
      <Image
        src={profilePic}
        priority
        className='h-full w-full  cursor-pointer rounded-lg object-cover hover:scale-[1.01]'
      />
      <Image
        src={profilePic}
        priority
        className='h-full w-full  cursor-pointer rounded-lg object-cover hover:scale-[1.01]'
      />
      <Image
        src={profilePic}
        priority
        className='h-full w-full  cursor-pointer rounded-lg object-cover hover:scale-[1.01]'
      />
      <Image
        src={profilePic}
        priority
        className='h-full w-full  cursor-pointer rounded-lg object-cover hover:scale-[1.01]'
      />
    
      {/* {data?.map((item) => (
        <div className='relative mx-2 flex w-full  items-center rounded-lg  p-2 shadow-md' key={item.id}>
          <Image
            
            src={item.avatar}
            alt=''
            fill
            className='rounded-lg object-contain cursor-pointer hover:scale-105'
          />

          <div className='absolute top-5 z-20 flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-500 hidden'>
            <Image
              src={item.avatar}
              alt=''
              height={100}
              width={100}
              className='rounded-lg object-cover h-10 w-10'
            />
          </div>

          <span className='absolute bottom-4 w-48 truncate dark:text-white font-semibold text-gray-900  hidden lg:inline-block'>
            {item.first_name} {item.last_name}
          </span>
        </div>
      ))} */}
    </div>
  );
};

export default Stories;
