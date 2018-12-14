import React, { Component } from "react";
import styled from "styled-components";
import BreakpointProvider from "react-breakpoints";

export const breakpointNames = {
  mobile: "mobile",
  mobileLandscape: "mobileLandscape",
  tablet: "tablet",
  tabletLandscape: "tabletLandscape",
  desktop: "desktop",
  desktopLarge: "desktopLarge",
  desktopWide: "desktopWide"
};
export const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920
};

const Breakpoints = ({ children }) => (
  <BreakpointProvider breakpoints={breakpoints}>{children}</BreakpointProvider>
);

export default Breakpoints;
