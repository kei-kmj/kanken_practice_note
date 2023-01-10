import * as React from 'react'
import { FC } from 'react'

type Props = {
  onClick: () => void
}
export const StartButton:FC<Props> = ({ onClick}) => {
  return <div className="flex justify-center m-8">
    <button className="punipuni text-pink-100 font-bold opacity-90"
            onClick={onClick}>始める
    </button>
  </div>
}