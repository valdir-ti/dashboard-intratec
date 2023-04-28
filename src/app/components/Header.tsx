'use client'

import React from 'react';
import { Menu } from 'lucide-react'

import useWindowSize, { Size } from '@/hooks/useWindowSize';

type HeaderProps = {
  children: React.ReactNode
}

import SideNavigation from "./SideNavigation"

const Header = ({ children }: HeaderProps) => {

  const size: Size = useWindowSize();

  const [openMenu, setOpenMenu] = React.useState(false)
  const [mobilePosition, setMobilePosition] = React.useState(false)

  const handleMenu = React.useCallback(() => {
    setOpenMenu(!openMenu)
  }, [openMenu, setOpenMenu])

  React.useEffect(() => {
    if(Number(size.width) < 640) {
      setMobilePosition(true)
    }
  }, [size])

  return (
    <>
      <div className="flex justify-between px-4 pt-4 relative">
        <SideNavigation mobilePosition={mobilePosition} openMenu={openMenu}/>
        {mobilePosition ? <div><Menu onClick={handleMenu} className='cursor-pointer'/></div> : <div></div>}
        <h2>Welcome back, Valdir</h2>
      </div>
      <div>{children}</div>
    </>
  )
}

export default React.memo(Header)