import * as React from 'react'
import { FC } from 'react'

type Props = {
  answer: { id: string }
  onClick: () => void
}

export const EndOfQuiz: FC<Props> = ({answer: {id}, onClick}) => {
  return (<>
    <div className="flex justify-center"><label
      htmlFor={`quit${id}`}
      className="btn btn-wide btn-primary text-2xl"
      onClick={onClick}
    >問題選択画面に戻る</label></div>
  </>)
}