import React, { Component } from "react";
import marksy from "marksy/components";

const compile = marksy({
  createElement: React.createElement,
  components: {}
});

const Markdown = ({ children }) => children && compile(children).tree;

export default Markdown;
