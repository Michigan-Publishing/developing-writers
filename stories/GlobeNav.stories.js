import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import GlobeNav, { NavPosition } from "../src/components/globeNav";

const Wrapper = ({ children }) => (
  <div style={{ backgroundColor: "#000", width: "100vw", height: "100vh" }}>
    {children}
  </div>
);

console.log(" HERE ", NavPosition);
storiesOf("GlobeNav", module)
  .add("default behavior", () => (
    <Wrapper>
      <GlobeNav />
    </Wrapper>
  ))
  .add("bottom left", () => (
    <Wrapper>
      <GlobeNav position="BOTTOM" onClick={action("click")} />
    </Wrapper>
  ));
