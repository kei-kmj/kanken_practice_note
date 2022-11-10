import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Footer from "../components/Footer";
import {useNavigate, useLocation} from "react-router-dom";


const Question = (): JSX.Element => {
    const navigate = useNavigate()
    const location = useLocation()

    const [data, setData] = useState<{ data }>(location.state as { data })

    const correctAnswer = data.data[0].answers.filter(answer => {
        if (answer.correctness) {
            return answer
        }
    })

    const nextQuestion = () => {
        navigate("/questions")
    }

    const quiteQuestion = () => {
        navigate("/courses")
    }


    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <p className="flex justify-end m-3">{data.data[0].level === 11 ? "準1級" : "1級"}</p>
                <p className="text-xl m-10 flex justify-center">{data.data[0].category.description}</p>
                <p className="text-3xl m-10 flex justify-center">{data.data[0].question}</p>
                <div className="flex justify-center">
                    <label htmlFor="answer1"
                           className="btn btn-wide m-10 btn-primary text-3xl">{data.data[0].answers[0].answer}</label>

                    <input type="checkbox" id="answer1" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    {data.data[0].answers[0].correctness ?
                                        <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                        <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                </div>

                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.data[0].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    <label htmlFor="answer1" className="btn btn-wide btn-primary  text-2xl"
                                           onClick={nextQuestion}>次の問題</label>
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal" className="btn btn-primary"
                                                       onClick={quiteQuestion}>はい</label>
                                                <label htmlFor="modal" className="btn btn-primary">いいえ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <label htmlFor="answer2"
                           className="btn btn-wide m-10 btn-primary text-3xl">{data.data[0].answers[1].answer}</label>

                    <input type="checkbox" id="answer2" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    {data.data[0].answers[1].correctness ?
                                        <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                        <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                </div>


                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.data[0].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    <label htmlFor="answer2" className="btn btn-wide btn-primary  text-2xl"
                                           onClick={nextQuestion}>次の問題</label>
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal2" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal2" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal2" className="btn btn-primary"
                                                       onClick={quiteQuestion}>はい</label>
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
                    <label htmlFor="answer3"
                           className="btn btn-wide m-10 btn-primary text-3xl">{data.data[0].answers[2].answer}</label>

                    <input type="checkbox" id="answer3" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    {data.data[0].answers[2].correctness === true ?
                                        <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                        <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                </div>

                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.data[0].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    <label htmlFor="answer3" className="btn btn-wide btn-primary  text-2xl"
                                           onClick={nextQuestion}>次の問題</label>
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal3" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal3" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal3" className="btn btn-primary"
                                                       onClick={quiteQuestion}>はい</label>
                                                <label htmlFor="modal3" className="btn btn-primary">いいえ</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <label htmlFor="answer4"
                           className="btn btn-wide m-10 btn-primary text-3xl">{data.data[0].answers[3].answer}</label>

                    <input type="checkbox" id="answer4" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <div>
                                <div className="flex justify-center">
                                    <div className="flex justify-center">
                                        {data.data[0].answers[3].correctness === true ?
                                            <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p> :
                                            <p className="text-3xl text-red-600 flex justify-center m-5 ">不正解！</p>}
                                    </div>
                                </div>

                                <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                                <p className="text-xl flex justify-center m-5">{data.data[0].note}</p>
                                <label className="flex m-3 justify-end">
                                    <input type="checkbox" name="radio-5"/>
                                    <span className="button ">復習する</span>
                                </label>
                                <div className="modal-action flex justify-center m-8">
                                    <label htmlFor="answer4" className="btn btn-wide btn-primary  text-2xl"
                                           onClick={nextQuestion}>次の問題</label>
                                </div>

                                <div className="flex justify-end">
                                    <label htmlFor="modal4" className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

                                    <input type="checkbox" id="modal4" className="modal-toggle"/>
                                    <div className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                                            <div className="modal-action">

                                                <label htmlFor="modal4" className="btn btn-primary"
                                                       onClick={quiteQuestion}>はい</label>
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


