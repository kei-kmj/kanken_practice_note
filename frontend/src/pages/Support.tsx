import * as React from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/shared/Footer'

export const Support = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex justify-center flex-1 top-0 m-10">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd-Vprh4DyE9e_8UwPtZWIaT2iYdMXQ6Dpof8MudPfYvYElCw/viewform?embedded=true"
            width="640" height="796" frameBorder="0">読み込んでいます…
          </iframe>
        </div>
        <div className="flex justify-end m-8 link">
          <Link to="/">トップ画面に戻る</Link>
        </div>
        <Footer/>
      </div>
    </>
  )
}
