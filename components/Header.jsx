import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { RiSlideshow3Line } from "react-icons/ri";
import { IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { CgGames, CgMenuGridO } from "react-icons/cg";
import HeaderIcons from "./HeaderIcons";
import HeaderActions from "./HeaderActions";
import { FaFacebookMessenger } from "react-icons/fa";
import NavSearch from "./navbar/NavSearch";
import { TbBellRinging2 } from "react-icons/tb";

const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex items-center justify-between  bg-[#09090A] p-2 px-4 shadow-md'>
      <div className='flex items-center space-x-3'>
        <Image
          src='/images/logo.png'
          height='100'
          width='100'
          alt=''
          className='w-11 object-contain'
        />

        <NavSearch />
      </div>
      {/* middle */}
      <div className='hidden  items-center md:flex'>
        <HeaderIcons Icon={AiOutlineHome} />
        <HeaderIcons Icon={RiSlideshow3Line} />
        <HeaderIcons Icon={IoStorefrontOutline} />
        <HeaderIcons Icon={HiOutlineUserGroup} />
        <HeaderIcons Icon={CgGames} />
      </div>

      {/* right */}
      <div className='flex  items-center justify-end space-x-5'>
        <HeaderActions Icon={CgMenuGridO} />
        <HeaderActions Icon={FaFacebookMessenger} />
        <HeaderActions Icon={TbBellRinging2} />
        <Image
          src='/images/avatar.png'
          width={200}
          height={200}
          alt='avatar'
          className='h-10 w-10 cursor-pointer object-contain lg:h-12 lg:w-12'
        />
      </div>
    </div>
  );
};

export default Header;
