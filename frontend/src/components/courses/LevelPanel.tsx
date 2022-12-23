import * as React from 'react'

export const LevelPanel = (props: { onClick: () => void, onClick1: () => void }) => {
  return (<>
    <div>
      <p className="text-xl flex justify-center mt-1">級を選んでください</p>
      <div className="flex justify-center m-0">
        <input id="radio1" className="radiobutton" name="level" type="radio"
               onClick={props.onClick}
        />
        <label htmlFor="radio1">準1級</label>

        <input id="radio2" className="radiobutton" name="level" type="radio" value="1"
               onClick={props.onClick1}/>
        <label htmlFor="radio2">1 級</label>
      </div>
    </div>
  </>)
}