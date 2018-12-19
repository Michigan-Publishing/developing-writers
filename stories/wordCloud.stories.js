import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import WordCloud from "../src/components/wordcloud";

const data = [
  { text: "Some item", value: 1000 },
  { text: "Another", value: 200 },
  { text: "Third one", value: 800 },
  { text: "Fourth one", value: 1000000 },
  { text: "Fifth one", value: 10 }
];

storiesOf("Word Cloud", module).add("default", () => (
  <div style={{ backgroundColor: "#0F384A", width: "80vw", height: "80vw" }}>
    <WordCloud data={data} />
  </div>
));
