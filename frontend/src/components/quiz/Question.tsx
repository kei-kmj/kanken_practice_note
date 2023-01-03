import * as React from 'react'
import question from '../../../public/question.png'

export const Question = (props: { currentQuiz: number, data: { quiz: string | any[] } }) => {
  return (<>
    <div className="card quiz mx-auto items-center image-full mt-12">
      <div className="indicator">
        <div className="indicator-item indicator-top">
          <p className="level">{props.data.quiz[props.currentQuiz].level === 11 ? '準1級' : '1級'}</p>
        </div>
        <div className="indicator-item indicator-middle indicator-start">
          <img className="w-36" src={question} alt={question} />
        </div>

        <div className="card-body quiz">

          <p className="flex justify-end mb-8">{props.currentQuiz + 1}問目 / {props.data.quiz.length} 問中</p>

          <p className="text-2xl m-3 flex justify-center">{props.data.quiz[props.currentQuiz].category.description}</p>
          <p className="text-3xl mt-3 flex justify-center">{props.data.quiz[props.currentQuiz].question}</p>
        </div>
      </div>
    </div>
  </>)
}