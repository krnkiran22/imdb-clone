"use client";
import {MdLightMode , MdDarkMode} from "react-icons/md";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from 'react'

export default function DarkModeSwitch() {
  const {theme,setTheme,systemTheme} = useTheme();
  const [mounted,setMounted]=useState(false);

  const currentTheme=theme === 'system' ? systemTheme:theme;
  useEffect(()=> setMounted(true),[]);
  return (
    <div>
    
    {mounted && (currentTheme ==="light"?(
      <MdLightMode 
        onClick={()=>setTheme("dark")}  
        className="text-xl cursor-pointer text-amber-500 hover:text-amber-500"  

      />
      ) : (
      <MdDarkMode 
         
        onClick={()=>setTheme("light")} 
        className="text-xl cursor-pointer text-amber-500 hover:text-amber-500" />)
        )} 
    </div>
  )
}
