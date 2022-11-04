import React from 'react'
import {Link} from "react-router-dom";

const Qualification = (): JSX.Element => {
    return (
        <>
            <h2>漢検の合格を保証しません</h2>
            <div className="grid grid-flow-col gap-4 link">
                <Link to="/vite-dev">トップ画面に戻る</Link>
            </div>

        </>)
}
export default Qualification


