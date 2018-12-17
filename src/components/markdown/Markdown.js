import React from "react";
import marksy from "marksy/components";
import ExpandableBlockquote from '../expandableBlockquote';
import {
  FulcrumImageVideo,
  FulcrumTextAudio
} from '../fulcrum'

const compile = marksy({
  createElement: React.createElement,
  components: {
    ExpandableBlockquote,
    FulcrumImageVideo,
    FulcrumTextAudio,
  }
});

const Markdown = ({ children }) =>  children && compile(children).tree;

export default Markdown;
