import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Top } from './pages/Top'
import { Courses } from './pages/Courses'
import { Quiz } from './pages/Quiz'
import { Policy } from './pages/Policy'
import { Support } from './pages/Support'
import { Loading } from './pages/Loading'
import { Nomatch } from './pages/Nomatch'
import background from '../public/shippou.jpeg'
import './App.css'


export const App:React.FC = () => {
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
            <Route path="/loading" element={<Loading />} />
            {/*<Route path="/*" element={<Nomatch />} />*/}
          </Routes>
        </div>
      </div>
    </>
  )
}

