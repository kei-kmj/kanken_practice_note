import * as React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import { useNavigate, useLocation } from 'react-router-dom'
import { LOCAL_STORAGE_DATA } from './Top'
import { Logo } from '../components/Logo'
import frame from '../../public/frame2.png'
import { Question } from '../components/quiz/Question'
import { Alternatives } from '../components/quiz/Alternatives'
import { Correct } from '../components/quiz/Corrext'
import { Incorrect } from '../components/quiz/Incorrect'
import { Note } from '../components/quiz/Note'
import { NextQuiz } from '../components/quiz/NextQuiz'
import { AbortConfirm } from '../components/quiz/AbortConfirm'
import { EndOfQuiz } from '../components/quiz/EndOfQuiz'
import { Score } from '../components/quiz/Score'
import { RepeatButton } from '../components/quiz/ReapeatButton'
import '../App.css'
import logo from '../../public/logo5.png'

const saveJSON = (key: string, data: string): void => {
  localStorage.setItem(key, JSON.stringify(data))
}

const removeJSON = (key: string): void => {
  localStorage.removeItem(key)
}

const Quiz = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()

  const data = location.state as { quiz: string | any[] }
  const [currentQuiz, setCurrentQuiz] = useState<number>(0)
  const [score, setScore] = useState<number>(0)

  const correctAnswer = data.quiz[currentQuiz].answers.filter((answer: { correctness: boolean }) => {
    if (answer.correctness) {
      return answer
    } else return null
  })

  const finishQuiz = () => {
    navigate('/courses')
  }

  const addScore = (answer: { correctness: boolean }) => {
    if (answer.correctness) {
      setScore(score + 1)
    }
  }

  const handleToggle = (e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      saveJSON(`${LOCAL_STORAGE_DATA.KEY}${data.quiz[currentQuiz].id}`, data.quiz[currentQuiz])
    } else {
      removeJSON(`${LOCAL_STORAGE_DATA.KEY}${data.quiz[currentQuiz].id}`)
    }
  }

  return (<>
    <div className="flex flex-col min-h-screen top-0">
      <div className="flex justify-left">
        <Logo/>
      </div>
      <main className="flex-grow">
            <Question data={data} currentQuiz={currentQuiz}/>
        {data.quiz[currentQuiz].answers.map((answer: { id?: string; correctness: boolean; answer?: string | undefined }) =>
          <div className="flex justify-center mt-3" key={answer.id}>

            <Alternatives answer={answer} onClick={() => addScore(answer)}/>

            <input type="checkbox" id={answer.id} className="modal-toggle"/>
            <div className="modal">
              <div className="modal-box">
                <div>
                  <div className="flex justify-center">
                    {answer.correctness.toString() === 'true' ? <Correct/> : <Incorrect/>}
                  </div>
                  <p className="text-3xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

                  <Note data={data} currentQuiz={currentQuiz}/>

                  <RepeatButton data={data} currentQuiz={currentQuiz} onClick={(e) => handleToggle(e)}/>

                  {currentQuiz === data.quiz.length - 1 ? <Score score={score} data={data}/> : null}

                  {currentQuiz < data.quiz.length - 1
                    ? <NextQuiz answer={answer} onClick={() => {
                      setCurrentQuiz(currentQuiz + 1)
                    }}/>
                    : <EndOfQuiz answer={answer} onClick={finishQuiz}/>}

                  {currentQuiz < data.quiz.length - 1
                    ? <AbortConfirm answer={answer} onClick={finishQuiz}/>
                    : null}
                </div>
              </div>
            </div>
          </div>)}
      </main>
      <Footer/>
    </div>
  </>)
}
export default Quiz
