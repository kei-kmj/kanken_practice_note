import * as React from 'react'

export const CategoryPanel = (
  props: {
    onClick: () => void,
    onClick1: () => void,
    onClick2: () => void,
    onClick3: () => void,
    onClick4: () => void,
    onClick5: () => void,
    onClick6: () => void,
    onClick7: () => void
  }) => {
  return (<>
    <div>
      <p className="text-xl flex justify-center mt-2">分野を選んでください</p>
      <div className="flex justify-center m-0">
        <input id="category1" className="radiobutton" name="category" hidden type="radio"
               value="11"
               onClick={props.onClick}/>
        <label htmlFor="category1">全分野</label>
        <input id="category3" className="radiobutton" name="category" hidden type="radio"
               value="1"
               onClick={props.onClick1}/>
        <label htmlFor="category3">読 み</label>
      </div>
      <div className="flex justify-center">
        <input id="category4" className="radiobutton" name="category" hidden type="radio"
               value="2"
               onClick={props.onClick2}/>
        <label htmlFor="category4">表外の読み</label>
        <input id="category2" className="radiobutton" name="category" hidden type="radio"
               value="3"
               onClick={props.onClick3}/>
        <label htmlFor="category2">書 き</label>
      </div>
      <div className="flex justify-center">
        <input id="category5" className="radiobutton" name="category" hidden type="radio"
               value="4"
               onClick={props.onClick4}/>
        <label htmlFor="category5">四字熟語（書き）</label>

        <input id="category6" className="radiobutton" name="category" hidden type="radio"
               value="5"
               onClick={props.onClick5}/>
        <label htmlFor="category6">四字熟語（意味）</label>
      </div>
      <div className="flex justify-center">
        <input id="category7" className="radiobutton" name="category" hidden type="radio"
               value="4"
               onClick={props.onClick6}/>
        <label htmlFor="category7">対義語・類義</label>

        <input id="category8" className="radiobutton" name="category" hidden type="radio"
               value="5"
               onClick={props.onClick7}/>
        <label htmlFor="category8">故事成語・諺</label>
      </div>
    </div>
  </>)
}