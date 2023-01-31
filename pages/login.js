import React from "react";
import { useSession, signIn } from "next-auth/react";

const login = () => {

  return (
    <div className='flex h-screen items-center bg-white p-5'>
      <div className='mx-auto  space-y-10 grid max-w-5xl grid-cols-1   p-2 lg:flex lg:justify-between'>
        <div className='w-full pr-5'>
          <h1 className='pb-4 text-5xl font-bold text-blue-500'>Facebook</h1>

            <h2 className='w-full hidden lg:block text-2xl font-semibold text-gray-800'>
              Connect with friends and the world around you on Facebook.
            </h2>
        </div>
        <div className='flex lg:w-3/5 w-full items-center justify-end'>
            <button className='w-full rounded-md bg-gradient-to-tr from-blue-500 to-blue-700 px-4 py-2 text-xl font-semibold tracking-normal text-white' onClick={()=> signIn("facebook")}>
              Login with Facebook
            </button>
        </div>
      </div>
    </div>
  );
};

export default login;
