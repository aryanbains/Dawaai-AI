


import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-[85%] bg-white flex justify-between items-center mx-auto px-10 py-2 absolute top-10 left-[7%] rounded-xl'>
        <img src="/logo.svg" alt="logo" className='h-[38px]' />
        <Link to="login">
            <button className='text-[#00856F] font-semibold text-[20px] border-[1px] border-[#00856F] px-7 py-2 rounded-xl hover:bg-[#00856F] hover:text-white'>Login</button>
        </Link>
        <Link to="GovtSchemes">
            <button className='text-[#00856F] font-semibold text-[20px] border-[1px] border-[#00856F] px-7 py-2 rounded-xl hover:bg-[#00856F] hover:text-white'>Government Schemes</button>
        </Link>
        <Link to="/therapist">
            <button className='text-[#00856F] font-semibold text-[20px] border-[1px] border-[#00856F] px-7 py-2 rounded-xl hover:bg-[#00856F] hover:text-white'>Consult a Therapist</button>
        </Link>        
        <Link to="/lab">
            <button className='text-[#00856F] font-semibold text-[20px] border-[1px] border-[#00856F] px-7 py-2 rounded-xl hover:bg-[#00856F] hover:text-white'>Get Medical Tests</button>
        </Link>
    </div>
  )
}

