import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Flyout from "../src/components/flyoutNav";

storiesOf("Flyout", module).add("default", () => (
  <Flyout>
    <div>one</div>
    <div>two</div>
    <div>three</div>
    <div>four</div>
    <div>five</div>
    <div>six</div>
  </Flyout>
));
