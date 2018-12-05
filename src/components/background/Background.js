import React from "react";
import standard from "./background.jpg";
import styled from "styled-components";
import throttle from "lodash.throttle";

const MAX_SCALE_OFFSET = 30;

const Background = styled.div`
  background: url(${props => props.src}) no-repeat center center fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: background-size 2s;
  background-size: ${props => Math.ceil(1.2 * props.backgroundSize || 100)}vw
    ${props => Math.ceil(props.backgroundSize || 100)}vh;
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
  state = { backgroundSize: 100 };
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
      backgroundSize: 100 + (percentScrolled * MAX_SCALE_OFFSET) / 100
    });
  };

  throttledOnScroll = throttle(this.onScroll, 100);

  render() {
    const { children } = this.props;
    return (
      <Background src={standard} backgroundSize={this.state.backgroundSize}>
        {children}
      </Background>
    );
  }
}
