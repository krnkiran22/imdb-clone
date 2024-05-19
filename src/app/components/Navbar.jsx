// 'use client'
import React from 'react'
import Navbaritem from './Navbaritem'
export default function Navbar() {
  
    

    return (
      <div className='flex items-center dark:bg-amber-500 text-black font-semibold  bg-amber-200 lg:text-lg justify-center p-4 gap-6 '>
        <Navbaritem title="Trending" param="fetchTrending"/>
        <Navbaritem title="Top Rated" param="fetchTopRated"/>
        
    </div>
  )
}
