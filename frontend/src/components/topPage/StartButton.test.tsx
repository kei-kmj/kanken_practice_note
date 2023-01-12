import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmationModal } from './ConfirmationModal'
import { vi } from "vitest"

describe("問題選択画面に戻るボタン",() => {
  const onClickMock = vi.fn()
  test('「はい」クリックでonClickが実行される', async () => {

    render(<ConfirmationModal 　 confirmation="OK？" id="1" onClick={onClickMock} unrecoverable="戻せません"/>)
    await userEvent.click(screen.getByText("はい"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })

  test('「いいえ」クリックでonClickが実行される', async () => {

    render(<ConfirmationModal 　 confirmation="OK？" id="1" onClick={onClickMock} unrecoverable="戻せません"/>)
    await userEvent.click(screen.getByText("いいえ"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })
})
