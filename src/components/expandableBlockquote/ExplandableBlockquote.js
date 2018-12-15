import React from 'react';

export default ({ previewText, fullText }) => <h1>{unescape(previewText)} - {unescape(fullText)}</h1>;