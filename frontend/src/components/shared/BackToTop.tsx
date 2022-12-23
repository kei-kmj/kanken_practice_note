import { Link } from 'react-router-dom'
import * as React from 'react'

export const BackToTop:React.FC = () => {
  return <div className="grid grid-flow-col gap-4 link flex justify-end m-5">
    <Link to="/">トップ画面に戻る</Link>
  </div>
}