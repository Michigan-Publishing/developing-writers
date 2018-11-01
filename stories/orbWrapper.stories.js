import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import OrbWrapper from "../src/components/orbWrapper";

storiesOf("OrbWrapper", module).add("default", () => (
  <OrbWrapper>
    <a href="#">This thing!</a>
  </OrbWrapper>
));
