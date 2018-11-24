import React, { Component, Fragment } from "react";
import styled from "styled-components";
import marksy from "marksy/components";

const compile = marksy({
  createElement: React.createElement,
  components: {}
});

const Title = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const Body = styled.div``;

const Row = ({ title, body, isActive }) => (
  <Fragment>
    <Title>{title}</Title>
    {isActive && <Body>{compile(body).tree}</Body>}
  </Fragment>
);
export default class extends Component {
  render() {
    const { points } = this.props;

    return points.map(point => (
      <Row title={point.title} body={point.point} isActive={true} />
    ));
  }
}
