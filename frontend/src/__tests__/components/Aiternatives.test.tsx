import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest"
import { Alternatives } from '../../components/quiz/Alternatives'

describe("解答ボタン", () => {
  test('クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<Alternatives answer={{id: "1", answer: "答え"}} onClick={onClickMock}/>)
    await userEvent.click(screen.getByText("答え"))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
