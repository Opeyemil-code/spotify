import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/home'
import NewRelease from './home/new release/new'
import Album from './album/head'
import Collect from './collection/collect'
import Playing from './playing/play'


function App() {
  return (
      <>
      <Home />
      <NewRelease/>
      <Playing/>
      <Album/>
      <Collect />
      </>
      
  )
}

export default App
