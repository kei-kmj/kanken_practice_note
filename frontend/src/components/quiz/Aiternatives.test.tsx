import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {vi} from "vitest"
import { EndOfQuiz } from './EndOfQuiz'

describe("問題選択画面に戻るボタン",() => {
  test('クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<EndOfQuiz answer={{id: "1"}} onClick={onClickMock}　/>)
    await userEvent.click(screen.getByText("問題選択画面に戻る"))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
