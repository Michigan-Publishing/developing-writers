import React from "react";
import styled from "styled-components";
import { Spring, animated } from "react-spring";

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function buildSettings(numChildren, settings = {}) {
  const defaultSettings = {
    buttonDiameter: 90,
    menuButtonDiameter: 50,
    offset: 0.5,
    separationAngle: 0,
    flyoutRadius: 130,
    baseAngle: -90,
    minAngle: 0,
    maxAngle: 360
  };

  const localSettings = {
    ...defaultSettings,
    ...settings
  };

  const separationAngle =
    (localSettings.maxAngle - localSettings.minAngle) / numChildren;
  localSettings.separationAngle = separationAngle;

  return localSettings;
}

function getChildPosition(index, settings) {
  const angle = settings.baseAngle + index * settings.separationAngle;

  return {
    x:
      settings.flyoutRadius * Math.cos(degreesToRadians(angle)) -
      settings.menuButtonDiameter / 2,
    y:
      settings.flyoutRadius * Math.sin(degreesToRadians(angle)) +
      settings.menuButtonDiameter / 2
  };
}

export default class FlyoutNav extends React.Component {
  settings = null;
  state = { childPositions: [], showItems: false, shouldHide: false };

  componentDidMount() {
    const { children } = this.props;
    this.settings = buildSettings(children.length, {
      minAngle: 180,
      maxAngle: 360,
      baseAngle: 90
    });

    const childPositions = children.map((item, index) =>
      getChildPosition(index, this.settings)
    );

    this.setState({ childPositions });
  }

  componentDidUpdate() {}

  render() {
    const { childPositions, showItems, shouldHide } = this.state;
    const { children } = this.props;
    return childPositions.length > 0 ? (
      <div
        style={{
          marginLeft: 500,
          marginTop: 500,
          display: "flex",
          alignItems: "center"
        }}
      >
        <button
          onClick={() =>
            this.setState(p => {
              if (p.showItems === true) {
                return { shouldHide: true };
              }

              return { showItems: true };
            })
          }
        >
          Show items
        </button>
        <ul
          style={{ position: "relative", height: 0, width: 0, marginLeft: -20 }}
        >
          {showItems &&
            childPositions.map((position, index) => (
              <Spring
                reset={this.state.showItems}
                reverse={this.state.shouldHide}
                from={{ top: 0, left: 0, opacity: 0 }}
                onStart={() => {
                  setTimeout(() => {
                    if (this.state.shouldHide) {
                      this.setState({ shouldHide: false, showItems: false });
                    }
                  }, 500);
                }}
                to={{
                  top: position.y,
                  left: position.x,
                  opacity: 1
                }}
              >
                {props => (
                  <animated.li
                    style={{
                      position: "absolute",
                      top: props.top,
                      left: props.left,
                      opacity: props.opacity
                    }}
                  >
                    {children[index]}
                  </animated.li>
                )}
              </Spring>
            ))}
        </ul>
      </div>
    ) : null;
  }
}
