import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { StartButton } from '../../components/topPage/StartButton'
import { vi } from "vitest"

describe("問題選択画面に戻るボタン",() => {
  const onClickMock = vi.fn()
  test('クリックでonClickが実行される', async () => {

    render(<StartButton onClick={onClickMock} />)
    await userEvent.click(screen.getByText("始める"))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
