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

const additionalLinkProperties = [
  ...linkProperties,
  {
    title: "Amet non eu ex",
    href: "http://www.google.com"
  },
  { title: "Sit ullamco in nisi", href: "http://www.google.com" },
  {
    title: "Sunt irure veniam amet",
    href: "http://www.google.com"
  },
  { title: "Lorem occaecat nulla eu", href: "http://www.google.com" },
  {
    title: "Occaecat proident adipisicing cupidatat",
    href: "http://www.google.com"
  },
  {
    title: "Dolor et cupidatat deserunt",
    href: "http://www.google.com"
  },
  {
    title: "Duis eu nulla laborum",
    href: "http://www.google.com"
  },
  {
    title: "Pariatur nostrud consectetur officia",
    href: "http://www.google.com"
  },
  { title: "Magna nostrud in anim", href: "http://www.google.com" },
  {
    title: "Aliqua consectetur sint tempor",
    href: "http://www.google.com"
  },
  {
    title: "Reprehenderit ipsum sunt laboris",
    href: "http://www.google.com"
  },
  {
    title: "Duis esse laborum veniam",
    href: "http://www.google.com"
  },
  {
    title: "Nulla do adipisicing irure",
    href: "http://www.google.com"
  },
  { title: "Cillum sint officia aliqua", href: "http://www.google.com" },
  {
    title: "Eiusmod esse et excepteur",
    href: "http://www.google.com"
  },
  {
    title: "Ut Lorem in non",
    href: "http://www.google.com"
  }
];
storiesOf("SecondaryNavigation", module)
  .add("default", () => (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <SecondaryNavigation linkProperties={linkProperties} />
    </div>
  ))
  .add("With many links", () => (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
      <SecondaryNavigation linkProperties={additionalLinkProperties} />
    </div>
  ));
