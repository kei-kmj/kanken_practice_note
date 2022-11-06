import React from 'react'
import {Link} from 'react-router-dom';
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";



const Question = (): JSX.Element => {



    const navigate = useNavigate()
    const answer1 = () => {
        navigate("/answer")
    }
    const answer2 = () => {
        navigate("/answer")
    }
    const answer3 = () => {
        navigate("/answer")
    }
    const answer4 = () => {
        navigate("/answer")
    }

    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <p className="flex justify-end m-3">準1級</p>
                <p className="text-xl m-10 flex justify-center">問題：【 】内の漢字の読みを答えよ</p>
                <p className="text-3xl m-10 flex justify-center">【厩舎】を掃除する</p>
                <div className="flex justify-center">
                    <div>
                        <button className="btn btn-wide m-10 btn-primary text-3xl" onClick={answer1}>がいしゃ</button>
                        <button className="btn btn-wide m-10 btn-primary text-3xl" onClick={answer2}>きゅうしゃ</button>
                    </div>
                    <div>
                        <button className="btn btn-wide m-10 btn-primary text-3xl" onClick={answer3}>げいしゃ</button>
                        <button className="btn btn-wide m-10 btn-primary text-3xl" onClick={answer4}>がいや</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    </>)
}
export default Question


