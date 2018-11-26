import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import palette from "../../utils/palette";
import Markdown from "../markdown";
import chevronDown from "./chevronDown.svg";
import chevronUp from "./chevronUp.svg";

const Container = styled.div`
  margin: 10px 0;
`;

const Title = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.4);
  height: 30px;
  align-items: center;
  color: ${palette.white};
  font-size: 20px;
`;

const RowContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin: ${props => (props.isActive ? "15px 0" : "0")};
  transition: margin 0.25s;
`;

const fadeIn = keyframes`
  0% {
    height: 0%;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
`;

const Body = styled.div`
  padding: 15px;
  animation: 0.5s ${fadeIn} ease-out;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
  color: #fff;
  fill: #fff;
`;

const Row = ({ title, body, isActive, id, onToggleRow }) => (
  <RowContainer isActive={isActive}>
    <Title onClick={() => onToggleRow(id)}>
      {title}
      <Icon src={isActive ? chevronUp : chevronDown} />
    </Title>
    {isActive && (
      <Body>
        <Markdown>{body}</Markdown>
      </Body>
    )}
  </RowContainer>
);
export default class extends Component {
  state = { expandedRowIndex: null };

  onToggleRow = expandedRowIndex => {
    this.setState(previousState => ({
      expandedRowIndex:
        previousState.expandedRowIndex === expandedRowIndex
          ? null
          : expandedRowIndex
    }));
  };

  render() {
    const { points } = this.props;
    const { expandedRowIndex } = this.state;

    return (
      <Container>
        {points.map((point, index) => (
          <Row
            title={point.title}
            key={point.title}
            id={index}
            body={point.point}
            isActive={expandedRowIndex === index}
            onToggleRow={this.onToggleRow}
          />
        ))}
      </Container>
    );
  }
}
