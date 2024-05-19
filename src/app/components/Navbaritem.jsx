'use client'
import React from 'react'
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
export default function Navbaritem({title,param}) {
    const searchParams =useSearchParams();
    const genre=searchParams.get('genre')

    return (
    <div className=''>
        <Link className={`hover:text-gray-300 
          ${genre === param ? "underline underline-offset-8 decoration-4 decoration-black rounded-lg": ''}
         `} href={`/?genre=${param}`}>
            {title}
        </Link>
    </div>
  )
}
  