'use client'

import {useEffect, useState, useCallback} from 'react'

import { Menu } from 'lucide-react';

import useWindowSize, { Size } from '@/hooks/useWindowSize';

const Sidebar = () => {

  const size: Size = useWindowSize();

  const [isOpen, setIsOpen] = useState(true)
  const [title, setTitle] = useState('...')

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen)

    if(!isOpen) {
      setTitle('Intratec Tecnologia')
    } else {
      setTitle('IT')
    }

  }, [isOpen, setIsOpen])

  useEffect(() => {

    if(size.width! < 640){
      setTitle('IT')
      setIsOpen(false)
    } else {
      setTitle('Intratec Tecnologia')
    }

  }, [size])

  return (
    <aside className={`bg-zinc-300 flex justify-center p-4 xs:p-2 ${isOpen ? 'w-72' : 'w-20'}`}>
      <h2 className={`flex items-center justify-center sm:flex font-bold h-8 ${size.width! < 640 && isOpen && 'xs:text-[12px]'}`}>
        <Menu size={18} className='mr-2 cursor-pointer duration-300' onClick={handleOpenMenu}/>
        {title}
      </h2>
    </aside>
  )
}

export default Sidebar