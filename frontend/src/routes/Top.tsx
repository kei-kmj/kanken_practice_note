import React from 'react'
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Top = (): JSX.Element => {
    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h1 className="text-3xl ">( ..)φ 漢検練習帳</h1>

                <h3 className="text-xl">漢字検定1級・準1級範囲の漢字を 4択クイズで学習するアプリです</h3>
                <p>（1級は準備中です）</p>

                <Link to="/courses">学習する</Link>
                <div>
                    <button>復習データを消す</button>
                </div>
                <p>~~~~</p>
                <p>説明画像📸</p>
                <p>~~~~</p>
            </main>

            <Footer/></div>
    </>)
}
export default Top


