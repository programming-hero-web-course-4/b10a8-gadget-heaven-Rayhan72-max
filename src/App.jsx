import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Shared/Navbar'

import Homepage from './Homepage/Homepage'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Footer from './Shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Helmet>
      <title>Gadget Heaven</title>
    </Helmet>
    <Navbar />
    <Outlet />
    <Footer></Footer>
    </>
  )
}

export default App
