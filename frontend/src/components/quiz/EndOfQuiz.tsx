import * as React from 'react'

export const EndOfQuiz = (props: { answer: { id?: string; answer?: string; correctness: boolean }, onClick: () => void }) => {
  return (<>
    <div className="flex justify-center"><label
      htmlFor={`quit${props.answer.id}`}
      className="btn btn-wide btn-primary text-2xl"
      onClick={props.onClick}
    >問題選択画面に戻る</label></div>
  </>)
}