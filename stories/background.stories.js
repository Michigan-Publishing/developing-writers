import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Background from "../src/components/background";

storiesOf("Background", module).add("default", () => (
  <Background>
    <h1>Hi</h1>
  </Background>
));
