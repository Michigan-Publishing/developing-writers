import React, { Component } from 'react';

export default class ExpandableBlockquote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleExpanded = (e) => {
    e.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      this.state.expanded ? 
      <blockquote>{unescape(this.props.fullText)} <a href="/" onClick={this.toggleExpanded}>[Less]</a></blockquote> : 
      <blockquote>{unescape(this.props.previewText)} <a href="/" onClick={this.toggleExpanded}>[More]</a></blockquote>
    )
  }
}


// ({ previewText, fullText }) => <h1>{unescape(previewText)} - {unescape(fullText)}</h1>;