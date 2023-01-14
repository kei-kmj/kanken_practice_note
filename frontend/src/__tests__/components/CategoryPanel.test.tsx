import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest"
import { CategoryPanel } from '../../components/courses/CategoryPanel'

describe("分野選択ボタン", () => {
  test('クリックでonClickが実行される', async () => {
    const onClickMock = vi.fn()

    render(<CategoryPanel onClickAll={onClickMock} onClickAntonymSynonym={onClickMock} onClickDictation={onClickMock}
                          onClickDictationIdiom={onClickMock} onClickExtraReading={onClickMock}
                          onClickMeaningIdiom={onClickMock} onClickProverb={onClickMock} onClickReading={onClickMock}/>)
    await userEvent.click(screen.getByText("全分野"))
    expect(onClickMock).toHaveBeenCalledTimes(1)

    await userEvent.click(screen.getByText("読 み"))
    expect(onClickMock).toHaveBeenCalledTimes(2)

    await userEvent.click(screen.getByText("表外の読み"))
    expect(onClickMock).toHaveBeenCalledTimes(3)

    await userEvent.click(screen.getByText("書 き"))
    expect(onClickMock).toHaveBeenCalledTimes(4)

    await userEvent.click(screen.getByText("四字熟語（書き）"))
    expect(onClickMock).toHaveBeenCalledTimes(5)

    await userEvent.click(screen.getByText("四字熟語（意味）"))
    expect(onClickMock).toHaveBeenCalledTimes(6)

    await userEvent.click(screen.getByText("対義語・類義語"))
    expect(onClickMock).toHaveBeenCalledTimes(7)

    await userEvent.click(screen.getByText("故事成語・諺"))
    expect(onClickMock).toHaveBeenCalledTimes(8)
  })
})
