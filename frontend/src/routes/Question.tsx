import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Footer from "../components/Footer";
import {useNavigate, useLocation} from "react-router-dom";


const Question = (): JSX.Element => {
    const navigate = useNavigate()
    const location = useLocation()

    const data = location.state as { quiz }
    const [loading, setLoading] = useState<boolean>(false)
    const [currentQuiz, setCurrentQuiz] = useState<number>(0)
    const [score, setScore] = useState<number>(0)

    const correctAnswer = data.quiz[currentQuiz].answers.filter(answer => {
        if (answer.correctness) {
            return answer
        }
    })

    const finishQuiz = () => {
        currentQuiz === 0
        navigate("/courses")
    }

    const addScore = (num) => {
        if (data.quiz[currentQuiz].answers[num].correctness === true) {
            setScore(score + 1)
        }
    }
    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <p className="flex justify-end m-3">{data.quiz[currentQuiz].level === 11 ? "準1級" : "1級"}</p>

                <p className="flex justify-end m-3">{score}問目 / {data.quiz.length} 問中</p>
                <p className="text-xl m-10 flex justify-center">{data.quiz[currentQuiz].category.description}</p>
                <p className="text-3xl m-10 flex justify-center">{data.quiz[currentQuiz].question}</p>
                <div className="flex justify-center">
                    <label htmlFor="answer1"
                           className="btn btn-wide m-10 btn-primary text-3xl"
                           onClick={() => addScore(0)}>{data.quiz[currentQuiz].answers[0].answer}</label>

                    <input type="checkbox" id="answer1" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    {data.quiz[currentQuiz].answers[0].correctness ?
                                        <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                        <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                </div>

                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.quiz[currentQuiz].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    {currentQuiz < data.quiz.length - 1 ?
                                        <div><p> </p>
                                            <label htmlFor="answer1" className="btn btn-wide btn-primary  text-2xl"
                                                   onClick={() => setCurrentQuiz(currentQuiz + 1)}>次の問題</label></div> :
                                        <div><p　className="text-3xl flex justify-center m-5">得点：{score} / {data.quiz.length} 点</p>
                                        <label
                                            htmlFor="answer1"
                                            className="btn btn-wide btn-primary  text-2xl"
                                            onClick={finishQuiz}
                                        >問題選択画面に戻る</label></div>
                                    }
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal" className="btn btn-primary"
                                                       onClick={finishQuiz}>はい</label>
                                                <label htmlFor="modal" className="btn btn-primary">いいえ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <label
                        htmlFor="answer2"
                        className="btn btn-wide m-10 btn-primary text-3xl"
                        onClick={() => addScore(1)}>
                        {data.quiz[currentQuiz].answers[1].answer}</label>

                    <input type="checkbox" id="answer2" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    {data.quiz[currentQuiz].answers[1].correctness ?
                                        <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                        <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                </div>


                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.quiz[currentQuiz].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    {currentQuiz < data.quiz.length - 1 ?
                                        <label htmlFor="answer2" className="btn btn-wide btn-primary  text-2xl"
                                               onClick={() => setCurrentQuiz(currentQuiz + 1)}>次の問題</label> :
                                        <label htmlFor="answer2" className="btn btn-wide btn-primary  text-2xl"
                                        >採点</label>}
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal2" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal2" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal2" className="btn btn-primary"
                                                       onClick={finishQuiz}>はい</label>
                                                <label htmlFor="modal2" className="btn btn-primary">いいえ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <label
                        htmlFor="answer3"
                        className="btn btn-wide m-10 btn-primary text-3xl"
                        onClick={() => addScore(2)}>
                        {data.quiz[currentQuiz].answers[2].answer}</label>

                    <input type="checkbox" id="answer3" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    {data.quiz[currentQuiz].answers[2].correctness === true ?
                                        <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                        <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                </div>

                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.quiz[currentQuiz].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    {currentQuiz < data.quiz.length - 1 ?
                                        <label htmlFor="answer3" className="btn btn-wide btn-primary  text-2xl"
                                               onClick={() => setCurrentQuiz(currentQuiz + 1)}>次の問題</label> :
                                        <label htmlFor="answer3" className="btn btn-wide btn-primary  text-2xl"
                                        >採点</label>}
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal3" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal3" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal3" className="btn btn-primary"
                                                       onClick={finishQuiz}>はい</label>
                                                <label htmlFor="modal3" className="btn btn-primary">いいえ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label
                        htmlFor="answer4"
                        className="btn btn-wide m-10 btn-primary text-3xl"
                        onClick={() => addScore(3)}>
                        {data.quiz[currentQuiz].answers[3].answer}</label>

                    <input type="checkbox" id="answer4" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center">
                                        {data.quiz[currentQuiz].answers[3].correctness === true ?
                                            <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                            <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                    </div>
                                </div>

                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.quiz[currentQuiz].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    {currentQuiz < data.quiz.length - 1 ?
                                        <label htmlFor="answer4" className="btn btn-wide btn-primary  text-2xl"
                                               onClick={() => setCurrentQuiz(currentQuiz + 1)}>次の問題</label> :
                                        <label htmlFor="answer4" className="btn btn-wide btn-primary  text-2xl"
                                        >採点</label>}
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal4" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal4" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal4" className="btn btn-primary"
                                                       onClick={finishQuiz}>はい</label>
                                                <label htmlFor="modal4" className="btn btn-primary">いいえ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    </>)
}
export default Question


