import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { AbortConfirm } from '../../components/quiz/AbortConfirm'
import { vi } from 'vitest'

describe("中断ボタン", () => {
  const onClickMock = vi.fn()
  test('「はい」でonClickが実行される', async () => {

    render(<AbortConfirm answer={{id: "1"}} onClick={onClickMock}/>)
    await userEvent.click(screen.getByText("はい"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })

  test('「いいえ」でonClickが実行される', async () => {

    render(<AbortConfirm answer={{id: "1"}} onClick={onClickMock}/>)
    await userEvent.click(screen.getByText("いいえ"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })
})