import * as React from 'react'
import { FC } from 'react'
import { QuestionType } from '../../types/quizTypes'
import question from '../../../public/charactor/questioning.png'
import { LEVEL } from '../../constants'
import './Question.css'

type Props = {
  currentQuiz: number
  data: { quiz: QuestionType }
}

export const Question: FC<Props> = ({currentQuiz, data: {quiz}}) => {
  return (<>
    <div className="card quiz mx-auto items-center">
      <div className="card-body quiz">
        <p
          className="level text-accent text-xs">{quiz[currentQuiz].level.toString() === LEVEL.SEMI_FIRST ? '準1級' : '1級'}</p>
        <img className="question w-10" src={question} alt="question" />
        <div className="card-body quiz">

          <p className="flex justify-end mt-3">{currentQuiz + 1}問目 / {quiz.length} 問中</p>

          <p className="text-l flex justify-center">{quiz[currentQuiz].category.description}</p>
          <p className="text-xl flex justify-center">{quiz[currentQuiz].question}</p>
        </div>
      </div>
    </div>
  </>)
}