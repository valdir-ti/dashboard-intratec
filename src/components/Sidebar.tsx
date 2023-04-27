'use client'

import React from 'react'
import Link from "next/link"
import { Home, LayoutDashboard, Settings, ShoppingBag, User } from "lucide-react"

import useWindowSize, { Size } from '@/hooks/useWindowSize';

type SidebarProps = {
    children: React.ReactNode
}

const Sidebar = ({children}: SidebarProps) => {

    const size: Size = useWindowSize();

    const [isOpen, setIsOpen] = React.useState(true)

    const handleSidebar = () => {
        setIsOpen(!isOpen)
    }

    React.useEffect(() => {
        if(Number(size.width) < 640){
            setIsOpen(false)
        } else {
          setIsOpen(true)
        }
    }, [size])

    return Number(size.width) > 640 ? (
        <div className="flex">
            <div className={`fixed h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between ${isOpen ? 'w-60' : 'w-20'}`}>
                <div className={`flex flex-col ${isOpen ? 'items-start' : 'items-center'}`}>
                    <Link href='/' onClick={handleSidebar} className='flex items-center'>
                        <div className="bg-purple-800 text-white p-3 rounded-lg inline-block cursor-pointer">
                            <Home size={18}/>
                        </div>
                        {isOpen && <h3 className='ml-2 font-bold'>Intratec Tecnologia</h3>}
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href='/' className='flex items-center'>
                        <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
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
                </div>
                <div>2</div>
            </div>
            <main className={`w-full ${isOpen ? 'ml-60' : 'ml-20'}`}>{children}</main>
        </div>) : (<div className='w-full'>{children}</div>)
}

export default React.memo(Sidebar)