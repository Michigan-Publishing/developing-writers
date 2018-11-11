import React from "react";
import styled from "styled-components";

import { Menu, MenuButton, MenuList, MenuLink } from "@reach/menu-button";

import { Spring, animated } from "react-spring";

const List = styled.ul`
  list-style-type: none;
`;
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
    maxAngle: 360,
    yOffset: 0,
    xOffset: 0
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

  const coords = {
    x:
      settings.flyoutRadius * Math.cos(degreesToRadians(angle)) -
      settings.menuButtonDiameter / 2 +
      settings.xOffset,
    y:
      settings.flyoutRadius * Math.sin(degreesToRadians(angle)) +
      settings.menuButtonDiameter / 2 +
      settings.yOffset
  };

  return coords;
}

export default class FlyoutNav extends React.Component {
  settings = null;
  state = { childPositions: [], showItems: false, shouldHide: false };

  static defaultProps = {
    children: []
  };

  componentDidMount() {
    const { children, angleSettings } = this.props;
    this.settings = buildSettings(children.length, angleSettings);

    const childPositions = children.map((item, index) =>
      getChildPosition(index, this.settings)
    );

    window.addEventListener("keydown", this.onKey);
    this.setState({ childPositions });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKey);
  }

  componentDidUpdate() {}

  toggleItems = () => {
    this.setState(
      p => {
        if (p.showItems === true) {
          return { shouldHide: true };
        }

        return { showItems: true };
      },
      () => {
        const element = document.querySelector(
          `#${this.props.id}-list li:first-child`
        );
        console.log(element, `#${this.props.id}-list li:first-child`);
        element.focus();
      }
    );
  };

  onKey = e => {
    if (e.key === "Escape") {
      this.toggleItems();
    }
  };

  /*
    if (event.key === "ArrowDown") {
      const { preSelectionIndex } = this.state;
      const { children } = this.props;
      let nextIndex = preSelectionIndex + 1;
      if (nextIndex < React.Children.count(children)) {
        this.setState({ preSelectionIndex: nextIndex });
      }
    }

    if (event.key === "ArrowUp") {
      const { preSelectionIndex } = this.state;
      let nextIndex = preSelectionIndex - 1;
      if (nextIndex !== -1) {
        this.setState({ preSelectionIndex: nextIndex });
      }
    }

    if (event.key === "Enter") {
      event.preventDefault();
      this.selectAndClose();
    }

    if (event.key === "Escape") {
      this.setState({ isOpen: false });
    }
  };
*/

  render() {
    const { childPositions, showItems, shouldHide } = this.state;
    const { children, renderToggle, style, listStyle, id } = this.props;

    const controlsId = `${id}-list`;

    return childPositions.length > 0 ? (
      <div
        style={{
          ...style
        }}
      >
        {renderToggle(this.toggleItems, id, controlsId, showItems)}
        <List
          style={listStyle}
          role="menu"
          aria-labeld-by={id}
          tabindex="-1"
          id={controlsId}
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
                    tabIndex="-1"
                  >
                    {children[index]}
                  </animated.li>
                )}
              </Spring>
            ))}
        </List>
      </div>
    ) : null;
  }
}
