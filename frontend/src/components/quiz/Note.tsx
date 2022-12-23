import * as React from 'react'

export const Note = (props: { data: { quiz: { note: string }[] }, currentQuiz: number }) => {
  return <p
    className="text-2xl flex justify-center ">{props.data.quiz[props.currentQuiz].note ? `💡 ${props.data.quiz[props.currentQuiz].note}` : null}</p>
}