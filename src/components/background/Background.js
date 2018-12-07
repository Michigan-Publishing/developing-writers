import React from "react";
import standard from "./background.jpg";
import styled from "styled-components";
import throttle from "lodash.throttle";

const BackgroundContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
`;

const BackgroundBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
`;
const Background = styled.div`
  background: url(${props => props.src}) no-repeat center center fixed;
  background-origin: border-box;
  background-size: cover;
  transform-origin: top center;
  transform: perspective(500px)
    skewY(-${props => props.backgroundCalculation / 1000}turn)
    scale(${props => 1 + props.backgroundCalculation / 200});
  transition: transform 200ms;
  min-width: 100%;
  min-height: 100%;
`;

function getPercentScrolled() {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

export default class BackgroundWrapper extends React.Component {
  state = { backgroundCalculation: 0 };
  element = React.createRef();
  componentDidMount() {
    window.addEventListener("scroll", this.throttledOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledOnScroll);
  }

  onScroll = e => {
    const percentScrolled = getPercentScrolled();

    this.setState({
      backgroundCalculation: percentScrolled
    });
  };

  throttledOnScroll = throttle(this.onScroll, 100);

  render() {
    const { children } = this.props;
    return (
      <BackgroundContainer>
        <BackgroundBox>
          <Background
            src={standard}
            backgroundCalculation={this.state.backgroundCalculation}
          />
        </BackgroundBox>
        {children}
      </BackgroundContainer>
    );
  }
}
