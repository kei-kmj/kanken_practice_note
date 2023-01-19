import * as React from 'react'
import { FC } from 'react'
import { MdNavigateNext } from 'react-icons/md'

type Props = {
  onClickStart: () => Promise<void>
  onClickRepeat: () => void
}

export const StartPanel: FC<Props> = ({onClickStart, onClickRepeat}) => {
  return (<>
    <div>
      <p className="text-xl flex justify-center mt-8">新規または復習を選んでください</p>
      <div className="flex justify-center">
        <div>
          <p className="flex justify-center text-s mt-3">選んだ分野のすべての問題から出題</p>
          <button className="btn btn-wide btn-primary b" onClick={onClickStart}>新規
          </button>

        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <p className="flex justify-center text-s mt-3">「復習する」にチェックした問題から出題</p>
          <button className="btn btn-wide btn-primary b" onClick={onClickRepeat}>復習<MdNavigateNext/></button>
        </div>
      </div>
    </div>
  </>)
}