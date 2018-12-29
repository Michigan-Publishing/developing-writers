import React, { Component } from "react";
import WordCloudGame from '../wordcloud';

const data = [
  { text: "Some item", value: 1000 },
  { text: "Another", value: 200 },
  { text: "Third one", value: 800 },
  { text: "Fourth one", value: 1000000 },
  { text: "Fifth one", value: 10 }
];

export default class WordCloud extends Component {
  render() {
    return <WordCloudGame data={data} />;
  }
}
