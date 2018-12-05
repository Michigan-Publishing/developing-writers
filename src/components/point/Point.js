import React, { Component } from "react";
import styled from "styled-components";
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
