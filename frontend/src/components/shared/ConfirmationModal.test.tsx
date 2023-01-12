import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextQuiz } from './NextQuiz'
import { id } from 'postcss-selector-parser'

describe("問題選択画面に戻るボタン",() => {
  test('クリックでonClickが実行される', async () => {
    const onClickMock = vitest.fn()

    render(<NextQuiz answer={{id: 1}} onClick={onClickMock}　/>)
    await userEvent.click(screen.getByText("次の問題"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })
})
