import * as React from 'react'
import { Footer } from '../components/shared/Footer'
import { useNavigate } from 'react-router-dom'
import logo from '../../public/logo.png'
import icon3 from '../../public/usaben.png'

export const LOCAL_STORAGE_DATA = {
  KEY: 'kankenApp_repeatItemID'
}

export const Top:React.FC = () => {
  const navigate = useNavigate()
  const start = () => {
    navigate('/courses')
  }
  const deleteAll = () => {
    for (const key in localStorage) {
      if (key.startsWith(LOCAL_STORAGE_DATA.KEY)) {
        localStorage.removeItem(key)
      }
    }
  }

  return (<>
    <div className="flex flex-col min-h-screen sticky top-0">
      <main className="flex-grow">
        <div className="flex justify-center items-center m-20">
           <img className="w-16" src={icon3} alt={icon3} />
          <img className="w-96" src={logo} alt={logo} />
        </div>
        <h3 className="text-xl flex justify-center m-10">漢字検定1級・準1級範囲の漢字を 4択クイズで学習するアプリです</h3>
        <p className="flex justify-center">（1級は準備中です）</p>
        <div className="flex justify-center m-8">
          <button className="btn btn-wide btn-primary  text-2xl m-10"
                  onClick={start}>始める
          </button>
        </div>
        <div className="flex justify-center">
          <div className="card w-52">
            <div className="card-body">
              <p>クイズで漢字学習！</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
          </div>
          <div className="card w-52 ml-2">
            <div className="card-body">
              <p>得点をチェック！</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
          </div>
          <div className="card w-52 ml-2">
            <div className="card-body">
              <p>苦手な問題を復習！</p>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <label htmlFor="my-modal" className="btn text-gray-400 btn-link m-8">復習データを消す</label>

          <input type="checkbox" id="my-modal" className="modal-toggle"/>
          <div className="modal">
            <div className="modal-box">
              <p className="font-bold text-lg">本当に復習データを消しますか？</p>
              <p className="font-bold text-lg">一度消すと元に戻せません</p>
              <div className="modal-action">

                <label htmlFor="my-modal" className="btn btn-info" onClick={deleteAll}>はい</label>
                <label htmlFor="my-modal" className="btn btn-info">いいえ</label>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/></div>
  </>)
}
