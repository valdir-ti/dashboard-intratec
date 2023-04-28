import React from 'react'

import { Settings, User, ShoppingBag, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'

type MenuProps = {
    isOpen: boolean
}

const Menu = ({ isOpen }: MenuProps) => {
  return (
    <>
        <Link href='/' className='flex items-center'>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block ">
                <LayoutDashboard size={18}/>
            </div>
            {isOpen && <h3 className='ml-2'>Dashboard</h3>}
        </Link>
        <Link href='/users' className='flex items-center'>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <User size={18}/>
            </div>
            {isOpen && <h3 className='ml-2'>Users</h3>}
        </Link>
        <Link href='/orders' className='flex items-center'>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <ShoppingBag size={18}/>
            </div>
            {isOpen && <h3 className='ml-2'>Orders</h3>}
        </Link>
        <Link href='/settings' className='flex items-center'>
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                <Settings size={18}/>
            </div>
            {isOpen && <h3 className='ml-2'>Settings</h3>}
        </Link>
    </>
  )
}

export default Menu