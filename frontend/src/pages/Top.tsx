import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { StartButton } from '../components/topPage/StartButton'
import { deleteAll } from '../hooks/useLocalStrage'
import { Guidance } from '../components/topPage/Guidance'
import { Footer } from '../components/shared/Footer'
import { ConfirmationModal } from '../components/shared/ConfirmationModal'
import { Header } from '../components/shared/Header'
import logo from '../../public/logo.png'
import icon from '../../public/charactor/icon.png'
import questioningGuide from '../../public/guidance/questioningGuide.png'
import choiceGuide from '../../public/guidance/choiceGuide.png'
import repeatGuide from '../../public/guidance/repeatGuide.png'
import './Top.css'

export const Top: React.FC = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/courses')
  }

  return (<>
    <Header pageTitle="漢検練習帳" title="クイズで漢検学習！" description="漢字検定1級・準1級範囲の漢字を4択クイズで学習するアプリです"/>
    <div className="flex flex-col min-h-screen sticky top-0">
      <main className="flex-grow">
        <div className="flex justify-center items-center m-8">
          <img className="w-16" src={icon} alt={icon}/>
          <img className="w-96" src={logo} alt={logo}/>
        </div>
        <h3 className="text-xl flex justify-center mt-10">漢字検定1級・準1級範囲の漢字を</h3>
        <h3 className="text-xl flex justify-center mt-1">4択クイズで学習するアプリです</h3>
        <p className="flex justify-center mt-5">（1級は準備中です）</p>
        <StartButton onClick={handleStart}/>

        <div className="flex justify-center ">
          <Guidance guidance="級と分野を選んで" src={choiceGuide}/>
        </div>
        <div className="flex justify-center mt-8">
          <Guidance guidance="クイズで学習！" src={questioningGuide}/>
        </div>
        <div className="flex justify-center mt-8">
          <Guidance guidance="チェックした問題を何度も復習" src={repeatGuide}/>
        </div>

        <StartButton onClick={handleStart}/>

        <div className="flex justify-end">
          <label htmlFor="my-modal" className="btn text-gray-400 btn-link m-8">復習データを消す</label>
          <ConfirmationModal id="my-modal" confirmation="本当に復習データを消しますか？" unrecoverable="一度消すと元に戻せません"
                             onClick={deleteAll}/>
        </div>
      </main>
      <Footer/>
    </div>
  </>)
}


