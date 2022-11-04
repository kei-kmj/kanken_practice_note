import React from 'react'
import {useNavigate, Link} from "react-router-dom";
import Footer from "../components/Footer";

const Courses = (): JSX.Element => {
    const navigate = useNavigate()
    const allQuizStart = () => {
            navigate("/question")
        }

    ;
    const repeatQuizStart = () => {
            navigate("/question")
        }
    ;
    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h3>( ..)φ 漢検練習帳</h3>

                <div>
                    <p className="text-xl flex justify-center m-5">級を選んでください</p>

                    <label>
                        <input type="radio" name="radio-1"/>
                        <span className="button">準1級</span>
                    </label>
                    <label>
                        <input type="radio" name="radio-1"/>
                        <span className="button">1級</span>
                    </label>
                </div>

                <div>
                    <div>
                        <p className="text-xl flex justify-center m-5">分野を選んでください</p>
                        <label>
                            <input type="radio" name="radio-2"/>
                            <span className="button">全分野</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="radio-2"/>
                            <span className="button">読み</span>
                        </label>
                        <label>
                            <input type="radio" name="radio-2"/>
                            <span className="button">書き</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="radio-2"/>
                            <span className="button">四字熟語（書き）</span>
                        </label>
                        <label>
                            <input type="radio" name="radio-2"/>
                            <span className="button">四字熟語（読み）</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" name="radio-2"/>
                            <span className="button">故事成語・諺</span>
                        </label>
                        <label>
                            <input type="radio" name="radio-2"/>
                            <span className="button">対義語・類義語</span>
                        </label>
                    </div>

                </div>
                <p className="text-xl flex justify-center m-5 ">新規又は復習を選んでください</p>
                <div className="flex justify-center">


                    <button className="btn btn-wide m-3 btn-primary" onClick={allQuizStart}>新規</button>
                    <button className="btn btn-wide m-3 btn-primary" onClick={repeatQuizStart}>復習</button>
                </div>
                <p className="text-l flex justify-center m-5">選んだ分野のすべての問題から出題されます 「復習する」にチェックした問題から出題されます</p>

            </main>

            <Footer/>

        </div>
    </>)
}
export default Courses


