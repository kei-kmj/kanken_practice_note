import * as React from 'react'
import './Question.css'
import { FC } from 'react'

type Props = {
  answer: { id: string; answer: string }
  onClick: () => void
}

export const Alternatives: FC<Props> = ({answer: {id, answer}, onClick}) => {
  return <label htmlFor={id}
                className="btn answer btn-wide btn-primary"
                onClick={onClick}>{answer}</label>
}