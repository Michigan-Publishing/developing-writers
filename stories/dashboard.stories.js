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
import TouchableOpacity from "../src/components/touchableOpacity";
import Flyout from "../src/components/flyoutNav";

const WhiteText = styled(Text)`
  color: #fff;
  font-size: ${props => props.size || 2}rem;
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
    flyoutRadius: 600
  };
}
storiesOf("Dashboard", module).add("default behavior", () => (
  <div style={{ backgroundColor: "#000" }}>
    <Background>
      <GlobeNav
        getFlyoutAngleSettings={getUpperSettings}
        topText="A Writer's"
        bottomText="Choice"
        bottomDx={65}
        bottomDy={-3}
      >
        <Flyout
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <Orb diameter={200} color={palette.purpleMain}>
                <WhiteText>Sentence Level Features</WhiteText>
              </Orb>
            </TouchableOpacity>
          )}
          angleSettings={{
            ...getUpperSettings(),
            flyoutRadius: 200,
            baseAngle: -280,
            xOffset: 100,
            yOffset: 50
          }}
        >
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
        </Flyout>
        <Flyout
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <Orb diameter={200} color={palette.purpleMain}>
                <WhiteText>Digital Writing</WhiteText>
              </Orb>
            </TouchableOpacity>
          )}
          angleSettings={{
            ...getUpperSettings(),
            flyoutRadius: 200,
            baseAngle: -240,
            xOffset: 80,
            yOffset: 50
          }}
        >
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
        </Flyout>
        <Flyout
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <Orb diameter={200} color={palette.purpleMain}>
                <WhiteText>Genre</WhiteText>
              </Orb>
            </TouchableOpacity>
          )}
          angleSettings={{
            ...getUpperSettings(),
            flyoutRadius: 200,
            baseAngle: -200,
            xOffset: 50,
            yOffset: 50
          }}
        >
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
        </Flyout>
        <Flyout
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <Orb diameter={200} color={palette.purpleMain}>
                <WhiteText>Audience Awareness</WhiteText>
              </Orb>
            </TouchableOpacity>
          )}
          angleSettings={{
            ...getUpperSettings(),
            flyoutRadius: 200,
            baseAngle: -220,
            xOffset: 50,
            yOffset: 50
          }}
        >
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
        </Flyout>
      </GlobeNav>
      <GlobeNav
        position="BOTTOM"
        getFlyoutAngleSettings={getLowerSettings}
        topText="A Writer's"
        bottomText="Support"
        bottomDx={55}
        bottomDy={-5}
      >
        <Flyout
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <Orb diameter={200}>
                <WhiteText>Feedback</WhiteText>
              </Orb>
            </TouchableOpacity>
          )}
          angleSettings={{
            ...getLowerSettings(),
            flyoutRadius: 200,
            xOffset: 50
          }}
        >
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
        </Flyout>
        <Flyout
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <Orb diameter={200}>
                <WhiteText>Reading</WhiteText>
              </Orb>
            </TouchableOpacity>
          )}
          angleSettings={{
            ...getLowerSettings(),
            flyoutRadius: 220,
            xOffset: 100,
            yOffset: 40
          }}
        >
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
        </Flyout>
        <Flyout
          renderToggle={toggle => (
            <TouchableOpacity onClick={toggle}>
              <Orb diameter={200}>
                <WhiteText>Practice</WhiteText>
              </Orb>
            </TouchableOpacity>
          )}
          angleSettings={{
            ...getLowerSettings(),
            flyoutRadius: 250,
            xOffset: 100,
            yOffset: 40
          }}
        >
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
          <Orb color="#FFF">
            <WhiteText size={1.5}>Option</WhiteText>
          </Orb>
        </Flyout>
      </GlobeNav>
    </Background>
  </div>
));
