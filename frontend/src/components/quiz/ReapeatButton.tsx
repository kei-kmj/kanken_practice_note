import { LOCAL_STORAGE_DATA } from '../../routes/Top'
import * as React from 'react'

export const RepeatButton = (props: { data: { quiz: string | any[] }, currentQuiz: number, onClick: (e: any) => void }) => {
  return <div className="flex m-3 justify-end">
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          className="toggle toggle-info"
          defaultChecked={!!localStorage.getItem(`${LOCAL_STORAGE_DATA.KEY}${props.data.quiz[props.currentQuiz].id}`)}
          onClick={props.onClick}
        />
        <span className="label-text">復習する</span>
      </label>
    </div>
  </div>
}