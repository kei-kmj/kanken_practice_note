import { FC } from 'react'
import { MdNavigateNext } from 'react-icons/md'
import * as React from 'react'
import './PlayButton.css'

type Props = {
  information: string
  onClick: () => void
  name: string
}

export const PlayButton: FC<Props> = ({information, onClick, name}) => {
  return (<>
    <div className="flex justify-center">
      <div>
        <p className="flex justify-center text-s mt-3">{information}</p>
        <button className="start-btn btn btn-wide btn-primary" onClick={onClick}>{name}<MdNavigateNext
          className="ml-3"/>
        </button>
      </div>
    </div>
  </>)
}