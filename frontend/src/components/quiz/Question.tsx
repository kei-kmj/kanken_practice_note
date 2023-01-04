import * as React from 'react'
import question from '../../../public/question.png'
import { LEVEL } from '../../constants'
import { FC } from 'react'

type Props = {
  currentQuiz: number
  data: { quiz: string | string[] }
}

export const Question:FC<Props> = ({ currentQuiz, data: { quiz } }) => {
  return (<>
    <div className="card quiz mx-auto items-center image-full mt-12">
      <div className="indicator">
        <div className="indicator-item indicator-top">
          <p className="level">{quiz[currentQuiz].level.toString() === LEVEL.SEMI_FIRST ? '準1級' : '1級'}</p>
        </div>
        <div className="indicator-item indicator-middle indicator-start">
          <img className="w-36" src={question} alt={question} />
        </div>

        <div className="card-body quiz">

          <p className="flex justify-end mb-8">{currentQuiz + 1}問目 / {quiz.length} 問中</p>

          <p className="text-2xl m-3 flex justify-center">{quiz[currentQuiz].category.description}</p>
          <p className="text-3xl mt-3 flex justify-center">{quiz[currentQuiz].question}</p>
        </div>
      </div>
    </div>
  </>)
}