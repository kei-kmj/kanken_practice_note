import {Routes, Route, Link} from 'react-router-dom'
import Qualification from './routes/Qualification'
import Top from "./routes/Top";
import Support from './routes/Support'
import Nomatch from './routes/Nomatch'
import Footer from "./components/Footer";
import Courses from "./routes/Courses";
import Question from "./routes/Question";
import Answer from "./routes/Answer";
import "./App.css"

function App() {

    return (
        <>

            <div>
                <Routes>
                    <Route path="/vite-dev" element={<Top/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/qualification" element={<Qualification/>}/>
                    <Route path="/support" element={<Support/>}/>
                    <Route path="/question" element={<Question/>}/>
                    <Route path="/answer" element={<Answer/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App