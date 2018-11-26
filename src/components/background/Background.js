import React from "react";
import styled from "styled-components";
import standard from "./background-transparent.png";
import webp from "./background.webp";

const Background = styled.div`
  background-color: #000;
  background: url(${props => props.src}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const BackgroundWrapper = ({ children, src }) => (
  <Background src={src}>{children}</Background>
);

async function supportsWebp() {
  if (!createImageBitmap) return false;

  const webpData =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

class BackgroundSourceWrapper extends React.Component {
  state = { isLoading: true, src: null };

  async componentDidMount() {
    const useWebp = await supportsWebp();

    this.setState({
      isLoading: false,
      src: useWebp ? webp : standard
    });
  }

  render() {
    const { isLoading, src } = this.state;

    return isLoading ? null : <BackgroundWrapper {...this.props} src={src} />;
  }
}

export default BackgroundSourceWrapper;
