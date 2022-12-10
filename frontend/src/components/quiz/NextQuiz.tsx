import * as React from 'react'

export const NextQuiz = (props: { answer: { id?: string; answer?: string; correctness: boolean }, onClick: () => void }) => {
  return <div className="flex justify-center"><label
    htmlFor={props.answer.id}
    className="btn btn-wide btn-primary text-2xl"
    onClick={props.onClick}>次の問題</label></div>
}