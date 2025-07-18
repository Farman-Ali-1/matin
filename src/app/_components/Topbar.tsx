import React from 'react'
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa'

function Topbar() {
  return (
    <div className='w-full flex flex-row items-center h-12 justify-between bg-[#333333]'>
        <div className='flex flex-row items-center gap-2'>
            <span className='flex flex-row items-center gap-2'>
                <FaPhoneAlt className='text-[#CBA135]' />
                <span>Call us</span>
            </span>
            <span className='flex flex-row items-center gap-2'>
                <FaMailBulk className='text-[#CBA135]' />
                <span>Email message</span>
            </span>
        </div>
    </div>
  )
}

export default Topbar