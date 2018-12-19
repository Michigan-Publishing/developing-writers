import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import PieChart from "../src/components/piechart";

const data = [
  { key: "Something", value: 100, color: "#aaac84" },
  { key: "Other thing", value: 200, color: "#dce7c5" },
  { key: "Final thing", value: 50, color: "#e3a51a" }
];
storiesOf("Pie chart", module).add("default", () => (
  <div style={{ backgroundColor: "#0F384A", width: "80vw", height: "80vw" }}>
    <PieChart data={data} />
  </div>
));
