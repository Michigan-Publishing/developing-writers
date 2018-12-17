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

export const textAudioBlock =  (blockType, handle, title) => `:::md-component FulcrumTextAudio blockType="${blockType}" handle="${handle}" title="${escape(title)}"`
export const imageVideoBlock = (blockType, handle, title, width) => `:::md-component FulcrumImageVideo blockType="${blockType}" handle="${handle}" title="${escape(title)}" width="${width}"`;

export const textAudioPattern = (blockType) => new RegExp(`:::md-component FulcrumTextAudio blockType="${blockType}" handle="(.*?)" title="(.*?)"`, 'g');
export const imageVideoPattern = (blockType) => new RegExp(`:::md-component FulcrumImageVideo blockType="${blockType}" handle="(.*?)" title="(.*?)" width="(.*?)"`, 'g');
