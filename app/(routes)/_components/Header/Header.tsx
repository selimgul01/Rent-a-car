import { HeaderData } from '@/constans'
import Link from 'next/link'
import React from 'react'
import HeaderItem from './HeaderItem'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'
import { MenuIcon } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <div className='py-2'>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className='text-2xl md:text-3xl font-semibold text-orange-600'>YouRent</h1>
        <div className="hidden lg:flex lg:flex-row items-center justify-between mx-auto space-x-12">
            {
                HeaderData?.map((item,i) => (
                    <HeaderItem key={i}  label= {item.label} href={item.href} />
                ))
            }
        </div>
        <div className="flex flex-row items-center justify-center space-x-8">
            <ModeToggle/>
            <MobileMenu/>
            <Button  variant={'myButton'} size={'xl'} >Book A Rental</Button>
        </div>

      </div>
    </div>
  )
}

export default Header
