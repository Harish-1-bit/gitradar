export let GithubReducer = (state , action) =>{




    if(action.type === 'SEARCH_USERS'){
        return {
            ...state ,
            users : action.payload ,
            isLoading : false

        }
    }else if(action.type === 'LOADING_SCREEN'){
        return {
            ...state ,
            isLoading :  true
        }
    }else if(action.type === 'GET_USER'){
        return {
            ...state , 
            user : action.payload ,
            isLoading : false
        }
    }

}