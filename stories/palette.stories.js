import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import palette from "../src/utils/palette";

const keys = Object.keys(palette);
const ColorView = ({ name, color }) => (
  <div
    style={{
      display: "flex",
      height: 64,
      width: 400,
      marginBottom: 15,
      alignItems: "center"
    }}
  >
    <div
      style={{
        height: 64,
        width: 64,
        backgroundColor: color,
        marginRight: 5,
        border: "1px solid #AAA"
      }}
    />
    <strong>{name}</strong>
  </div>
);

storiesOf("Palette", module).add("with blah", () => (
  <>
    {keys.map(key => (
      <ColorView name={key} color={palette[key]} />
    ))}
  </>
));
