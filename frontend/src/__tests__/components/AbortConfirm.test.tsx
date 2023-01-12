import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AbortConfirm } from '../../components/quiz/AbortConfirm'
import { vi } from 'vitest'

describe("問題選択画面に戻るボタン",() => {
  test('クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<AbortConfirm answer={{id: "1"}} onClick={onClickMock}　/>)
    await userEvent.click(screen.getByText("はい"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })
})