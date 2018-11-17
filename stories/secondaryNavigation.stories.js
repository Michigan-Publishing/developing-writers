import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SecondaryNavigation from "../src/components/secondaryNavigation";

const linkProperties = [
  { title: "How is writing a social activity?", href: "http://www.google.com" },
  {
    title: "How does feedback from others help us get better at writing?",
    href: "http://www.news.ycombinator.com"
  }
];
storiesOf("SecondaryNavigation", module).add("default", () => (
  <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
    <SecondaryNavigation linkProperties={linkProperties} />
  </div>
));
