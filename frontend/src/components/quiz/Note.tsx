import * as React from 'react'
import { FC } from 'react'

type Props = {
  data: { quiz: { note: string } }
  currentQuiz: number
}

export const Note: FC<Props> = ({data, currentQuiz}) => {
  return <p
    className="text-2xl flex justify-center ">{data.quiz[currentQuiz].note ? `💡 ${data.quiz[currentQuiz].note}` : null}</p>
}