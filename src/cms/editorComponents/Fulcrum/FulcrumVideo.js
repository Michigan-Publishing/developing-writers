import { videoFields, imageVideoBlock, imageVideoPattern, imageVideoPreview } from './functions';

const fulcrumType = 'video';
export default {
  id: "fulcrumVideo",
  label: "Fulcrum Video Asset",
  fields: videoFields,
  pattern: imageVideoPattern(fulcrumType),
  fromBlock: function(match) {
    console.log('MATCH!!!!', match);
    console.log(imageVideoPattern(fulcrumType));
    
    const testVal = imageVideoBlock(fulcrumType, "fulcrum.1v53jx99p", 'Test%20Title', 350);
    const matchVal = imageVideoPattern(fulcrumType).exec(testVal);
    console.log('MATCH VAL');
    console.log(matchVal);
    /*const replaceVal =  // ':::md-component FulcrumImageVideo blockType="video" handle="2027/fulcrum.1v53jx99p" title="Test%20Title" width="350"'
    .replace(imageVideoPattern(fulcrumType), 
      (match, p1, p2, p3) => {
        console.log(`Match: ${match}\np1: ${p1}\np2: ${p2}\np3: ${p3}`);
        return match && p1 ? `<${p1} />` : 'NOMATCH';
      });

    console.log('REPLACE VAL');
    console.log(replaceVal);*/
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
    return imageVideoPreview(fulcrumType, obj.handle, obj.title, obj.width);
  }
};