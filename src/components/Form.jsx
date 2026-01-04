import React, { useContext, useState } from 'react'
import ThemeContext from '../Context/Theme/Theme'
import { searchUser } from '../Context/github/GithubService'
import Githubcontext from '../Context/github/GithubContext'
import { IoIosSearch } from 'react-icons/io'

const Form = () => {

    let {theme} = useContext(ThemeContext)

    let {dispatch} = useContext(Githubcontext)

    let [text , setText] = useState('')

    let handleSearch = async(e) =>{
        e.preventDefault()
        dispatch({type: 'LOADING_SCREEN'})
        let data = await searchUser(text)
      dispatch({
        type: 'SEARCH_USERS',
        payload : data
      })
      setText('')
        

    }
  return (
    <form onSubmit={handleSearch} className='p-4 rounded-md shadow-sm'>
        <div className={`h1 text-center font-bold  text-2xl my-4 drop-shadow-[0px_0px_39px_rgba(255,0,123,0.9)] ${theme.color}`}>SEARCH USER HERE</div>
      <input value={text} onChange={(e)=>setText(e.target.value)} className={`outline-none border border-white w-full p-4 rounded-lg my-4 placeholder:text-white ${theme.color}`} type="text" placeholder='Search User...'required name="" id="" />
      <button className={`bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-lime-200 hover:to-teal-200 cursor-pointer text-2xl font-bold tracking-widest w-full p-4 rounded-lg ${theme.color} mb-6 flex items-center justify-center gap-3 hover:text-black transition duration-200`}> <IoIosSearch className='text-3xl hover:text-black transition duration-200' />Search</button>
    </form>
  )
}

export default Form
