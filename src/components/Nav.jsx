import React, { useContext } from 'react'
import ThemeContext from '../Context/Theme/Theme'
import { Link } from 'react-router-dom'
import { MdLocationSearching } from 'react-icons/md'
import { LuGithub } from 'react-icons/lu'

const Nav = () => {


    let {theme} = useContext(ThemeContext)

  return (
    <div>
      <nav className={`${theme?.bgColor} py-2 px-12   border-white`}>
      <Link to={'/'} className='' ><h1 className={` ${theme.color}  font-bold text-2xl  flex items-center justify-items-start gap-5`}> <MdLocationSearching className='text-7xl hover:rotate-180 hover:scale-125 duration-300' /> <LuGithub className='absolute left-18' /> GITRADAR</h1></Link>
     </nav>
    </div>
  )
}

export default Nav
