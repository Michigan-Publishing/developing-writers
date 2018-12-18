import React from "react";
import marksy from "marksy/components";
import ExpandableBlockquote from '../expandableBlockquote';
import { FulcrumImageVideo, FulcrumTextAudio } from '../fulcrum'
import { Game1, Game2, PieChart, WordCloud } from '../games';

const compile = marksy({
  createElement: React.createElement,
  components: {
    ExpandableBlockquote,
    FulcrumImageVideo,
    FulcrumTextAudio,
    Game1,
    Game2,
    PieChart,
    WordCloud,
  }
});

const Markdown = ({ children }) =>  children && compile(children).tree;

export default Markdown;
