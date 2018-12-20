export default {
  id: "aboutTheAuthor",
  label: "About the Author",
  fields: [
    { name: "headhot", label: "Headshot", widget: "image" },
    { name: "name", label: "Name", widget: "string" },
    { name: "bio", label: "Bio", widget: "markdown" },
    { name: "chapterDescription", label: "Chapter Description", widget: "markdown" },
    { name: "interviewDescription", label: "Interview Description", widget: "markdown" },
  ],
  pattern: new RegExp(`:::md-component AboutTheAuthor headshot="(.*)" name="(.*)" bio="(.*)" chapterDescription="(.*)" interviewDescription="(.*)"$`),
  fromBlock: function(match) {
    return {
      headshot: match[1],
      name: match[2],
      bio: match[3],
      chapterDescription: match[4],
      interviewDescription: match[5],
    };
  },
  toBlock: function(obj) {
    return `:::md-component AboutTheAuthor headshot="${obj.headshot}" name="${escape(obj.name)}" bio="${escape(obj.bio)}"` + 
      ` chapterDescription="${escape(obj.chapterDescription)}" interviewDescription="${escape(obj.interviewDescription)}`;
  },
  toPreview: function(obj) {
    return `About the Author ${unescape(obj.name)}`;
  }
};