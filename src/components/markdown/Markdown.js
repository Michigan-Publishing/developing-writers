import React from "react";
import marksy from "marksy/components";

const ExpandableBlockquote = () => <h1>Hi</h1>;

const compile = marksy({
  createElement: React.createElement,
  components: {
    ExpandableBlockquote
  }
});

const Markdown = ({ children }) =>  children && compile(children).tree;

export default Markdown;
