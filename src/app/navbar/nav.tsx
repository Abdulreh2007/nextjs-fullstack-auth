"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { navlinks } from '../../../constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

// define nav props
type Props ={
  openNav:()=>void
}

const Nav = ({openNav}:Props) => {
const [navbg,setnavbg] = useState(false)
 useEffect(()=> {
  const handler = ()=>{
    if(window.scrollY>=99){
      setnavbg(true)
    }
    if(window.scrollY<99){
      setnavbg(false)
    }
  }
  window.addEventListener('scroll', handler)
  return ()=>window.removeEventListener('scroll', handler)

 })
  return (
    <div className={`fixed ${navbg?'bg-indigo-800':'fixed'} w-full transition-all duration-200 h-[12vh]  z-[1000]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w[80%] mx-auto'>
 {/* logo */}
     <Image src='/images/logo.png' alt='logo' width={120} height={120}/>
     {/* nav links */}
     <div className='hidden lg:flex items-center space-x-10'>
      {navlinks.map((link)=>{
        return <Link key={link.id} href={link.url}>
           <p className='nav__link'>{link.label}</p>
        </Link>
      })}
     </div>
     {/* button */}
     <div className='flex items-center space-x-4'>
        <Link href={'/profile'}>
        
      <button className='md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg'>
        LOG OUT
      </button>
      </Link>
      {/* burder */}
      <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden '/>
     </div>
      </div>
      </div>
  )
}

export default Nav