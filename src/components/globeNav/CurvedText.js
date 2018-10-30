import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
const Text = styled.text`
  fill: ${palette.mainNavText};
  font: bold 32px sans-serif;
`;
const getPath = (isTopRight = true) =>
  isTopRight
    ? "M0,3.071 C54.5456609,8.53579675 104.75181,22.8402267 150.618447,45.9842899 C174.865741,58.2193465 194.349692,69.6155742 210.589626,80.4592637 C248.280502,105.626124 268.497589,127.816757 290.23446,150.610175 C317.549005,179.252377 340.193402,211.663904 358.16765,247.844756 C370.421346,272.510552 382.585766,310.768765 394.660911,362.619393 C396.898195,372.226279 400.247224,387.686482 404.708,409"
    : "M0,3.071 C54.5456609,8.53579675 104.75181,22.8402267 150.618447,45.9842899 C174.865741,58.2193465 194.349692,69.6155742 210.589626,80.4592637 C248.280502,105.626124 268.497589,127.816757 290.23446,150.610175 C317.549005,179.252377 340.193402,211.663904 358.16765,247.844756 C370.421346,272.510552 382.585766,310.768765 394.660911,362.619393 C396.898195,372.226279 400.247224,387.686482 404.708,409";

export default class extends React.Component {
  render() {
    const { children, style } = this.props;

    return (
      <svg
        viewBox="0 0 405 407"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
      >
        <path
          id="MyPath"
          fill="none"
          stroke="none"
          d={getPath(false)}
          style={{ transform: "translateX(300)" }}
        />

        <Text x="50%">
          <textPath href="#MyPath">{children}</textPath>
        </Text>
      </svg>
    );
  }
}
