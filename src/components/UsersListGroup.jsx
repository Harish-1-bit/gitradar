import React, { useContext } from 'react'
import ThemeButton from './ThemeButton'
import ThemeContext from '../Context/Theme/Theme'
import UserListItem from './UserListItem'
import Githubcontext from '../Context/github/GithubContext'

const UsersListGroup = () => {

    let {theme} = useContext(ThemeContext)

    let { users , isLoading} = useContext(Githubcontext)

    if(isLoading){
        return (
            <h1 className='text-center font-bold text-2xl text-white'>Loading...</h1>
        )
    }
  return (
    <div className={`my-6 ${theme.color}`}>
   {
   
     users.map(user => <UserListItem key={user.id} user={user}/>)
   }
    </div>
  )
}

export default UsersListGroup
