import React, { useContext } from 'react'

import UsersListGroup from '../UsersListGroup'
import ThemeContext from '../../Context/Theme/Theme'
import Form from '../Form'

const Home = () => {

     let { theme } = useContext(ThemeContext)

  return (
    <div>
       <div className={`min-h-screen ${theme.bgColor} p-8`}>
          <Form />
          <UsersListGroup />

        </div>
    </div>
  )
}

export default Home
