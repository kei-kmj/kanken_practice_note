import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest"
import { StartPanel } from '../../components/courses/StartPanel'

describe("クイズ開始ボタン", () => {
  test('「新規」クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<StartPanel  onClickStart={onClickMock} onClickRepeat={onClickMock} />)

    expect(screen.getByText("新規または復習を選んでください"))

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
