import React, { Component } from "react";
import styled from "styled-components";
import BreakpointProvider from "react-breakpoints";

export const breakpointSizes = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop"
};

const Breakpoints = ({ children }) => (
  <BreakpointProvider
    breakpoints={{
      [breakpointSizes.mobile]: 320,
      [breakpointSizes.tablet]: 768,
      [breakpointSizes.desktop]: 769
    }}
  >
    {children}
  </BreakpointProvider>
);

export default Breakpoints;
