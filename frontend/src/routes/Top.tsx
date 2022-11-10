import React from 'react'
import Footer from "../components/Footer";
import {useNavigate} from "react-router-dom";
import logo from '../../public/img.png'
import chara from '../../public/img_1.png'

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
                <div className="flex justify-center items-center m-8">
                    <img className="w-24" src={chara} alt={chara}/>
                    <img className="w-72" src={logo} alt={logo}/>
                </div>
                <h3 className="text-xl flex justify-center m-10">漢字検定1級・準1級範囲の漢字を 4択クイズで学習するアプリです</h3>
                <p className="flex justify-center">（1級は準備中です）</p>
                <div className="flex justify-center m-8">
                    <button className="btn btn-wide btn-primary  text-2xl m-10"
                            onClick={start}>始める
                    </button>
                </div>

                <div className="flex justify-end">
                    <label htmlFor="my-modal" className="btn text-gray-400 btn-link">復習データを消す</label>

                    <input type="checkbox" id="my-modal" className="modal-toggle"/>
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">本当に復習データを消していいですか？</h3>
                            <div className="modal-action">

                                <label htmlFor="my-modal" className="btn btn-primary" onClick={deleteAll}>はい</label>
                                <label htmlFor="my-modal" className="btn btn-primary">いいえ</label>
                            </div>
                        </div>
                    </div>
                </div>


                <p className="flex justify-center">~~~~</p>
                <p className="flex justify-center">説明画像📸</p>
                <p className="flex justify-center">~~~~</p>

            </main>

            <Footer/></div>
    </>)
}
export default Top


