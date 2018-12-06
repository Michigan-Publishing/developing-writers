import React from "react";
import standard from "./background.jpg";
import styled from "styled-components";
import throttle from "lodash.throttle";

const MAX_SCALE_OFFSET = 200;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  position: fixed;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  background-position: 0px -${props => props.backgroundSize}px;
  height: 120%;
  width: 120%;
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
  state = { backgroundSize: 0 };
  element = React.createRef();
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = e => {
    const percentScrolled = getPercentScrolled();

    this.setState({
      backgroundSize: (percentScrolled * MAX_SCALE_OFFSET) / 100
    });
  };

  render() {
    const { children } = this.props;
    return (
      <BackgroundContainer>
        <Background src={standard} backgroundSize={this.state.backgroundSize} />
        {children}
      </BackgroundContainer>
    );
  }
}
