import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import ThemeContext from './Context/Theme/Theme';
import ThemeButton from './components/ThemeButton';
import Nav from './components/Nav';
import { GithubProvider } from './Context/github/GithubContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import UserDetails from './components/Pages/UserDetails';


function App() {

      let { theme } = useContext(ThemeContext)

  let customStyle = {
    fontFamily: theme?.font
  }

  return (
    <BrowserRouter>
      <GithubProvider>
        <div style={customStyle}>
          <Nav />
          <ThemeButton />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/user/:id' element={<UserDetails/>}/>
            
          </Routes>
        </div>
      </GithubProvider>
    </BrowserRouter>
  )
}

export default App
