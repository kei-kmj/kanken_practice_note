import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest"
import { LevelPanel } from '../../components/courses/LevelPanel'

describe("問題選択画面に戻るボタン", () => {
  test('「準1級」クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<LevelPanel onClickFirst={onClickMock} onClickSemiFirst={onClickMock} />)
    await userEvent.click(screen.getByText("準1級"))
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
  })
