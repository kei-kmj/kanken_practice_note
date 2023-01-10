import { LOCAL_STORAGE_DATA } from '../../hooks/useLocalStrage'
import * as React from 'react'
import { FC } from 'react'
import { QuestionType } from '../../namespace'

type Props = {
  data: { quiz: QuestionType }
  currentQuiz: number
  onClick: (e:any) => void
}

export const RepeatButton:FC<Props> = ({ data: { quiz }, currentQuiz, onClick }) => {
  return (<>
    <div className="flex m-3 justify-end">
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="toggle toggle-info"
            defaultChecked={!!localStorage.getItem(`${LOCAL_STORAGE_DATA.KEY}${quiz[currentQuiz].id}`)}
            onClick={onClick}
          />
          <span className="label-text">復習する</span>
        </label>
      </div>
    </div>
  </>)
}