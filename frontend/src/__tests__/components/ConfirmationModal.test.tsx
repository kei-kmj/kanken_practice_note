import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ConfirmationModal } from '../../components/shared/ConfirmationModal'
import { vi } from "vitest"

describe("確認ボタン", () => {
  const onClickMock = vi.fn()
  test('「はい」クリックでonClickが実行される', async () => {
    render(<ConfirmationModal confirmation="OK？" id="1" onClick={onClickMock} unrecoverable="戻せません"/>)
    await userEvent.click(screen.getByText("はい"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })

  test('「いいえ」クリックでonClickが実行される', async () => {
    render(<ConfirmationModal confirmation="OK？" id="1" onClick={onClickMock} unrecoverable="戻せません"/>)
    await userEvent.click(screen.getByText("いいえ"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })
})
