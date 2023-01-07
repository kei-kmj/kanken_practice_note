import { FC } from 'react'
import * as React from 'react'
import './HiddenButtonedRadio.css'

type Props = {
  onClickSemiFirst: () => void
  onClickFirst: () => void
  id: string
  disabled: boolean
  name:string
  onClick: () => void
  labelName: string
}

export const HiddenButtonedRadio: FC<Props> = ({id, disabled = false, name, onClick, labelName}) => {
  return <>
    <input id={id} className="radiobutton" disabled={disabled} name={name} hidden type="radio"
           onClick={onClick}
    />
    <label htmlFor={id}><span className="dummy-radio"
    ><span className="dummy-radio-check"/></span
    > {labelName}</label>
  </>
}