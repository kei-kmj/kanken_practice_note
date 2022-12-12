import * as React from 'react'
import './Question.css'

export const Alternatives = (props: { answer: { id?: string; answer?: string; correctness: boolean }, onClick: () => void }) => {
  return <label htmlFor={props.answer.id}
                className="btn answer btn-wide btn-primary"
                onClick={props.onClick}>{props.answer.answer}</label>
}