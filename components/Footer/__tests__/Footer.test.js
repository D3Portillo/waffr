import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  let node;
  afterEach(() => {
    if (node && node.unmount) {
      node.unmount();
    }
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    node = render(<Footer />);
    expect(node.container).toMatchSnapshot();
  });
});
