import { render } from "@testing-library/react";
import * as daap from "@usedapp/core";
/** @type { import("jest.setup").MOCKED_DAAP } */
const usedaap = daap

import CardTitle from "../CardTitle";

describe("CardTitle", () => {
  let node;
  afterEach(() => {
    if (node && node.unmount) {
      node.unmount();
    }
    jest.clearAllMocks();
  });

  it("matches snapshot", () => {
    node = render(<CardTitle>CONTENT</CardTitle>);
    expect(node.container).toMatchSnapshot();
  });

  it("renders balance, account withAccountInfo=true", () => {
    node = render(<CardTitle withAccountInfo>CONTENT</CardTitle>);
    const { container } = node;
    expect(container.textContent).toMatch(/BALANCE:.*1.*ETH/g);
    expect(container.textContent).toMatch(/YOUR ADDRESS:.*NO CONNECTION/g);
  });

  it("renders symbol when withToken=MYTOKEN", () => {
    usedaap.useToken.mockImplementation((symbol) => ({ symbol }));
    const MYTOKEN = "MYTOKEN";
    node = render(<CardTitle withToken={MYTOKEN}>CONTENT</CardTitle>);
    const { container } = node;
    expect(container).toMatchSnapshot();
    expect(container.textContent).toMatch(MYTOKEN);
  });
});
