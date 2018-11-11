import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import HomeButton from "../src/components/homeButton";
import InfoButton from "../src/components/infoButton";

storiesOf("Buttons", module)
  .add("home", () => (
    <div style={{ background: "#000", padding: 25 }}>
      <HomeButton />
    </div>
  ))
  .add("info", () => (
    <div style={{ background: "#000", padding: 25 }}>
      <InfoButton />
    </div>
  ));
