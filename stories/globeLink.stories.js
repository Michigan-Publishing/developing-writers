import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import GlobeLink, { GlobeColor } from "../src/components/globeLink";

const Wrapper = ({ children }) => (
  <div style={{ backgroundColor: "#000", width: "100vw", height: "100vh" }}>
    {children}
  </div>
);

storiesOf("GlobeLink", module).add("default behavior", () => (
  <Wrapper>
    <GlobeLink
      topText="Top Text"
      bottomText="Bottom Text"
      href="https://www.google.com"
      target="_blank"
      rel="noFollow"
    />
  </Wrapper>
));
