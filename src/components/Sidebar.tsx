'use client'

import React from 'react'

import { Menu } from 'lucide-react';

const Sidebar = () => {

  const [isOpen, setIsOpen] = React.useState(true)
  const [title, setTitle] = React.useState('...')

  const handleOpenMenu = React.useCallback(() => {
    setIsOpen(!isOpen)
    if(!isOpen){
      setTitle('Intratec Tecnologia')
    }else{
      setTitle('IT')
    }
  }, [isOpen, setIsOpen])

  React.useEffect(() => {
    if(isOpen){
      setTitle('Intratec Tecnologia')
    }else{
      setTitle('IT')
    }
  }, [])

  return (
    <aside className={`bg-zinc-300 flex justify-center p-4 xs:p-2 ${isOpen ? 'w-72' : 'w-20'}`}>
      <h2 className="flex items-center justify-center sm:flex font-bold h-8 xs:text-1xl">
        <Menu size={18} className='mr-2 cursor-pointer' onClick={handleOpenMenu}/>
        {title}
      </h2>
    </aside>
  )
}

export default Sidebar