import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import {Category, Level, Limit, useFetchApi} from "../API";
import "../App.css"

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
        const choiceCategory = "3"
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
    }

    const repeatQuizStart = () => {
        navigate("/questions")
    }


    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h3>( ..)φ 漢検練習帳</h3>

                <p className="text-xl flex justify-center mt-10">級を選んでください</p>
                <div className="flex justify-center m-0">
                    <input id="radio1" className="radiobutton" name="level" hidden type="radio" value="11"
                           onClick={() => choiceLevel("11")}/>
                    <label htmlFor="radio1">準1級</label>

                    <input id="radio2" className="radiobutton" name="level" hidden type="radio" value="1"
                           onClick={() => choiceLevel("1")}/>
                    <label htmlFor="radio2">1 級</label>
                </div>

                <div>
                    <div>
                        <p className="text-xl flex justify-center mt-2">分野を選んでください</p>
                        <div className="flex justify-center m-0">
                            <input id="category1" className="radiobutton" name="category" hidden type="radio" value="11"
                                   onClick={() => choiceCategory("")}/>
                            <label htmlFor="category1">全分野</label>

                            <input id="category2" className="radiobutton" name="category" hidden type="radio" value="3"
                                   onClick={() => choiceCategory("3")}/>
                            <label htmlFor="category2">書 き</label>
                        </div>
                        <div className="flex justify-center">
                            <input id="category3" className="radiobutton" name="category" hidden type="radio" value="1"
                                   onClick={() => choiceCategory("1")}/>
                            <label htmlFor="category3">読 み</label>

                            <input id="category4" className="radiobutton" name="category" hidden type="radio" value="2"
                                   onClick={() => choiceCategory("2")}/>
                            <label htmlFor="category4">表外の読み</label>

                        </div>
                        <div className="flex justify-center">
                            <input id="category5" className="radiobutton" name="category" hidden type="radio" value="4"
                                   onClick={() => choiceCategory("4")}/>
                            <label htmlFor="category5">四字熟語（書き）</label>

                            <input id="category6" className="radiobutton" name="category" hidden type="radio" value="5"
                                   onClick={() => choiceCategory("5")}/>
                            <label htmlFor="category6">四字熟語（意味）</label>


                        </div>
                        <div className="flex justify-center">
                            <input id="category7" className="radiobutton" name="category" hidden type="radio" value="4"
                                   onClick={() => choiceCategory("6")}/>
                            <label htmlFor="category7">対義語・類義</label>

                            <input id="category8" className="radiobutton" name="category" hidden type="radio" value="5"
                                   onClick={() => choiceCategory("7")}/>
                            <label htmlFor="category8">故事成語・諺</label>

                        </div>

                        <p className="text-xl flex justify-center mt-5">新規又は復習を選んでください</p>
                        <div className="flex justify-center">
                            <div>
                                <button className="btn btn-wide m-2 btn-primary b" onClick={allQuizStart}>新 規</button>
                                <p className="flex justify-center">選んだ分野のすべての問題から出題されます</p>
                            </div>
                            <div>
                                <button className="btn btn-wide m-2 btn-primary b" onClick={repeatQuizStart}>復 習</button>
                                <p className="flex justify-center">「復習する」にチェックした問題から出題されます</p>
                            </div>
                        </div>
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


