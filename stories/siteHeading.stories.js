import React from "react";

import { storiesOf } from "@storybook/react";

import SiteHeading from "../src/components/siteHeading";

storiesOf("SiteHeading", module).add("default", () => (
  <div style={{ backgroundColor: "#000", padding: 20 }}>
    <SiteHeading />
  </div>
));
