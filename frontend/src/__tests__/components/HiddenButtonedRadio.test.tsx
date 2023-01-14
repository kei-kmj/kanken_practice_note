import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HiddenButtonedRadio } from '../../components/shared/HiddenButtonedRadio'
import { vi } from 'vitest'

describe("級・分野選択ボタン", () => {
  const onClickMock = vi.fn()
  test('onClickが実行される', async () => {

    render(<HiddenButtonedRadio disabled={false} id="1" labelName="1級" name="級" onClick={onClickMock}/>)
    await userEvent.click(screen.getByText("1級"))

    expect(onClickMock).toHaveBeenCalledTimes(1)

  })
})
