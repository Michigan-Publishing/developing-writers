import React, { Component } from "react";
import PieChartGame from '../piechart';

const data = [
  { key: "Something", value: 100, color: "#aaac84" },
  { key: "Other thing", value: 200, color: "#dce7c5" },
  { key: "Final thing", value: 50, color: "#e3a51a" }
];

export default class Game1 extends Component {
  render() {
    return <PieChartGame data={data} />;
  }
}
