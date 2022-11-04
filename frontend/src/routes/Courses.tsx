import React from 'react'
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

const Courses = (): JSX.Element => {
    return (<>
        <h3>( ..)φ 漢検練習帳</h3>

        <div>
            <p>級を選んでください</p>

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
                <p>分野を選んでください</p>
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
        <div>
            <p>新規又は復習を選んでください</p>
            <Link to="/question">新規</Link>
            <Link to="/question"> 復習</Link>
            <p>選んだ分野のすべての問題から出題されます 「復習する」にチェックした問題から出題されます</p>
        </div>

        <Footer />


    </>)
}
export default Courses


