import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import RelatedContent from "../src/components/relatedContent";
//import Orb from "../src/components/orbWrapper";

const linkProperties = [
  { title: "How is writing a social activity?", href: "http://www.google.com" },
  {
    title: "How does feedback from others help us get better at writing?",
    href: "http://www.news.ycombinator.com"
  }
];

storiesOf("ContentArea", module).add("default", () => (
  <RelatedContent relatedLinks={linkProperties} />
));
