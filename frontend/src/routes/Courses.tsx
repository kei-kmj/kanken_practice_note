import * as React from 'react'
import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useFetchApi } from '../hooks/useFetchAPI'
import '../App.css'
import { LOCAL_STORAGE_DATA } from './Top'
import { LevelPanel } from '../components/courses/LevelPanel'
import { Logo } from '../components/Logo'
import { CategoryPanel } from '../components/courses/CategoryPanel'
import { QuizStartPanel } from '../components/courses/QuizStartPanel'
import { BackToTop } from '../components/BackToTop'

const Courses = () => {
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
          onClick={() => selectLevel('11')}
          onClick1={() => selectLevel('1')}/>
        {level &&
        <div>
          <CategoryPanel
            onClick={() => selectCategory('0')}
            onClick1={() => selectCategory('1')}
            onClick2={() => selectCategory('2')}
            onClick3={() => selectCategory('3')}
            onClick4={() => selectCategory('4')}
            onClick5={() => selectCategory('5')}
            onClick6={() => selectCategory('6')}
            onClick7={() => selectCategory('7')}/>

          {category && <QuizStartPanel onClick={newQuizStart} onClick1={repeatQuizStart}/>}
        </div>}
        <div ref={ref}/>
        <BackToTop />
      </main>
      <Footer/>
    </div>
  </>)
}
export default Courses
