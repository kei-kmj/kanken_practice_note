import React from 'react'
import {Link} from 'react-router-dom';

const Answer = (): JSX.Element => {
    return (
        <>
            <div>

                <p>正解！　きゅうしゃ</p>

                <p>解説：～～～～～～～～～～～～</p>
                <label>
                    <input type="checkbox" name="radio-5"/>
                    <span className="button">復習する</span>
                </label>
                <div>
                    <Link to="/question">次の問題</Link>
                </div>
                <div>
                    <Link to="/courses">問題選択画面に戻る</Link>
                </div>
            </div>
        </>)
}
export default Answer


