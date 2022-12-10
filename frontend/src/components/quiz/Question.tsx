import * as React from 'react'

export const Question = (props: { currentQuiz: number, data: { quiz: string | any[] } }) => {
  return <>
    <p className="flex justify-end text-xl m-3">{props.data.quiz[props.currentQuiz].level === 11 ? '準1級' : '1級'}</p>
    <p className="flex justify-end text-xl m-3">{props.currentQuiz + 1}問目 / {props.data.quiz.length} 問中</p>
    <p className="text-xl m-6 flex justify-center">{props.data.quiz[props.currentQuiz].category.description}</p>
    <p className="text-3xl m-6 flex justify-center">{props.data.quiz[props.currentQuiz].question}</p>
  </>
}