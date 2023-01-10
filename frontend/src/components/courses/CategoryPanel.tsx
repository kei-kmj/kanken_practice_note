import * as React from 'react'
import { FC } from 'react'
import '../../App.css'
import { HiddenButtonedRadio } from '../shared/HiddenButtonedRadio'

type Props = {
  onClickAll: () => void,
  onClickReading: () => void,
  onClickExtraReading: () => void,
  onClickDictation: () => void,
  onClickDictationIdiom: () => void,
  onClickMeaningIdiom: () => void,
  onClickAntonymSynonym: () => void,
  onClickProverb: () => void
}

export const CategoryPanel: FC<Props> = ({
                                           onClickAll,
                                           onClickReading,
                                           onClickExtraReading,
                                           onClickDictation,
                                           onClickDictationIdiom,
                                           onClickMeaningIdiom,
                                           onClickAntonymSynonym,
                                           onClickProverb
                                         }) => {
  return (<>
    <p className="text-xl flex justify-center mt-2">分野を選んでください</p>
    <div className="flex justify-center m-0">
      <HiddenButtonedRadio id="category1" onClick={onClickAll} name="category" labelName="全分野" disabled={false}/>
    </div>
    <div className="flex justify-center">
      <HiddenButtonedRadio id="category3" onClick={onClickReading} name="category" labelName="読 み" disabled={false} />
    </div>
    <div className="flex justify-center">
      <HiddenButtonedRadio id="category4" onClick={onClickExtraReading} name="category" labelName="表外の読み" disabled={false}/>
    </div>
    <div className="flex justify-center">
      <HiddenButtonedRadio id="category2" onClick={onClickDictation} name="category" labelName="書 き" disabled={false}/>
    </div>
    <div className="flex justify-center">
      <HiddenButtonedRadio id="category5" onClick={onClickDictationIdiom} name="category" labelName="四字熟語（書き）" disabled={false}/></div>
    <div className="flex justify-center">
      <HiddenButtonedRadio id="category6" onClick={onClickMeaningIdiom} name="category" labelName="四字熟語（意味）" disabled={false}/>
    </div>
    <div className="flex justify-center">
      <HiddenButtonedRadio id="category7" onClick={onClickAntonymSynonym} name="category" labelName="対義語・類義" disabled={false}/></div>
    <div className="flex justify-center">
      <HiddenButtonedRadio id="category8" onClick={onClickProverb} name="category" labelName="故事成語・諺" disabled={false}/>
    </div>
  </>)
}