import * as React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { useFetchApi } from '../API'
import '../App.css'
import logo from '../../public/logo5.png'
import { LOCAL_STORAGE_DATA } from './Top'

const Courses = () => {
  const {fetchRequest} = useFetchApi()
  const navigate = useNavigate()
  const [level, setLevel] = useState('')
  const [category, setCategory] = useState('')

  const selectLevel = (level: string) => {
    setLevel(level)
  }

  const selectCategory = (category: string) => {
    setCategory(category)
  }

  const allQuizStart = async () => {
    const {quiz} = await fetchRequest(level, category, '10')
    console.log(quiz)

    if (level === '') {
      alert('級を選んでください')
      return
    } else if (category === '') {
      alert('分野を選んでください')
      return
    } else if (quiz.length === 0) {
      alert('出題できる問題がありません')
      return
    }
    navigate('/quiz', {state: {quiz}})
  }

  const repeatQuizStart = () => {
    if (level === '') {
      alert('級を選んでください')
      return
    } else if (category === '') {
      alert('分野を選んでください')
      return
    }
    const quiz = []
    for (let key in localStorage) {
      if (!key.startsWith(LOCAL_STORAGE_DATA.KEY)) {
        continue
      } else if (level !== JSON.parse(localStorage.getItem(key)).level.toString()) {
        continue
      } else if (category === '0' ||
        category === JSON.parse(localStorage.getItem(key)).category_id.toString()) {
        quiz.push(JSON.parse(localStorage.getItem(key)))
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
    <div>
      <main className="flex-grow">
        <div className="flex justify-left items-center m-2">
          {/* <h1 className="text-3xl">漢検練習帳</h1> */}
          {/* <img className="w-10" src={chara} alt={chara}/> */}
          <img className="w-40" src={logo} alt={logo}/>
        </div>

        <p className="text-xl flex justify-center mt-1">級を選んでください</p>
        <div className="flex justify-center m-0">
          <input id="radio1" className="radiobutton" name="level" hidden type="radio"
                 onClick={() => selectLevel('11')}
          />
          <label htmlFor="radio1">準1級</label>

          <input id="radio2" className="radiobutton" name="level" hidden type="radio" value="1"
                 onClick={() => selectLevel('1')}/>
          <label htmlFor="radio2">1 級</label>
        </div>

        <div>
          <div>
            <p className="text-xl flex justify-center mt-2">分野を選んでください</p>
            <div className="flex justify-center m-0">
              <input id="category1" className="radiobutton" name="category" hidden type="radio"
                     value="11"
                     onClick={() => selectCategory('0')}/>
              <label htmlFor="category1">全分野</label>

              <input id="category2" className="radiobutton" name="category" hidden type="radio"
                     value="3"
                     onClick={() => selectCategory('3')}/>
              <label htmlFor="category2">書 き</label>
            </div>
            <div className="flex justify-center">
              <input id="category3" className="radiobutton" name="category" hidden type="radio"
                     value="1"
                     onClick={() => selectCategory('1')}/>
              <label htmlFor="category3">読 み</label>

              <input id="category4" className="radiobutton" name="category" hidden type="radio"
                     value="2"
                     onClick={() => selectCategory('2')}/>
              <label htmlFor="category4">表外の読み</label>

            </div>
            <div className="flex justify-center">
              <input id="category5" className="radiobutton" name="category" hidden type="radio"
                     value="4"
                     onClick={() => selectCategory('4')}/>
              <label htmlFor="category5">四字熟語（書き）</label>

              <input id="category6" className="radiobutton" name="category" hidden type="radio"
                     value="5"
                     onClick={() => selectCategory('5')}/>
              <label htmlFor="category6">四字熟語（意味）</label>

            </div>
            <div className="flex justify-center">
              <input id="category7" className="radiobutton" name="category" hidden type="radio"
                     value="4"
                     onClick={() => selectCategory('6')}/>
              <label htmlFor="category7">対義語・類義</label>

              <input id="category8" className="radiobutton" name="category" hidden type="radio"
                     value="5"
                     onClick={() => selectCategory('7')}/>
              <label htmlFor="category8">故事成語・諺</label>
            </div>

            <p className="text-xl flex justify-center mt-5">新規又は復習を選んでください</p>
            <div className="flex justify-center">
              <div>
                <button className="btn btn-wide m-2 btn-primary b" onClick={allQuizStart}>新 規
                </button>
                <p className="flex justify-center">選んだ分野のすべての問題から出題されます</p>
              </div>
              <div>
                <button className="btn btn-wide m-2 btn-primary b" onClick={repeatQuizStart}>復 習
                </button>
                <p className="flex justify-center">「復習する」にチェックした問題から出題されます</p>
              </div>
            </div>
            <div className="grid grid-flow-col gap-4 link flex justify-end m-5">
              <Link to="/vite-dev">トップ画面に戻る</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer/>

    </div>
  </>)
}
export default Courses
