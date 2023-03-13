import * as React from 'react'
import { FC } from 'react'
import { ConfirmationModal } from '../shared/ConfirmationModal'

type Props = {
  answer: { id: string }
  onClick: () => void
}

export const AbortConfirm: FC<Props> = ({answer: {id}, onClick}) => {
  return (<>
    <div className="flex justify-end">
      <label htmlFor={`break${id}`}
             className="btn text-gray-400 btn-link text-base">問題選択画面に戻る</label>
      <ConfirmationModal id={`break${id}`} onClick={onClick} confirmation={"本当に問題選択画面に戻りますか？"} unrecoverable={""}/>
    </div>
  </>)
}