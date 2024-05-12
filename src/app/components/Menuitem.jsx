import React from 'react'
import Link from 'next/link'

export default function Menuitem({title, address ,Icon}) {
  return (
    <Link className=" hover:text-amber-500" href={address}>
        <Icon className=" text-2xl sm:hidden"/>
        <p className='text-amber-500 hidden sm:inline text-sm'>{title}</p>

    </Link>
  )
}
