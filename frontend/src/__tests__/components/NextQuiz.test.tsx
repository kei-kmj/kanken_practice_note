import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import { NextQuiz } from '../../components/quiz/NextQuiz'

describe("次の問題ボタン", () => {
  test('クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<NextQuiz answer={{id: 1}} onClick={onClickMock}/>)
    await userEvent.click(screen.getByText("次の問題"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })
})
