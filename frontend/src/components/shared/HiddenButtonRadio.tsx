import { FC } from 'react'
import * as React from 'react'

type Props = {
  onClickSemiFirst: () => void
  onClickFirst: () => void
  id: string
  disabled: boolean
  labelName: string
}

export const HiddenButtonRadio: FC<Props> = ({id, disabled = false, onClick, labelName}) => {
  return <>
    <input id={id} className="radiobutton" disabled={disabled} name="level" hidden type="radio"
           onClick={onClick}
    />
    <label htmlFor={id}>{labelName}</label>
  </>
}