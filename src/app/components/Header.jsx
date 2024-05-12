import React from 'react';
import Menuitem from './Menuitem';
import {AiFillHome} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex items p-3 justify-between max-w-6xl mx-auto'>
        <div className='flex  text-white font-bold text-2xl gap-6 '>
           <Menuitem title="Home" address="/" Icon={AiFillHome}/>
           <Menuitem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex text-white items-center gap-4'>
           <DarkModeSwitch />
           <Link href={'/'} className='flex gap-1 items-center'>
           <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
            
           </Link>
        </div>
    </div>
  )
}
