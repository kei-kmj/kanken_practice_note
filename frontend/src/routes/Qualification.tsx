import * as React from 'react'
import { Link } from 'react-router-dom'

const Qualification = () => {
  return (
    <>
      <h1 className="text-4xl">漢検の合格を保証しません</h1>
      <div className=" text-4xl grid grid-flow-col gap-4 link m-5">
        <Link to="/vite-dev">トップ画面に戻る</Link>
      </div>

    </>)
}
export default Qualification
