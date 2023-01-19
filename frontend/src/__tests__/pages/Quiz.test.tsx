// import { describe, test } from 'vitest'
// import { Quiz } from '../../pages/Quiz'
// import { BrowserRouter as Router, useLocation } from 'react-router-dom'
// import { render, screen } from '@testing-library/react'
// import { vi } from 'vitest'
// import createFetchMock from 'vitest-fetch-mock'
// import { QuestionType } from '../../types/quizTypes'
//
//
// describe('レンダリング', () => {
//   const location = useLocation()
//   const fetchMock = createFetchMock(vi)
//   fetchMock.enableMocks()
//
//   const data = {
//     quiz: [
//       {
//         id: 1, category_id: 3, level: 11, question: "問題", note: "", answers: [
//           {id: 1, question_id: 1, answer: "A", correctness: false},
//           {id: 2, question_id: 1, answer: "B", correctness: false},
//           {id: 3, question_id: 1, answer: "C", correctness: false},
//           {id: 4, question_id: 1, answer: "D", correctness: true}
//         ]
//       },
//       {
//         id: 2, category_id: 3, level: 11, question: "問題2", answers: [
//           {id: 1, question_id: 2, answer: "A", correctness: false},
//           {id: 2, question_id: 2, answer: "B", correctness: false},
//           {id: 3, question_id: 2, answer: "C", correctness: false},
//           {id: 4, question_id: 2, answer: "D", correctness: true}]
//       }]
//   }
//
//   beforeEach(() => {
//     beforeEach(() => {
//       fetchMock.mockIf('api/index?&category=3&level=11&limit=10', (req) => {
//         if (req.url) {
//           return {
//             status:200,
//             body:`${data}`
//           };
//         }  else {
//           return {
//             status: 404,
//             body: 'Not Found',
//           };
//         }
//       });
//     });
//   })
//
//   test('スナップショットが同一', () => {
//     const data = location.state as { quiz:QuestionType }
//        const {container} = render(<Router><Quiz {...data} /></Router>)
//     expect(container.firstChild).toMatchSnapshot()
//   })
//
//   // test('すべての要素が正常にレンダリングされている', () => {
//   //   render(<Router><Top/></Router>)
//
//   //   expect(screen.getAllByRole("heading")).toBeTruthy()
//   //   expect(screen.getAllByRole("img")).toBeTruthy()
//   //   expect(screen.getAllByRole("generic")).toBeTruthy()
//   //   expect(screen.getByText("漢字検定1級・準1級範囲の漢字を")).toBeInTheDocument()
//   //   expect(screen.getByText("4択クイズで学習するアプリです")).toBeInTheDocument()
//   //
//   //   expect(screen.getByText("復習データを消す")).toBeInTheDocument()
//   //   expect(screen.getAllByRole("button")).toBeTruthy()
//   //
//   //   expect(screen.getByText("「漢検」「漢字検定」は")).toBeInTheDocument()
//   //   expect(screen.getByText("公益財団法人 日本漢字能力検定協会の登録商標です")).toBeInTheDocument()
//   //
//   // })
// })