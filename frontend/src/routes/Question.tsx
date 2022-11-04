import React from 'react'
import {Link} from 'react-router-dom';
import Footer from "../components/Footer";

const Question = (): JSX.Element => {
    return (<>
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <p>準1級</p>
                <p>問題：【 】内の漢字の読みを答えよ</p>
                <p>【厩舎】を掃除する</p>
                <div>
                    <Link to="/answer">かわや</Link>
                    <Link to="/answer"> きゅうしゃ</Link>
                </div>
                <div>
                    <Link to="/answer">げいしゃ</Link>
                    <Link to="/answer"> がいや</Link>
                </div>
            </main>
            <Footer/>
        </div>
    </>)
}
export default Question


