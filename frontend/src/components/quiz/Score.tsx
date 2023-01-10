import * as React from 'react'
import { FC } from 'react'
import { QuestionType } from '../../namespace'

type Props = {
  score: number
  data: { quiz: QuestionType }
}

export const Score: FC<Props> = ({score, data: {quiz}}) => {
  return <p className="text-3xl flex justify-center m-5">得点：{score} / {quiz.length} 点</p>
}