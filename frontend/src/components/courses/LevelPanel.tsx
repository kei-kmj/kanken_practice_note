import * as React from 'react'
import { FC } from 'react'
import { HiddenButtonRadio } from '../shared/HiddenButtonRadio'

type Props = {
  onClickSemiFirst: () => void,
  onClickFirst: () => void
}

export const LevelPanel: FC<Props> = ({onClickSemiFirst, onClickFirst}) => {
  return (<>
    <p className="text-xl flex justify-center mt-1">級を選んでください</p>
    <div className="flex justify-center m-0">
      <HiddenButtonRadio id="radio1" onClick={onClickSemiFirst} labelName="準1級"/>
      <HiddenButtonRadio id="radio2" onClick={onClickFirst} disabled={true} labelName="1 級"/>

    </div>
  </>)
}