import { HiddenButtonedRadio} from '../../components/shared/HiddenButtonedRadio'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("Button", () => {
  it("can call click event", () => {
    const onClick = jest.fn();
    render(<HiddenButtonedRadio></>)
    expect(screen.getByText("button text")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});