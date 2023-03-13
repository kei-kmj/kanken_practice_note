import * as React from 'react'
import { FC } from 'react'
import questioningFaceIcon from '../../../public/charactor/questioningFace.png'

type Props = {
  guidanceAbove: string
  guidanceBelow: string
  src: string
}

export const Guidance: FC<Props> = ({guidanceAbove,guidanceBelow, src}) => {
  return (<>
    <div className="flex flex-col">
      <div className="chat chat-start">
        <img className="w-12" src={questioningFaceIcon} alt="face"/>
        <div className="chat-bubble text-sm">{guidanceAbove}<br/>{guidanceBelow}</div>
      </div>
      <div>
        <img className="card w-60" src={src} alt={src}/>
      </div>
    </div>
  </>)
}