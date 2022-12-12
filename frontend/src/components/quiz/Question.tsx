import * as React from 'react'

export const Question = (props: { currentQuiz: number, data: { quiz: string | any[] } }) => {
  return <>
    <div className="card quiz mx-auto items-center image-full mt-24">
      <div className="indicator">
        <div className="indicator-item indicator-top">
          <p className="level">{props.data.quiz[props.currentQuiz].level === 11 ? '準1級' : '1級'}</p>
        </div>
        {/*<figure><img className="w-96" src={frame} alt={frame}/></figure>*/}
        <div className="card-body quiz">
        {/*<span*/}
        {/*  className="flex justify-end badge badge-lg text-xl mr-3">{props.data.quiz[props.currentQuiz].level === 11 ? '準1級' : '1級'}</span>*/}
          <p className="flex justify-end mb-8">{props.currentQuiz + 1}問目 / {props.data.quiz.length} 問中</p>

          <p className="text-2xl m-3 flex justify-center">{props.data.quiz[props.currentQuiz].category.description}</p>
          <p className="text-3xl mt-3 flex justify-center">{props.data.quiz[props.currentQuiz].question}</p>
        </div>
      </div>
    </div>
  </>
}