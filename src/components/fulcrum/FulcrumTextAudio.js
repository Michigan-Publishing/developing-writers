import React, { Component } from 'react';
import { FulcrumAudio } from '../../cms/editorComponents';

export default class FulcrumTextAudio extends Component {
  render() {
    const { blockType, handle, title } = this.props;

    return (
      <iframe 
        data-block-type={blockType}
        src={`https://www.fulcrum.org/embed?hdl=${handle}`}
        title={escape(title)}
        style='display:block; overflow:hidden; border-width:0; width:98%; max-width:98%; max-height:400px; margin:auto'>
      </iframe>
    );
  }
}