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

export const Courses:React.FC = () => {
  const {fetchRequest} = useFetchApi()
  const navigate = useNavigate()
  const [level, setLevel] = useState('')
  const [category, setCategory] = useState('')

  const ref = useRef<HTMLDivElement>(null!)
  const scrollToStartButton = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const selectLevel = (level: string) => {
    setLevel(level)
  }

  const selectCategory = (category: string) => {
    setCategory(category)
    scrollToStartButton()
  }

  const newQuizStart = async (): Promise<void> => {
    const {quiz} = await fetchRequest(level, category, '10')
    console.log(quiz)

    if (quiz.length === 0) {
      alert('出題できる問題がありません')
      return
    }
    navigate('/quiz', {state: {quiz}})
  }

  const repeatQuizStart = () => {
    const quiz = []
    for (const key in localStorage) {
      if (!key.startsWith(LOCAL_STORAGE_DATA.KEY)) {
        continue
      } else if (level !== JSON.parse(localStorage.getItem(key) as string).level.toString()) {
        continue
      } else if (category === '0' ||
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
          onClickSemiFirst={() => selectLevel('11')}
          onClickFirst={() => selectLevel('1')}/>
        {level &&
        <div>
          <CategoryPanel
            onClickAll={() => selectCategory('0')}
            onClickReading={() => selectCategory('1')}
            onClickExtraReading={() => selectCategory('2')}
            onClickDictation={() => selectCategory('3')}
            onClickDictationIdiom={() => selectCategory('4')}
            onClickMeaningIdiom={() => selectCategory('5')}
            onClickSynonymAntonym={() => selectCategory('6')}
            onClickProverb={() => selectCategory('7')}/>

          {category && <QuizStartPanel onClick={newQuizStart} onClick1={repeatQuizStart}/>}
        </div>}
        <div ref={ref}/>
        <BackToTop />
      </main>
      <Footer/>
    </div>
  </>)
}
