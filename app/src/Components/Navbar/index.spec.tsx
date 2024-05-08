"use client";
import * as React from "react";

import { render } from "../../test/utils";
import { Navbar } from ".";

describe("Navbar", () => {
  it("should render without fail", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText("Navbar"));
  });

  it("should match snapshot", () => {
    const { container } = render(<Navbar />);

    expect(container);
  });
});
function expect(arg0: any) {
  throw new Error("Function not implemented.");
}
