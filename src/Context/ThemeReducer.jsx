
export let themeValues = {
    modernTheme: {
        font: 'Space Grotesk',
        bgColor: 'bg-gradient-to-r from-slate-900 to-slate-700',
        color: 'text-white'

    },
    classicTheme: {
        font: 'Poppins',
        bgColor: 'bg-gradient-to-r from-blue-800 to-indigo-900',
        color: 'text-white'

    },
    neonTheme: {
        font: 'Tilt Neon',
        bgColor: 'bg-gradient-to-r from-lime-200 to-lime-400',
        color: 'text-black',

    },

}


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