import React from "react";
import marksy from "marksy/components";

const compile = marksy({
  createElement: React.createElement,
  components: {
    ExpandableBlockquote (props) {
      console.log('EXPANDABLE PROPS');
      console.log(props);
      return <h1>Explandable</h1>;
    }
  }
});

const Markdown = ({ children }) => children && compile(children).tree;

export default Markdown;
