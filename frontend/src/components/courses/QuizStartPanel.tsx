import * as React from 'react'

export const QuizStartPanel = (props: { onClick: () => Promise<void>, onClick1: () => void }) => {
  return (<>
    <div>
      <p className="text-xl flex justify-center mt-5">新規または復習を選んでください</p>
      <div className="flex justify-center">
        <div>
          <button className="btn btn-wide m-2 btn-primary b" onClick={props.onClick}>新 規
          </button>
          <p className="flex justify-center">選んだ分野のすべての問題から出題されます</p>
        </div>
        <div>
          <button className="btn btn-wide m-2 btn-primary b" onClick={props.onClick1}>復 習
          </button>
          <p className="flex justify-center">「復習する」にチェックした問題から出題されます</p>
        </div>
      </div>
    </div>
  </>)
}