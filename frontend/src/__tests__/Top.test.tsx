import { describe, test } from 'vitest'
import { Top } from '../pages/Top'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react'

describe('レンダリング', () => {
  test('スナップショットが同一', () => {
    const {container} = render(<Router><Top/></Router>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('すべての要素が正常にレンダリングされている', () => {
    render(<Router><Top/></Router>)
    expect(screen.getAllByRole("heading")).toBeTruthy()
    expect(screen.getAllByRole("img")).toBeTruthy()
    expect(screen.getAllByRole("generic")).toBeTruthy()
    expect(screen.getByText("漢字検定1級・準1級範囲の漢字を")).toBeInTheDocument()
    expect(screen.getByText("復習データを消す")).toBeInTheDocument()
    expect(screen.getAllByRole("button")).toBeTruthy()

    expect(screen.getByText("「漢検」「漢字検定」は")).toBeInTheDocument()
    expect(screen.getByText("公益財団法人 日本漢字能力検定協会の登録商標です")).toBeInTheDocument()

  })
})