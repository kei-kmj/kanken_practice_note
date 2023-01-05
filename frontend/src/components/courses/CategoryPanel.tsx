import * as React from 'react'
import { FC } from 'react'
import { HiddenButtonRadio } from '../shared/HiddenButtonRadio'

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
  return <div>
    <p className="text-xl flex justify-center mt-2">分野を選んでください</p>
    <div className="flex justify-center m-0">
      <HiddenButtonRadio id="category1" onClick={onClickAll} labelId="category1" labelName="全分野"/>
      <HiddenButtonRadio id="category3" onClick={onClickReading} labelId="category3" labelName="読 み"/>
    </div>
    <div className="flex justify-center">
      <HiddenButtonRadio id="category4" onClick={onClickExtraReading} labelId="category4" labelName="表外の読み"/>
      <HiddenButtonRadio id="category2" onClick={onClickDictation} labelId="category2" labelName="書 き"/>
    </div>
    <div className="flex justify-center">
      <HiddenButtonRadio id="category5" onClick={onClickDictationIdiom} labelId="category5" labelName="四字熟語（書き）"/>
      <HiddenButtonRadio id="category6" onClick={onClickMeaningIdiom} labelId="category6" labelName="四字熟語（意味）"/>
    </div>
    <div className="flex justify-center">
      <HiddenButtonRadio id="category7" onClick={onClickAntonymSynonym} labelId="category7" labelName="対義語・類義"/>
      <HiddenButtonRadio id="category8" onClick={onClickProverb} labelId="category8" labelName="故事成語・諺"/>
    </div>
  </div>
}