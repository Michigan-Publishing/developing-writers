import CMS from "netlify-cms";

import ForTeachers from "./components/ForTeachers";

CMS.registerEditorComponent({
  // Internal id of the component
  id: "something",
  // Visible label
  label: "Something ",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    { name: "label", label: "Image", widget: "string" },
    { name: "title", label: "Title", widget: "string" },
    { name: "id", label: "Id", widget: "string" }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^something (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return `<h1>${obj.id}</h1>`;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return `<div>${obj.id}</div>`;
  }
});
