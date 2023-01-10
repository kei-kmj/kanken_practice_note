import * as React from 'react'
import { FC } from 'react'

type Props = {
  answer: { id: string }
  onClick: () => void
}

export const NextQuiz: FC<Props> = ({answer: {id}, onClick}) => {
  return (<>
    <div className="flex justify-center"><label
      htmlFor={id}
      className="btn btn-wide btn-primary text-2xl"
      onClick={onClick}>次の問題</label>
    </div>
  </>)
}