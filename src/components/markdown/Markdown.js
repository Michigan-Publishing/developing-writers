import React from "react";
import marksy from "marksy/components";
import ExpandableBlockquote from '../expandableBlockquote';

const compile = marksy({
  createElement: React.createElement,
  components: {
    ExpandableBlockquote
  }
});

const Markdown = ({ children }) =>  children && compile(children).tree;

export default Markdown;
