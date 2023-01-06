import { FC } from 'react'
import * as React from 'react'

type Props = {
  id:string
  onClick: () => void
  confirmation:string
  unrecoverable:string
}

export const ConfirmationModal:FC<Props> = ({ id,onClick, confirmation,unrecoverable}) => {
  return <>
    <input type="checkbox" id={id} className="modal-toggle"/>
    <div className="modal">
      <div className="modal-box">
        <p className="font-bold text-lg">{confirmation}</p>
        <p className="font-bold text-lg">{unrecoverable}</p>
        <div className="modal-action">

          <label htmlFor={id} className="btn btn-info" onClick={onClick}>はい</label>
          <label htmlFor={id} className="btn btn-info">いいえ</label>
        </div>
      </div>
    </div>
  </>
}