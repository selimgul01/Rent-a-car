import { HeaderDataProps } from '@/constans'
import { Poppins } from 'next/font/google';
import Link from 'next/link'
import React from 'react'


const poppins = Poppins({
subsets: ["latin"] , weight:"100"
});


const HeaderItem = ({href, label}:HeaderDataProps) => {
  return (
    <Link href={href} className='font-semibold hover:text-orange-600 transition-all duration-500'>
        {label}
    </Link>
  )
}

export default HeaderItem
