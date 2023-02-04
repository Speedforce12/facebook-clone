import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";
import axios from "axios";

const BASEURL = "https://random-data-api.com/api/v2";

const Widgets = () => {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    const getProfiles = async () => {
      try {
        const res = await axios.get(`${BASEURL}/users?size=5`);
        setProfiles(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProfiles();
  }, []);

  console.log(profiles);

  return (
    <div className='fixed right-2 hidden w-96 translate-x-full space-y-3 bg-[#151515] rounded-lg p-3 lg:flex  lg:translate-x-0 lg:flex-col'>
      <div className='flex w-full items-center justify-between'>
        <h2 className='text-lg font-bold text-gray-700 dark:text-white'>
          Contacts
        </h2>
        <div className=' flex w-full items-center justify-end space-x-5 text-white'>
          <div className='flex h-10  w-10 cursor-pointer items-center  justify-center rounded-full hover:bg-gray-500/20'>
            <RiVideoAddLine className='text-lg ' />
          </div>
          <div className='flex h-10  w-10 cursor-pointer items-center  justify-center rounded-full hover:bg-gray-500/20'>
            <AiOutlineSearch />
          </div>
          <div className='flex h-10  w-10 cursor-pointer items-center  justify-center rounded-full hover:bg-gray-500/20'>
            <BsThreeDots />
          </div>
        </div>
      </div>
      <ul className='flex w-full flex-col space-y-3 p-2'>
        {profiles?.map((profile) => (
          <li className='relative flex cursor-pointer items-center space-x-3 rounded-lg p-3 hover:bg-slate-400/20'>
            <Image
              src={profile.avatar}
              width={100}
              height={100}
              className='h-10 w-10 object-contain'
              alt=''
            />
            <span className='text-lg font-semibold text-gray-50 dark:text-white'>
              {profile.first_name} {profile.last_name}
            </span>
            <div className='absolute bottom-3 left-7 h-3 w-3   rounded-full bg-green-600 outline-black' />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Widgets;
