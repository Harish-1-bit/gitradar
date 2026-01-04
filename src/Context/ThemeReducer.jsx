import { themeValues } from "./Theme/ThemeColor"

export let ThemeReducer = (state, action) => {
    if (action.type === 'MODERN_THEME') {
        return {
            ...state,
            theme: themeValues.modernTheme
        }
    }else if( action.type === 'CLASSIC_THEME'){
        return {
            ...state ,
            theme : themeValues.classicTheme
        }

    }else if(action.type === 'NEON_THEME'){
        return {
            ...state ,
            theme : themeValues.neonTheme
        }
    }
}