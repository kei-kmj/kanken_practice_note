import React from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import correct from '../../public/correct.png'
import incorrect from '../../public/incorrect.png'

const Answer = (): JSX.Element => {
    const navigate = useNavigate()

    const nextQuestion = () => {
        navigate("/question")
    }

    const quiteQuestion = () => {
        navigate("/courses")
    }
    return (
        <>
            <div>
                <div className="flex justify-center">
                    <img className="object-scale-down h-32 w-48 ... " src={correct} alt="correct"/>
                    <p className="text-3xl text-blue-600 flex justify-center m-5 ">正解！</p>

                </div>
                <div className="flex justify-center">
                    <img className="object-scale-down h-32 w-48 ... " src={incorrect} alt="incorrect"/>
                    <p className="text-3xl text-red-600 flex justify-center m-5 ">残念！</p>
                </div>
                <p className="text-3xl flex justify-center m-5 "> きゅうしゃ</p>

                <p className="text-xl flex justify-center m-5">解説：～～～～～～～～～～～～</p>
                <label className="flex m-3 justify-end">
                    <input type="checkbox" name="radio-5"/>
                    <span className="button ">復習する</span>
                </label>
                <div className="flex justify-center m-8">
                    <button className="btn btn-wide btn-primary  text-2xl"
                            onClick={nextQuestion}>次の問題
                    </button>
                </div>
                <div className="flex justify-end">
                    <label htmlFor="my-modal" className="btn btn-link">問題選択画面に戻る</label>

                    <input type="checkbox" id="my-modal" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
                            <div className="modal-action">

                                <label htmlFor="my-modal" className="btn btn-primary" onClick={quiteQuestion}>はい</label>
                                <label htmlFor="my-modal" className="btn btn-primary">いいえ</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Answer


