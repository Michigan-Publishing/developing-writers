import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import TriangleActivity from "../src/components/triangleActivity";

storiesOf("Triangle Activity", module).add("default", () => (
  <div style={{ backgroundColor: "#0F384A", width: "80vw", height: "80vw" }}>
    <TriangleActivity />
  </div>
));
