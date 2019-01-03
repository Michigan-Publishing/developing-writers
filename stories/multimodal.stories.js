import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MultimodalGame from "../src/components/games/MultimodalGame";

storiesOf("Multimodal Activity", module).add("default", () => (
  <div style={{ backgroundColor: "#0F384A", width: "80vw", height: "100%" }}>
    <MultimodalGame />
  </div>
));
