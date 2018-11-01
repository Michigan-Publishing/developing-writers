import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import GlobeNav, { NavPosition } from "../src/components/globeNav";
import Orb from "../src/components/orbWrapper";

const Wrapper = ({ children }) => (
  <div style={{ backgroundColor: "#000", width: "100vw", height: "100vh" }}>
    {children}
  </div>
);

storiesOf("GlobeNav", module)
  .add("default behavior", () => (
    <Wrapper>
      <GlobeNav>
        <Orb>One</Orb>
        <Orb>Two</Orb>
        <Orb>Three</Orb>
      </GlobeNav>
    </Wrapper>
  ))
  .add("bottom left", () => (
    <Wrapper>
      <GlobeNav position="BOTTOM" onClick={action("click")}>
        <Orb>One</Orb>
        <Orb>Two</Orb>
        <Orb>Three</Orb>
      </GlobeNav>
    </Wrapper>
  ));
