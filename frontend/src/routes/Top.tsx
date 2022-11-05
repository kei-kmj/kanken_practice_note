import React from 'react'
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";

const Top = (): JSX.Element => {
    const navigate = useNavigate()
    const start = () => {
        navigate("/courses")
    }
    const deleteAll = () => {
        localStorage.removeItem("repeatItemID")
    }

    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h1 className="text-3xl ">( ..)φ 漢検練習帳</h1>

                <h3 className="text-xl flex justify-center m-10">漢字検定1級・準1級範囲の漢字を 4択クイズで学習するアプリです</h3>
                <p className="flex justify-center">（1級は準備中です）</p>
                <div className="flex justify-center m-8">
                    <button className="btn btn-wide btn-primary  text-2xl m-10"
                            onClick={start}>始める
                    </button>
                </div>
                <div className="flex justify-end m-3">
                    <button className="btn btn-active btn-link" onClick={deleteAll}>復習データを消す</button>
                </div>
                <p className="flex justify-center">~~~~</p>
                <p className="flex justify-center">説明画像📸</p>
                <p className="flex justify-center">~~~~</p>

            </main>

            <Footer/></div>
    </>)
}
export default Top


