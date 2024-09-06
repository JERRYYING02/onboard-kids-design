import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InterviewTest from './component/InterviewTest'

function App() {
  return (
    <>
       <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)',display:'flex', justifyContent:'center', alignItems:'center',height: '100vh'}}> 
        <InterviewTest></InterviewTest>
      </div>
    </>
  )
}

export default App
