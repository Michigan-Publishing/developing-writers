const fulcrumDefaultFields = [
  { name: "handle", label: "Fulcrum Handle", widget: "string" },
  { name: "title", label: "Title", widget: "string" },
];

const fulcrumImageVideoFields = fulcrumDefaultFields.concat(
  [
    // I don't think this is actually used, but I'm leaving it here for some reason or another.
    // { name: "height", label: "Height", widget: "number" },
    { name: "width", label: "Width", widget: "number" },
  ]);

export const textFields = fulcrumDefaultFields;
export const audioFields = fulcrumDefaultFields;
export const imageFields = fulcrumImageVideoFields;
export const videoFields = fulcrumImageVideoFields;

export const textAudioBlock =  (blockType, handle, title) => `<iframe data-block-type='${blockType}' src='https://www.fulcrum.org/embed?hdl=${handle}' title='${escape(title)}' style='display:block; overflow:hidden; border-width:0; width:98%; max-width:98%; max-height:400px; margin:auto'></iframe>`;
export const imageVideoBlock = (blockType, handle, title, width) => `<div data-block-type='${blockType}' style='width:auto; page-break-inside:avoid; -webkit-column-break-inside:avoid; break-inside:avoid; max-width:${width}px; margin:auto'><div style='overflow:hidden; padding-bottom:56.25%; position:relative; height:0;'><iframe src='https://www.fulcrum.org/embed?hdl=${handle}' title='${escape(title)}' style='overflow:hidden; border-width:0; left:0; top:0; width:100%; height:100%; position:absolute;'></iframe></div></div>`;

export const textAudioPattern = (blockType) => new RegExp(`<iframe data-block-type='${blockType}' src='https://www.fulcrum.org/embed\\?hdl=(.*?)' title='(.*?)'[^>]*></iframe>`, 'g');
export const imageVideoPattern = (blockType) => new RegExp(`<div data-block-type='${blockType}'[^>]*max-width:(.*?)px[^>]*><div[^>]*><iframe src='https:\\/\\/www.fulcrum.org\\/embed\\?hdl=(.*?)' title='(.*?)'[^>]*><\\/iframe><\\/div><\\/div>`, 'g');
