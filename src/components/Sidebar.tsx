'use client'

import React from 'react'

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
    <aside className={`bg-zinc-300 flex justify-center p-4 ${isOpen ? 'w-72' : 'w-20'}`}>
      <h2 className="sm:flex xs:hidden cursor-pointer font-bold" onClick={handleOpenMenu}>
        {title}
      </h2>
    </aside>
  )
}

export default Sidebar