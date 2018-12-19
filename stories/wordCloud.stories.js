import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import WordCloud from "../src/components/wordcloud";

storiesOf("Word Cloud", module).add("default", () => (
  <div style={{ backgroundColor: "#0F384A", width: "80vw", height: "80vw" }}>
    <WordCloud />
  </div>
));
