import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Functional from '../components/Functional'
import Counter from '../components/Counter'

function App() {
  

  return (
    <>
      <h1>Assignment-1 Counter Application</h1>
      <div className="App" style={{ display: 'flex', justifyContent: 'space-around', gap: '30px' }}>
        <Functional />
        <Counter />
      </div>
    </>
  )
}

export default App
