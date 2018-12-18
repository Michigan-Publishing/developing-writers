export default {
  id: "wordChartGame",
  label: "Word Chart Game",
  fields: [],
  pattern: new RegExp(`:::md-component WordChart$`),
  fromBlock: function() {
    return {
    };
  },
  toBlock: function() {
    return ":::md-component WordChart";
  },
  toPreview: function() {
    return 'Word Chart Game';
  }
};