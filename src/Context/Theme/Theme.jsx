import { createContext, useContext, useReducer } from "react";
import { ThemeReducer, themeValues } from "../ThemeReducer";

let ThemeContext = createContext()

export let ThemeProvider = ({children}) =>{

    let localTheme = JSON.parse(localStorage.getItem('theme')) || {
        font: 'Space Grotesk',
        bgColor: 'bg-gradient-to-r from-slate-900 to-slate-700',
        color: 'text-white'
    }

    

    let initialState = {
        theme : localTheme 
    }

    let [state , dispatch] = useReducer( ThemeReducer , initialState)


  return (
      <ThemeContext.Provider value={{...state  , dispatch}}>

        {children}

    </ThemeContext.Provider>
  )
}



export default ThemeContext