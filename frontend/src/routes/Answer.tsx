import React from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from "react-router-dom";

const Answer = (): JSX.Element => {
    const navigate = useNavigate()

    const nextQuestion = () => {
        navigate("/question")
    }
    return (
        <>
            <div>

                <p className="text-3xl text-red-600 flex justify-center m-5 ">正解！</p>
                <p className="text-3xl flex justify-center m-5 "> きゅうしゃ</p>

                <p className="text-xl flex justify-center m-5">解説：～～～～～～～～～～～～</p>
                <label className="flex m-3 justify-end">
                    <input type="checkbox" name="radio-5"/>
                    <span className="button ">復習する</span>
                </label>
                <div className="flex justify-center m-8">
                    <button className="btn btn-wide btn-primary  text-2xl"
                            onClick={nextQuestion}>次の問題</button>
                </div>
                <div className="grid grid-flow-col gap-4 link flex justify-end m-5">
                    <Link to="/courses">問題選択画面に戻る</Link>
                </div>
            </div>
        </>
    )
}
export default Answer


