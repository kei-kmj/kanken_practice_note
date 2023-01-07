import * as React from 'react'
import question from '../../../public/charactor/questioning.png'
import { LEVEL } from '../../constants'
import { FC } from 'react'

type Props = {
  currentQuiz: number
  data: { quiz: string | string[] }
}

export const Question:FC<Props> = ({ currentQuiz, data: { quiz } }) => {
  return (<>
    <div className="card quiz mx-auto items-center image-full">
      <div className="indicator">
        <div className="indicator-item indicator-top">
          <p className="level text-xs mr-8">{quiz[currentQuiz].level.toString() === LEVEL.SEMI_FIRST ? '準1級' : '1級'}</p>
        </div>
        <div className="indicator-item indicator-middle indicator-start">
          <img className="w-24 ml-4" src={question} alt={question} />
        </div>

        <div className="card-body quiz">

          <p className="flex justify-end mb-2">{currentQuiz + 1}問目 / {quiz.length} 問中</p>

          <p className="text-l m-1 flex justify-center">{quiz[currentQuiz].category.description}</p>
          <p className="text-xl mt-1 flex justify-center">{quiz[currentQuiz].question}</p>
        </div>
      </div>
    </div>
  </>)
}