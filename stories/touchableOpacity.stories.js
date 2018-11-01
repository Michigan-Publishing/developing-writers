import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import TouchableOpacity from "../src/components/touchableOpacity";

storiesOf("TouchableOpacity", module).add("default", () => (
  <TouchableOpacity onClick={action("click")}>Hi there!</TouchableOpacity>
));
