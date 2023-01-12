import { describe, test } from 'vitest'
import { Support } from '../pages/Support'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react'

describe('Simple working test', () => {
  test('should render correctly', () => {
    const {container} = render(<Router><Support /></Router>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('すべての要素が正常にレンダリングされていること', () => {
    render(<Router><Support /></Router>)
    // expect(screen.getAllByRole("heading")).toBeTruthy()
    expect(screen.getAllByRole("generic")).toBeTruthy()
    expect(screen.getAllByRole("link")).toBeTruthy()

    expect(screen.getByText("「漢検」「漢字検定」は")).toBeInTheDocument()
    expect(screen.getByText("公益財団法人 日本漢字能力検定協会の登録商標です")).toBeInTheDocument()

  })
})