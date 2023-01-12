import { describe, test } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react'
import { Courses } from '../pages/Courses'
import userEvent from '@testing-library/user-event'

describe('Coursesページレンダリング', () => {
  test('スナップショット一致', () => {
    const {container} = render(<Router><Courses/></Router>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('すべての要素が正常にレンダリングされている', () => {
    render(<Router><Courses/></Router>)
    expect(screen.getAllByRole("img")).toBeTruthy()

    expect(screen.getByText("級を選んでください")).toBeInTheDocument()
    expect(screen.getByLabelText("準1級")).toBeInTheDocument()
    expect(screen.getByLabelText("1 級")).toBeInTheDocument()

    expect(screen.getAllByRole("link")).toBeTruthy()
    expect(screen.getAllByRole("generic")).toBeTruthy()

    expect(screen.getByText("「漢検」「漢字検定」は")).toBeInTheDocument()
    expect(screen.getByText("公益財団法人 日本漢字能力検定協会の登録商標です")).toBeInTheDocument()
  })
})
