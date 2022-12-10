import * as React from 'react'

export const Score = (props: { score: number, data: { quiz: string | any[] } }) => {
  return <p className="text-3xl flex justify-center m-5">得点：{props.score} / {props.data.quiz.length} 点</p>
}