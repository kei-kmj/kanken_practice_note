import * as React from 'react'


export const AbortConfirm = (props: { answer: { id?: string; answer?: string; correctness: boolean }, onClick: () => void }) => {
  return <div className="flex justify-end">
    <label htmlFor={`break${props.answer.id}`}
           className="btn text-gray-400 btn-link">問題選択画面に戻る</label>

    <input type="checkbox" id={`break${props.answer.id}`} className="modal-toggle"/>
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">本当に問題選択画面に戻りますか？</h3>
        <div className="modal-action">

          <label htmlFor={`break${props.answer.id}`} className="btn btn-info"
                 onClick={props.onClick}>はい</label>
          <label htmlFor={`break${props.answer.id}`}
                 className="btn btn-info">いいえ</label>
        </div>
      </div>
    </div>
  </div>
}