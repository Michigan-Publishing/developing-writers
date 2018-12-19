import React, { Component } from 'react';
import TouchableOpacity from '../touchableOpacity';
import Markdown from '../../components/markdown';
import pallette from '../../utils/palette'

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
    const opacityStyle = { color: pallette.white, cursor: 'pointer' };

    return (
      this.state.expanded ? 
      <blockquote>
        <Markdown>{unescape(this.props.fullText)}</Markdown>&nbsp;
        <TouchableOpacity style={opacityStyle} onClick={this.toggleExpanded}>[Less]</TouchableOpacity>
      </blockquote> : 
      <blockquote>
        {unescape(this.props.previewText)}&nbsp;
        <TouchableOpacity style={opacityStyle} onClick={this.toggleExpanded}>[More]</TouchableOpacity>
      </blockquote>
    )
  }
}
