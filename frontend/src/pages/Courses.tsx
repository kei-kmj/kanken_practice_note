import * as React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../components/shared/Footer'
import { useFetchApi } from '../hooks/useFetchAPI'
import '../App.css'
import { LOCAL_STORAGE_DATA } from './Top'
import { LevelPanel } from '../components/courses/LevelPanel'
import { Logo } from '../components/shared/Logo'
import { CategoryPanel } from '../components/courses/CategoryPanel'
import { QuizStartPanel } from '../components/courses/QuizStartPanel'
import { BackToTop } from '../components/shared/BackToTop'
import { CATEGORY, LEVEL } from '../constants'

export const Courses:React.FC = () => {
  const { fetchRequest } = useFetchApi()
  const navigate = useNavigate()
  const [level, setLevel] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  const ref = useRef<HTMLDivElement>(null!)
  const scrollToStartButton = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const selectCategory = (category: string) => {
    setCategory(category)
    scrollToStartButton()
  }

  const startQuiz = async (): Promise<void> => {
    const {quiz} = await fetchRequest(level, category, '10')
    console.log(quiz)

    if (quiz.length === 0) {
      alert('出題できる問題がありません')
      return
    }
    navigate('/quiz', {state: {quiz}})
  }

  const repeatQuiz = () => {
    const quiz = []
    for (const key in localStorage) {
      if (!key.startsWith(LOCAL_STORAGE_DATA.KEY)) {
        continue
      } else if (level !== JSON.parse(localStorage.getItem(key) as string).level.toString()) {
        continue
      } else if (category === CATEGORY.ALL ||
        category === JSON.parse(localStorage.getItem(key) as string).category_id.toString()) {
        quiz.push(JSON.parse(localStorage.getItem(key) as string))
      }
    }
    console.log(quiz)
    if (quiz.length === 0) {
      alert('登録されている問題がありません')
      return
    }
    navigate('/quiz', {state: {quiz}})
  }
  return (<>
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-1 top-0">
        <Logo/>
        <LevelPanel
          onClickSemiFirst={() => setLevel(LEVEL.SEMI_FIRST)}
          onClickFirst={() => setLevel(LEVEL.FIRST)}/>
        {level &&
        <div>
          <CategoryPanel
            onClickAll={() => selectCategory(CATEGORY.ALL)}
            onClickReading={() => selectCategory(CATEGORY.READING)}
            onClickExtraReading={() => selectCategory(CATEGORY.EXTRA_READING)}
            onClickDictation={() => selectCategory(CATEGORY.DICTATION)}
            onClickDictationIdiom={() => selectCategory(CATEGORY.DICTATION_IDIOM)}
            onClickMeaningIdiom={() => selectCategory(CATEGORY.MEANING_IDIOM)}
            onClickAntonymSynonym={() => selectCategory(CATEGORY.ANTONYM_SYNONYM)}
            onClickProverb={() => selectCategory(CATEGORY.PROVERB)}/>

          {category && <QuizStartPanel onClick={startQuiz} onClick1={repeatQuiz}/>}
        </div>}
        <div ref={ref}/>
        <BackToTop />
      </main>
      <Footer/>
    </div>
  </>)
}
