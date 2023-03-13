import * as React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LOCAL_STORAGE_DATA, saveJSON, removeJSON } from '../hooks/useLocalStrage'
import { Header } from '../components/shared/Header'
import { Logo } from '../components/shared/Logo'
import { Question } from '../components/quiz/Question'
import { Alternatives } from '../components/quiz/Alternatives'
import { DisplayCorrect } from '../components/quiz/DisplayCorrect'
import { DisplayIncorrect } from '../components/quiz/DisplayIncorrect'
import { Note } from '../components/quiz/Note'
import { RepeatButton } from '../components/quiz/RepeatButton'
import { NextQuiz } from '../components/quiz/NextQuiz'
import { AbortConfirm } from '../components/quiz/AbortConfirm'
import { EndOfQuiz } from '../components/quiz/EndOfQuiz'
import { Score } from '../components/quiz/Score'
import { Footer } from '../components/shared/Footer'
import { QuestionType } from '../types/quizTypes'
import './Quiz.css'

export const Quiz:React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const data = location.state as { quiz:QuestionType }
  // console.log(data)
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
    <Header pageTitle="問題です" description="問題を出題します" title="漢検練習帳"/>
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-left">
        <Logo />
      </div>
      <main className="flex-grow">
        <Question data={data} currentQuiz={currentQuiz}/>
        {data.quiz[currentQuiz].answers.map((answer: { id: string; correctness: boolean; answer: string }) =>
          <div className="flex justify-center mt-2" key={answer.id}>

            <Alternatives answer={answer} onClick={() => addScore(answer)}/>

            <input type="checkbox" id={answer.id} className="modal-toggle"/>
            <div className="modal">
              <div className="modal-box bg-white">
                <div>
                  <div className="flex justify-center">
                    {answer.correctness.toString() === 'true' ? <DisplayCorrect/> : <DisplayIncorrect/>}
                  </div>
                  <p className="text-2xl flex justify-center m-5 ">答え：{correctAnswer[0].answer}</p>

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