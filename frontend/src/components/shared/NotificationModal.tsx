import * as React from 'react'
import { FC } from 'react'

type Props = {
  notice: string
}
export const NotificationModal:FC<Props> = ({notice}) => {
  const closeModal = () => {
    window.notification.close()
  }

  return <div onClick={closeModal}>
    <dialog id="notification" className="modal">
      <div className="modal-background">
        <form method="dialog" className="modal-box w-60">
          <p className="font-bold text-lg">{notice}</p>
          <div className="modal-action">
            <button className="btn btn-success" onClick={closeModal}>閉じる</button>
          </div>
        </form>
      </div>
    </dialog>
  </div>
}
