import { createContext, useReducer } from "react";
import { ThemeReducer  } from "../ThemeReducer";

let ThemeContext = createContext()

export let ThemeProvider = ({children}) =>{

    const localTheme = JSON.parse(localStorage.getItem('theme'))

    

    let initialState = {
        theme : localTheme || {
        font: 'Space Grotesk',
        bgColor: 'bg-gradient-to-r from-slate-900 to-slate-700',
        color: 'text-white'
    }
    
    }

    let [state , dispatch] = useReducer( ThemeReducer , initialState)


  return (
      <ThemeContext.Provider value={{...state  , dispatch}}>

        {children}

    </ThemeContext.Provider>
  )
}



export default ThemeContext