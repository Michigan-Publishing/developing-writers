import React, { Component, Fragment } from "react";
import styled from "styled-components";

import WordCloud from "react-d3-cloud";
import palette from "../../utils/palette";

import VisuallyHidden from "../visuallyHidden";

const data = [
  { text: "Some item", value: 1000 },
  { text: "Another", value: 200 },
  { text: "Third one", value: 800 },
  { text: "Fourth one", value: 1000000 },
  { text: "Fifth one", value: 10 }
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 45;

const Wrapper = styled.div`
  background-color: ${palette.white};
`;

export default class extends Component {
  render() {
    return (
      <Wrapper>
        <span aria-hidden="true">
          <WordCloud
            data={data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            width={600}
            height={500}
          />
        </span>
        <VisuallyHidden>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Occurances</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => (
                <tr>
                  <td>{item.text}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </VisuallyHidden>
      </Wrapper>
    );
    return <h1>Word cloud</h1>;
  }
}
