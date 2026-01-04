import React, { useContext, useState } from 'react'
import { FaPalette, FaPallet } from 'react-icons/fa'
import ThemeContext from '../Context/Theme/Theme'
import { themeValues } from '../Context/Theme/ThemeColor'


const ThemeButton = () => {


    let {dispatch} = useContext(ThemeContext)

    let [themeChangeShow , setThemeChangeShow] = useState(false)

    let handleThemeSwitch = (themeType) =>{


        if(themeType === 'MODERN_THEME'){
            localStorage.setItem('theme' , JSON.stringify(themeValues.modernTheme))
        }else if(themeType === 'NEON_THEME'){
            localStorage.setItem('theme' , JSON.stringify(themeValues.neonTheme))
        }else{
            localStorage.setItem('theme', JSON.stringify(themeValues.classicTheme))
        }

        dispatch({
            type : themeType 
        })
        setThemeChangeShow(false)
    }

  return (
    <div className='fixed bottom-5 left-4'>

        <ul className= {themeChangeShow ?  'my-4 space-y-2 ' :  'my-4 space-y-2 hidden'}>
            <li onClick={()=>handleThemeSwitch('MODERN_THEME')} className='bg-gray-200 p-2 rounded-md text-center text-bold text-2xl hover:bg-gray-300 cursor-pointer'>Modern Theme</li>
            <li onClick={()=>handleThemeSwitch('CLASSIC_THEME')} className='bg-gray-200 p-2 rounded-md text-center text-bold text-2xl hover:bg-gray-300 cursor-pointer'>Classic Theme</li>
            <li onClick={()=>handleThemeSwitch('NEON_THEME')} className='bg-gray-200 p-2 rounded-md text-center text-bold text-2xl hover:bg-gray-300 cursor-pointer'>Neon Theme</li>
        </ul>
       <button onMouseOver={()=>setThemeChangeShow(true)} className='bg-amber-700 text-lg font-bold text-white p-5 rounded-full  hover:scale-125 duration-300 cursor-pointer'><FaPalette/></button>
    </div>
  )
}

export default ThemeButton
