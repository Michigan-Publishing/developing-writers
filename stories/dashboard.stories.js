import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import GlobeNav, { NavPosition } from "../src/components/globeNav";
import Orb from "../src/components/orbWrapper";
import Background from "../src/components/background";
import Text from "../src/components/text";
import palette from "../src/utils/palette";

const WhiteText = styled(Text)`
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
`;

function getUpperSettings() {
  return {
    minAngle: 180,
    maxAngle: 275,
    baseAngle: -250,
    menuButtonDiameter: 40,
    flyoutRadius: 550
  };
}

function getLowerSettings() {
  return {
    minAngle: 180,
    maxAngle: 270,
    baseAngle: -82,
    menuButtonDiameter: 30,
    flyoutRadius: 640
  };
}
storiesOf("Dashboard", module).add("default behavior", () => (
  <div style={{ backgroundColor: "#000" }}>
    <Background>
      <GlobeNav
        getFlyoutAngleSettings={getUpperSettings}
        text="Writer's Choice"
      >
        <Orb diameter={200} color={palette.purpleMain}>
          <WhiteText>Sentence Level Features</WhiteText>
        </Orb>
        <Orb diameter={200} color={palette.purpleMain}>
          <WhiteText>Digital Writing</WhiteText>
        </Orb>
        <Orb diameter={200} color={palette.purpleMain}>
          <WhiteText>Genre</WhiteText>
        </Orb>
        <Orb diameter={200} color={palette.purpleMain}>
          <WhiteText>Audience Awareness</WhiteText>
        </Orb>
      </GlobeNav>
      <GlobeNav
        position="BOTTOM"
        getFlyoutAngleSettings={getLowerSettings}
        text="A Writer's Support"
      >
        <Orb diameter={200}>
          <WhiteText>Feedback</WhiteText>
        </Orb>
        <Orb diameter={200}>
          <WhiteText>Reading</WhiteText>
        </Orb>
        <Orb diameter={200}>
          <WhiteText>Practice</WhiteText>
        </Orb>
      </GlobeNav>
    </Background>
  </div>
));
