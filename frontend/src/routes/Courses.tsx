import React from 'react'
import {useNavigate, Link} from "react-router-dom";
import Footer from "../components/Footer";
import {fetchQuestions} from "../API";

const CATEGORY = ""
const LEVEL = 11

const Courses = (): JSX.Element => {

    const startQuiz = async () => {

        const setQuestions = await fetchQuestions(
            LEVEL,
            CATEGORY,
        )
    }
    const navigate = useNavigate()
    const allQuizStart = () => {
            navigate("/question")
        }

    ;
    const repeatQuizStart = () => {
            navigate("/question")
        }
    ;
    const choiceClass = (e) => {
        console.log(e.target.value)
    }
    const choiceCategory = (e) => {
        console.log(e.target.value)
    }
    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h3>( ..)φ 漢検練習帳</h3>

                <p className="text-xl flex justify-center m-1">級を選んでください</p>
                <div className="flex justify-center">
                    <button
                        className="btn btn-wide m-2 btn-primary"
                        value="11"
                        onClick={choiceClass}>準1級
                    </button>
                    <button
                        className="btn btn-wide m-2 btn-primary"
                        value="1"
                        onClick={choiceClass}>1級
                    </button>
                </div>

                <div>
                    <div>
                        <p className="text-xl flex justify-center m-2">分野を選んでください</p>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value=""
                                onClick={choiceCategory}>全分野
                            </button>

                        </div>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value="1"
                                onClick={choiceCategory}>読み
                            </button>
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value="3"
                                onClick={choiceCategory}>書き
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value="4"
                                onClick={choiceCategory}>四字熟語（書き）
                            </button>
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value="5"
                                onClick={choiceCategory}>四字熟語（読み）
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value="6"
                                onClick={choiceCategory}>対義語・類義語
                            </button>
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value="7"
                                onClick={choiceCategory}>故事成語・諺
                            </button>
                        </div>

                        <p className="text-xl flex justify-center m-2 ">新規又は復習を選んでください</p>
                        <div className="flex justify-center">
                            <button className="btn btn-wide m-2 btn-primary" onClick={allQuizStart}>新規</button>
                            <button className="btn btn-wide m-2 btn-primary" onClick={repeatQuizStart}>復習</button>
                        </div>
                        <p className="text-xs flex justify-center">選んだ分野のすべての問題から出題されます 「復習する」にチェックした問題から出題されます</p>

                        <div className="grid grid-flow-col gap-4 link flex justify-end m-5">
                            <Link to="/vite-dev">トップ画面に戻る</Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>

        </div>
    </>)
}
export default Courses


