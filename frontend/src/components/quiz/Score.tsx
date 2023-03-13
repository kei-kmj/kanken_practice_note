import * as React from 'react'
import { FC } from 'react'
import { QuestionType } from '../../types/quizTypes'
import './Score.css'

type Props = {
  score: number
  data: { quiz: QuestionType }
}

export const Score: FC<Props> = ({score, data: {quiz}}) => {
  return (<>
    <div className="hitokoto">
      <span className="hitokoto-circle1">得</span><span className="hitokoto-circle2">点</span>
      <p className="text-3xl flex justify-center m-5">{score} / {quiz.length} 点</p>
    </div>


  </>)
}