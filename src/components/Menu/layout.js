import React from 'react'
import IsNotAdmin from './isNotAdmin'
import Menu from './menu'
import { useContext, useEffect } from 'react'
import { useAppContext } from "../Context/context";

const Layout = () => {
    const { setIsNotAdmin } = useAppContext()
    useEffect(() => {
        setIsShow(true);
    }, [])

  return (
    <>
        { isNotAdmin ? <IsNotAdmin/> : <Menu/> }
    </>

  )
}

export default Layout