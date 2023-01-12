import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest"
import { StartPanel } from '../../components/courses/StartPanel'

describe("問題選択画面に戻るボタン", () => {
  test('「新規」クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<StartPanel  onClickStart={onClickMock} onClickRepeat={onClickMock} />)
    await userEvent.click(screen.getByText("新 規"))
    expect(onClickMock).toHaveBeenCalledTimes(1)
      })

  test('「復習」クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<StartPanel  onClickStart={onClickMock} onClickRepeat={onClickMock} />)

    await userEvent.click(screen.getByText("復 習"))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
