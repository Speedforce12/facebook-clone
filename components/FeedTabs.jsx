import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const BASEURL = "https://random-data-api.com/api/v2";

const FeedTabs = () => {
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
    <div className='flex h-60 lg:w-full lg:rounded-lg  bg-white p-2  dark:bg-black/10'>
      {data?.map((item) => (
        <div className='relative mx-2 flex w-full  items-center rounded-lg  p-2 shadow-md' key={item.id}>
          <Image
            
            src={item.avatar}
            alt=''
            fill
            className='lg:rounded-lg object-contain cursor-pointer hover:scale-105 rounded-full'
          />

          <div className='absolute top-5 z-20 lg:flex h-14 w-14 items-center justify-center rounded-full border-4 border-blue-500 hidden'>
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
      ))}
    </div>
  );
};

export default FeedTabs;
