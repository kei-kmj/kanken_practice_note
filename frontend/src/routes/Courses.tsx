import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import {Category, Level, Limit, useFetchApi} from "../API";

const Courses = (): JSX.Element => {

    const level = (type = "11") => {
        //console.log(choiceLevel)
        if (choiceLevel === "1") {
            return Level.FIRST
        } else
            return Level.SEMI_FIRST
    }

    const choiceLevel = (level) => {
        console.log(level)
        return level
    }


    const choiceCategory = (num) => {
        //console.log(num)
        return num
    }

    const category = () => {
        const choiceCategory = ""
        switch (choiceCategory) {
            case "1" :
                return Category.READING
            case "2" :
                return Category.RARE_READING
            case "3" :
                return Category.WRITING
            case "4" :
                return Category.WRITING_IDIOM
            case "5" :
                return Category.MEANING_IDIOM
            case "6" :
                return Category.SYNONYMS_OR_ANTONYMS
            case "7" :
                return Category.HISTORICAL_IDIOM
            default :
                return Category.ALL
        }
    }

    const limit = (choiceLimit = 10) => {
        if (choiceLimit === 10) {
            return Limit.TEN
        } else {
            return null
        }
    }


    const {quiz} = useFetchApi(
        level(),
        category(),
        limit()
    )

    const navigate = useNavigate()

    const allQuizStart = () => {
        console.log(quiz)
        navigate("/questions", {state: {quiz: quiz}})
        //history.replaceState('','','kanken')
    }

    const repeatQuizStart = () => {
        navigate("/questions")
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
                        onClick={() => choiceLevel("11")}>準1級
                    </button>
                    <button
                        className="btn btn-wide m-2 btn-primary"
                        value="1"
                        onClick={() => choiceLevel("1")}>1級
                    </button>
                </div>

                <div>
                    <div>
                        <p className="text-xl flex justify-center m-2">分野を選んでください</p>
                        <div className="flex justify-center">
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                onClick={() => choiceCategory("")}>全分野
                            </button>
                            <button
                                className="btn btn-wide m-2 btn-primary"
                                value="3"
                                onClick={() => choiceCategory("3")}>書き
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
                                value="2"
                                onClick={choiceCategory}>表外の読み
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
                                onClick={choiceCategory}>四字熟語（意味）
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


