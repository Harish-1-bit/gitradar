import { createContext, useReducer } from "react";
import { GithubReducer } from "./GithubReducer";

let Githubcontext = createContext()

export let GithubProvider = ({children}) =>{

    let initialState = {
         users : [],
         user : {},
         isLoading : false
    }

    let [state , dispatch] = useReducer( GithubReducer ,  initialState)
    return (
        <Githubcontext.Provider value={{...state , dispatch}}>
            {children}
        </Githubcontext.Provider>
    )
}


export default Githubcontext