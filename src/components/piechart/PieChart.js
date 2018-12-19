import React, { Component, Fragment } from "react";
import styled from "styled-components";

import palette from "../../utils/palette";

import VisuallyHidden from "../visuallyHidden";

import { PieChart } from "react-easy-chart";

const Chart = ({ data }) => (
  <Fragment>
    <span aria-hidden="true">
      <PieChart
        labels
        styles={{
          ".chart_lines": {
            strokeWidth: 0
          },
          ".chart_text": {
            fontFamily: "sans-serif",
            fontSize: "1.25rem",
            fill: "#333"
          }
        }}
        data={data}
      />
    </span>
    <VisuallyHidden>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.key}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </VisuallyHidden>
  </Fragment>
);

export default Chart;
