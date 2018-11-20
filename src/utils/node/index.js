// builds a lookup based on key
export const buildFrontmatterLookup = (nodes, includeFields = false) => {
  return nodes.reduce((all, { node: nextNode }) => {
    if (!nextNode.frontmatter) {
      return all;
    }

    const additional = includeFields ? { ...nextNode.fields } : {};
    return {
      ...all,
      [nextNode.frontmatter.key]: { ...nextNode.frontmatter, ...additional }
    };
  }, {});
};
