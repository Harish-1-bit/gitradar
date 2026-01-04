import React, { useContext, useEffect } from 'react'
import ThemeContext from '../../Context/Theme/Theme'
import { useParams } from 'react-router-dom'
import { fetchUser } from '../../Context/github/GithubService'
import Githubcontext from '../../Context/github/GithubContext'

const UserDetails = () => {

    let {theme} = useContext(ThemeContext)
    let {id} = useParams() 
    let {dispatch  , user} = useContext(Githubcontext)

    let getUser = async(id) =>{
        dispatch({type : 'LOADING_SCREEN'})
        let data = await fetchUser(id)
        
        dispatch({type: 'GET_USER' , payload : data})
        


    }

    useEffect(()=>{
getUser(id)
    },[])

  return (
    <div className={`min-h-screen ${theme.bgColor} ${theme.color} p-8`}>

       <div className='border border-white rounded-2xl p-8 flex flex-wrap items-center space-x-10'>
        <img className='h-52 rounded-full' src={user?.avatar_url} alt="" />
        <h1>NAME : {user?.name}</h1>
        <h1>USERNAME : {user?.login}</h1>
        <div className='w-full flex items-center justify-between my-10'>
            <h1>FOLLOWERS :  {user?.followers}</h1>
            <h1>FOLLOWING : {user?.following}</h1>
            <h1>REPOS : {user?.public_repos}</h1>
        </div>

       </div>
      
    </div>
  )
}

export default UserDetails
