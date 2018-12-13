export default {
  id: "expandableBlockQuote",
  label: "Expandable Block Quote",
  fields: [
    { name: "previewText", label: "Preview Text", widget: "string" },
    { name: "fullText", label: "Full Text", widget: "markdown" },
  ],
  pattern: "h\\(ExpandableBlockquote, {previewText='(.*)', fullText='(.*)'}, ''\\)", //  new RegExp('^<ExpandableBlockQuote previewText="(.*)" fullText="(.*)" \\/>$'),
  fromBlock: function(match) {
    return {
      previewText: match[1],
      fullText: match[2],
    };
  },
  toBlock: function(obj) {
    return "h(ExpandableBlockquote, {previewText='" + escape(obj.previewText) + "', fullText='" + escape(obj.fullText) + "'}, '')";
  },
  toPreview: function(obj) {
    return obj.fullText;
  }
};
