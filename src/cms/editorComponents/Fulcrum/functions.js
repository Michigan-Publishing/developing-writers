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

// EXTRA THINGS FOR TESTING
const divString = "<div data-block-type='video' style='width:auto; page-break-inside:avoid; -webkit-column-break-inside:avoid; break-inside:avoid; max-width:350px; margin:auto'><div style='overflow:hidden; padding-bottom:56.25%; position:relative; height:0;'><iframe src='https://www.fulcrum.org/embed?hdl=2027/fulcrum.1v53jx99p' title='Video%20Test' style='overflow:hidden; border-width:0; left:0; top:0; width:100%; height:100%; position:absolute;'></iframe></div></div>";

String.prototype.originalMatchFunction = String.prototype.match;

String.prototype.match = function(val) {
  const matches = this.originalMatchFunction.apply(this, arguments);

  if(this && this.indexOf('In our study,') == 0 && val && val.toString().indexOf("data-block-type='video'") > 0){
    console.log('THIS');
    console.log(this);
    console.log("MATCH VALUE");
    console.log(val);

    if(matches) {
      console.log('MATCHES');
      console.log(matches);
    }
  }

  return matches;
}

console.log("MATCHING!!!!", 
divString.match(imageVideoPattern('video'))); 