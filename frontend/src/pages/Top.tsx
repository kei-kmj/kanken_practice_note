import * as React from 'react'
import { Footer } from '../components/shared/Footer'
import { deleteAll } from '../hooks/useLocalStrage'
import { ConfirmationModal } from '../components/shared/ConfirmationModal'
import { useNavigate } from 'react-router-dom'
import logo from '../../public/logo.png'
import icon from '../../public/charactor/icon.png'
import questioningGuide from '../../public/guide/questioningGuide.png'
import choiceGuide from '../../public/guide/choiceGuide.png'
import repeatGuide from '../../public/guide/repeatGuide.png'
import './top.css'

function StartButton (props: { onClick: () => void }) {
  return <div className="flex justify-center m-8">
    <button className="punipuni text-pink-100 font-bold opacity-90"
            onClick={props.onClick}>始める
    </button>
  </div>
}

export const Top: React.FC = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/courses')
  }

  return (<>
    <div className="flex flex-col min-h-screen sticky top-0">
      <main className="flex-grow">
        <div className="flex justify-center items-center m-8">
          <img className="w-16" src={icon} alt={icon}/>
          <img className="w-96" src={logo} alt={logo}/>
        </div>
        <h3 className="text-xl flex justify-center m-10">漢字検定1級・準1級範囲の漢字を 4択クイズで学習するアプリです</h3>
        <p className="flex justify-center">（1級は準備中です）</p>
        <StartButton onClick={handleStart}/>
        <div className="flex justify-center">
          <div>
            <p className="flex justify-center">級と分野を選んで</p>
            <img className="card w-60 h-72" src={choiceGuide} alt={choiceGuide}/>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div>
            <p className="flex justify-center">クイズで学習！</p>
            <img className="card w-60 h-72" src={questioningGuide} alt={questioningGuide}/>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <div>
            <p className="flex justify-center">チェックした問題だけを復習できる！</p>
            <img className="card w-60 h-72" src={repeatGuide} alt={repeatGuide}/>
          </div>
        </div>

        <StartButton onClick={handleStart}/>

        <div className="flex justify-end">
          <label htmlFor="my-modal" className="btn text-gray-400 btn-link m-8">復習データを消す</label>

          <ConfirmationModal id="my-modal" confirmation="本当に復習データを消しますか？" unrecoverable="一度消すと元に戻せません"
                             onClick={deleteAll}/>
        </div>
      </main>
      <Footer/></div>
  </>)
}
