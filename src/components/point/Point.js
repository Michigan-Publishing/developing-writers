import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import palette from "../../utils/palette";
import Markdown from "../markdown";

const Container = styled.div`
  margin: 0.75rem 0;
`;

const ContentSection = styled.div`
  margin: 0.75rem 0;
`;
export default class extends Component {
  render() {
    const { points } = this.props;

    return (
      <Container>
        {points.map((point, index) => (
          <ContentSection>
            <h2>{point.title}</h2>
            <Markdown>{point.point}</Markdown>
          </ContentSection>
        ))}
      </Container>
    );
  }
}
