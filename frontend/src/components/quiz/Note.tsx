import * as React from 'react'
import { FC } from 'react'
import { QuestionType } from '../../namespace'

type Props = {
  data: { quiz: QuestionType }
  currentQuiz: number
}

export const Note: FC<Props> = ({data, currentQuiz}) => {
  return <p
    className="flex justify-center">{data.quiz[currentQuiz].note ? `💡 ${data.quiz[currentQuiz].note}` : null}</p>
}