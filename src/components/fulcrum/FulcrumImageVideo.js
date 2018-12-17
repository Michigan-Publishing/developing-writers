import React, { Component } from 'react';
import { FulcrumAudio } from '../../cms/editorComponents';
import { RefCountDisposable } from 'rx';

export default class FulcrumAudio extends Component {
  render() {
    const {
      blockType,
      handle,
      title,
      width,
    } = this.props;

    return (
      <div 
        data-block-type={blockType}
        style={`width:auto; page-break-inside:avoid; -webkit-column-break-inside:avoid; break-inside:avoid; max-width:${width}px; margin:auto`}>
          <div style='overflow:hidden; padding-bottom:56.25%; position:relative; height:0;'>
            <iframe 
              src={`https://www.fulcrum.org/embed?hdl=${handle}`}
              title={`${escape(title)}`}
              style='overflow:hidden; border-width:0; left:0; top:0; width:100%; height:100%; position:absolute;'>
            </iframe>
          </div>
      </div>
    );
  }
}