import { textFields, textAudioBlock, textAudioPattern } from './functions';

const fulcrumType = 'text';
export default {
  id: "fulcrumText",
  label: "Fulcrum Text Asset",
  fields: textFields,
  pattern: textAudioPattern(fulcrumType),
  fromBlock: function(match) {
    return {
      handle: match[1],
      title: match[2],
    };
  },
  toBlock: function(obj) {
    return textAudioBlock(fulcrumType, obj.handle, obj.title);
  },
  toPreview: function(obj) {
    return textAudioBlock(fulcrumType, obj.handle, obj.title);
  }
};