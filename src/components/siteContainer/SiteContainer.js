import React, { Component } from "react";
import styled from "styled-components";
import Background from "../background";
import SiteHeading from "../siteHeading";
import Breadcrumbs from "../breadcrumbs";
import { buildFrontmatterLookup } from "../../utils/node";

const ContentArea = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  position: relative;
`;
export default class extends Component {
  static defaultProps = {
    showBreadcrumbs: true,
    breadcrumbLinks: []
  };

  shouldShowBreadcrumbs = () => {
    return (
      this.props.showBreadcrumbs &&
      this.props.data &&
      this.props.data.allMdx &&
      this.props.data.allMdx.edges
    );
  };

  componentDidMount() {
    this.buildLinkTree();
  }

  buildLinkTree = () => {
    const {
      pageContext: { key },
      data: {
        allMdx: { edges: nodes }
      }
    } = this.props;

    const lookup = buildFrontmatterLookup(nodes, true, true);
    return lookup;
  };

  buildBreadcrumbLinks = () => {
    if (this.shouldShowBreadcrumbs()) {
      const {
        pageContext: { key },
        data: {
          allMdx: { edges: nodes }
        }
      } = this.props;
      const lookup = buildFrontmatterLookup(nodes, true);

      // walk backwards up the lookup starting with this key
      let currentKey = key;
      let list = [];
      while (currentKey) {
        const data = lookup[currentKey];
        list.push({
          title: data.title,
          slug: data.slug
        });
        currentKey = data.parentKey;
      }

      list.push({
        title: "home",
        slug: "/"
      });
      const output = list.reverse();
      return output;
    }
  };

  render() {
    const shouldShowBreadcrumbs = this.shouldShowBreadcrumbs();
    return (
      <Background>
        <SiteHeading />
        {shouldShowBreadcrumbs && (
          <Breadcrumbs items={this.buildBreadcrumbLinks()} />
        )}
        <ContentArea>{this.props.children}</ContentArea>
      </Background>
    );
  }
}
