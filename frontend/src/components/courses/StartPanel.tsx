import * as React from 'react'
import { FC } from 'react'
import { PlayButton } from '../shared/PlayButton'
import './../../App.css'

type Props = {
  onClickStart: () => Promise<void>
  onClickRepeat: () => void
}


export const StartPanel: FC<Props> = ({onClickStart, onClickRepeat}) => {
  return (<>
    <div>
      <p className="text-xl flex justify-center mt-8">新規または復習を選んでください</p>
      <PlayButton information="選んだ分野のすべての問題から出題" onClick={onClickStart} name="新規"/>
      <PlayButton information="「復習する」にチェックした問題から出題" onClick={onClickRepeat} name="復習"/>
    </div>
  </>)
}