import React from 'react'
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Top = (): JSX.Element => {
    return (<>
        <h1>( ..)φ 漢検練習帳</h1>
        <h3>漢字検定1級・準1級範囲の漢字を 4択クイズで学習するアプリです。</h3>
        <p>（1級は準備中です）</p>

        <Link to="/courses">学習する</Link>
        <div>
            <button>復習データを消す</button>
        </div>
        <p>~~~~</p>
        <p>説明画像📸</p>
        <p>~~~~</p>

        <Footer/></>)
}
export default Top


