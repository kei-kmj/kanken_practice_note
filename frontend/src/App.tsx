import {Routes, Route, Link, useLocation} from 'react-router-dom'
import Qualification from './routes/Qualification'
import Top from "./routes/Top";
import Support from './routes/Support'
import Courses from "./routes/Courses";
import Question from "./routes/Question";
import Answer from "./routes/Answer";

import "./App.css"


function App() {


    return (
        <>

            <div>
                <Routes >
                    <Route path="/vite-dev" element={<Top/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/qualification" element={<Qualification/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/questions" element={<Question/>}/>
                    <Route path="/answer" element={<Answer/>}/>

                </Routes>
            </div>
        </>
    )
}

export default App