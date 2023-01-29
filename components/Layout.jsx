import React from 'react'
import Header from './Header'

export const Layout = ({ children }) => {
  // bg-[#242526]
  return (
    <div className='flex h-screen flex-col bg-[#242526]'>
      <Header />
      <div>{children}</div>
    </div>
  );
}
