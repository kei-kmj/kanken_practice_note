import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Qualification from './routes/Qualification'
import Top from './routes/Top'
import Support from './routes/Support'
import Courses from './routes/Courses'
import Quiz from './routes/Quiz'
import background from '../public/shippou.jpeg'
import './App.css'

function App () {
  return (
      <>
        <div className="bg-auto" style={ { backgroundImage: `url(${background}` } }>
          <div className="">
            <Routes>
              <Route exact path="/" element={ <Top/> }/>
              <Route path="/vite-dev" element={ <Top/> }/>
              <Route path="/courses" element={ <Courses/> }/>
              <Route path="/qualification" element={ <Qualification/> }/>
              <Route path="/support" element={ <Support/> }/>
              <Route path="/quiz" element={ <Quiz/> }/>
            </Routes>
          </div>
        </div>
      </>
  )
}
export default App
