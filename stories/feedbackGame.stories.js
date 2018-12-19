import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import FeedbackGame from "../src/components/feedbackGame";

storiesOf("Feedback Game", module).add("default", () => (
  <div style={{ backgroundColor: "#0F384A", width: "80vw", height: "80vw" }}>
    <FeedbackGame />
  </div>
));
