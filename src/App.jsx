import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'
import NewRelease from './home/new release/new'
import Album from './album/head'

function App() {
  return (
      <>
      <Home />
      <NewRelease/>
      <Album/>
      </>
      
  )
}

export default App
