import { shallow } from "enzyme";
import React from "react";
import Posts from "./posts";
//shallow -- render only component without childs
//render - with childs but, not check lifecycles
//mount cheq lifecycles


describe("Posts component", () => {
  it("should render Post component", () => {
    const component = render(<Posts />);
    expect(component).toMatchSnapshot();
  });
});
