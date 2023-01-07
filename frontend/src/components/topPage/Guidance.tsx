import * as React from 'react'
import { FC } from 'react'
import questioningFaceIcon from '../../../public/charactor/questioningFace.png'

type Props = {
  guidance: string
  src: string
}

export const Guidance: FC<Props> = ({guidance, src}) => {
  return (<>
    <div className="flex flex-col">
      <div className="chat chat-start">
        <img className="w-12" src={questioningFaceIcon} alt={questioningFaceIcon}/>
        <div className="chat-bubble text-sm">{guidance}</div>
      </div>
      <div>
        <img className="card w-60 h-72" src={src} alt={src}/>
      </div>
    </div>
  </>)
}