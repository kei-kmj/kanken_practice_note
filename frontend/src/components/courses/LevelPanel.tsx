import * as React from 'react'
import { FC } from 'react'
import { HiddenButtonedRadio } from '../shared/HiddenButtonedRadio'

type Props = {
  onClickSemiFirst: () => void,
  onClickFirst: () => void
}

export const LevelPanel: FC<Props> = ({onClickSemiFirst, onClickFirst}) => {
  return (<>
    <p className="text-xl flex justify-center mt-1">級を選んでください</p>
    <div className="flex justify-center m-0">
      <HiddenButtonedRadio id="radio1" onClick={onClickSemiFirst} disabled={false} name="level" labelName="準1級"/></div>
    <div className="flex justify-center m-0">
      <HiddenButtonedRadio id="radio2" onClick={onClickFirst}  disabled={true} name="level" labelName="1 級"/>

    </div>
  </>)
}

