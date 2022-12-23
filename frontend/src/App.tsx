import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Policy from './routes/Policy'
import Top from './routes/Top'
import Support from './routes/Support'
import Courses from './routes/Courses'
import Quiz from './routes/Quiz'
import { Nomatch } from './routes/Nomatch'
import background from '../public/shippou.jpeg'
import './App.css'

function App() {
  return (
    <>
      <div className="bg-auto" style={{ backgroundImage: `url(${background}` }}>
        <div className="">
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Nomatch />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
export default App
