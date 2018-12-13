import { videoFields, imageVideoBlock, imageVideoPattern } from './functions';

const fulcrumType = 'video';
export default {
  id: "fulcrumVideo",
  label: "Fulcrum Video Asset",
  fields: videoFields,
  pattern: imageVideoPattern(fulcrumType),
  fromBlock: function(match) {
    console.log('MATCH!!!!', match);
    return {
      handle: match[1],
      title: unescape(match[2]),
      width: match[3],
    };
  },
  toBlock: function(obj) {
    console.log('TOBLOCK OBJ', obj);
    return imageVideoBlock(fulcrumType, obj.handle, obj.title, obj.width);
  },
  toPreview: function(obj) {
    console.log('PREVIEW OBJ',obj);
    return imageVideoBlock(fulcrumType, obj.handle, obj.title, obj.width);
  }
};