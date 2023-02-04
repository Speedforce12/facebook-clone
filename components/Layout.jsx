import { useRouter } from 'next/router';
import React from 'react'
import Header from './Header'

export const Layout = ({ children }) => {
  // bg-[#242526]
  const router = useRouter()
  return (
    <div className='flex  flex-col bg-[#09090A]'>
      {router.pathname !== "/login" && <Header path={router.route} />}
      <div>{children}</div>
    </div>
  );
}
