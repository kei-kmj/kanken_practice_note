import React from 'react'
import {Link} from 'react-router-dom';

const Support = (): JSX.Element => {
    return (
        <>
            <h1 className="text-4xl">Google Form</h1>
            <div className="grid grid-flow-col gap-4 link text-4xl m-5">
                <Link to="/vite-dev">トップ画面に戻る</Link>
            </div>
        </>)

}
export default Support


