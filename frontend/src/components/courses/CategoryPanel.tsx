import * as React from 'react'
import { FC } from 'react'

type Props = {
  onClickAll: () => void,
  onClickReading: () => void,
  onClickExtraReading: () => void,
  onClickDictation: () => void,
  onClickDictationIdiom: () => void,
  onClickMeaningIdiom: () => void,
  onClickSynonymAntonym: () => void,
  onClickProverb: () => void
}

export const CategoryPanel: FC<Props> = ({
                                           onClickAll,
                                           onClickReading,
                                           onClickExtraReading,
                                           onClickDictation,
                                           onClickDictationIdiom,
                                           onClickMeaningIdiom,
                                           onClickSynonymAntonym,
                                           onClickProverb
                                         }) => {
  return <div>
    <p className="text-xl flex justify-center mt-2">分野を選んでください</p>
    <div className="flex justify-center m-0">
      <input id="category1" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickAll}/>
      <label htmlFor="category1">全分野</label>
      <input id="category3" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickReading}/>
      <label htmlFor="category3">読 み</label>
    </div>
    <div className="flex justify-center">
      <input id="category4" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickExtraReading}/>
      <label htmlFor="category4">表外の読み</label>
      <input id="category2" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickDictation}/>
      <label htmlFor="category2">書 き</label>
    </div>
    <div className="flex justify-center">
      <input id="category5" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickDictationIdiom}/>
      <label htmlFor="category5">四字熟語（書き）</label>

      <input id="category6" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickMeaningIdiom}/>
      <label htmlFor="category6">四字熟語（意味）</label>
    </div>
    <div className="flex justify-center">
      <input id="category7" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickSynonymAntonym}/>
      <label htmlFor="category7">対義語・類義</label>

      <input id="category8" className="radiobutton" name="category" hidden type="radio"
             onClick={onClickProverb}/>
      <label htmlFor="category8">故事成語・諺</label>
    </div>
  </div>
}