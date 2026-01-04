import React from 'react'
import { Link } from 'react-router-dom'

const UserListItem = ({user}) => {
  return (
   <div className='border border-gray-500 rounded-lg shadow-2xl p-4 flex space-x-6 m-4'>
        <img className='h-32 rounded-full' src={user?.avatar_url} alt="" />
        <div>
            <p className='text-gray-600 text-sm'>#id : {user?.id}</p>
            <h1 className='text-2xl font-bold my-4'>{user.login}</h1>
            <Link to={`/user/${user?.login}`} className='bg-blue-600 rounded-xl w-full p-2 text-white font-semibold cursor-pointer hover:bg-blue-900 text-sm mt-4'>View Profile</Link>
        </div>

     </div>
  )
}

export default UserListItem
