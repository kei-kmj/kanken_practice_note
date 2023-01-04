import * as React from 'react'
import { FC } from 'react'

type Props = {
  answer: { id: string }
  onClick: () => void
}


export const AbortConfirm:FC<Props> = ({ answer: { id }, onClick }) => {
  return (<>
    <div className="flex justify-end">
      <label htmlFor={`break${id}`}
             className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

      <input type="checkbox" id={`break${id}`} className="modal-toggle"/>
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
          <div className="modal-action">

            <label htmlFor={`break${id}`} className="btn btn-info"
                   onClick={onClick}>はい</label>
            <label htmlFor={`break${id}`}
                   className="btn btn-info">いいえ</label>
          </div>
        </div>
      </div>
    </div>
  </>)
}