import CMS from "netlify-cms";

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

const textFields = fulcrumDefaultFields;
const audioFields = fulcrumDefaultFields;
const imageFields = fulcrumImageVideoFields;
const videoFields = fulcrumImageVideoFields;

const textAudioBlock =  (handle, title) => `<iframe src='https://www.fulcrum.org/embed?hdl=${handle}' title='${escape(title)}' style='display:block; overflow:hidden; border-width:0; width:98%; max-width:98%; max-height:400px; margin:auto'></iframe>`;
const imageVideoBlock = (handle, title, width) => `<div style='width:auto; page-break-inside:avoid; -webkit-column-break-inside:avoid; break-inside:avoid; max-width:${width}px; margin:auto'><div style='overflow:hidden; padding-bottom:56.25%; position:relative; height:0;'><iframe src='https://www.fulcrum.org/embed?hdl=${handle}' title='${escape(title)}' style='overflow:hidden; border-width:0; left:0; top:0; width:100%; height:100%; position:absolute;'></iframe></div></div>`;

CMS.registerEditorComponent({
  id: "fulcrumText",
  label: "Fulcrum Text Asset",
  fields: textFields,
  pattern: /^text (\S+)$/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return textAudioBlock(obj.handle, obj.title);
  },
  toPreview: function(obj) {
    return textAudioBlock(obj.handle, obj.title);
  }
});

CMS.registerEditorComponent({
  id: "fulcrumAudio",
  label: "Fulcrum Audio Asset",
  fields: audioFields,
  pattern: /^audio (\S+)$/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return textAudioBlock(obj.handle, obj.title);
  },
  toPreview: function(obj) {
    return textAudioBlock(obj.handle, obj.title);
  }
});

CMS.registerEditorComponent({
  id: "fulcrumImage",
  label: "Fulcrum Image Asset",
  fields: imageFields,
  pattern: /^image (\S+)$/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return imageVideoBlock(obj.handle, obj.title, obj.width);
  },
  toPreview: function(obj) {
    return imageVideoBlock(obj.handle, obj.title, obj.width);
  }
});

CMS.registerEditorComponent({
  id: "fulcrumVideo",
  label: "Fulcrum Video Asset",
  fields: videoFields,
  pattern: /^video (\S+)$/,
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  toBlock: function(obj) {
    return imageVideoBlock(obj.handle, obj.title, obj.width);
  },
  toPreview: function(obj) {
    return imageVideoBlock(obj.handle, obj.title, obj.width);
  }
});