import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Background from "../background";
import SiteHeading from "../siteHeading";
import Breadcrumbs from "../breadcrumbs";
import FlyoutMenu from "../flyoutMenu";
import Portal from "../portal";
import HamburgerIcon from "../hamburgerIcon";
import TouchableOpacity from "../touchableOpacity";
import { buildFrontmatterLookup } from "../../utils/node";
import Rect from "@reach/rect";
import palette from "../../utils/palette";
import styles from "../../styles/reset.css";
import global from "../../styles/global.css";

const HeadingWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 1.5) 10%, rgba(0, 0, 0, 0));
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 30px);
  position: fixed;
  top: 0;
`;

const ContentArea = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  margin-top: calc(${props => props.headingHeight}px + 30px);
  position: relative;
`;

const HeadingRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export default class extends Component {
  static defaultProps = {
    showBreadcrumbs: true,
    breadcrumbLinks: []
  };

  state = { showFlyout: false };

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
      <Rect>
        {({ rect, ref }) => (
          <Fragment>
            <HeadingWrapper ref={ref}>
              <HeadingRow>
                <SiteHeading />
                {
                  <TouchableOpacity
                    onClick={() => this.setState({ showFlyout: true })}
                  >
                    <HamburgerIcon />
                  </TouchableOpacity>
                }
              </HeadingRow>
              <HeadingRow>
                <Breadcrumbs items={this.buildBreadcrumbLinks()} />
              </HeadingRow>
            </HeadingWrapper>

            <Background>
              <Portal>
                <FlyoutMenu
                  onClose={() => this.setState({ showFlyout: false })}
                  isVisible={this.state.showFlyout}
                  items={this.buildLinkTree()}
                />
              </Portal>
              <ContentArea headingHeight={rect && rect.height}>
                {this.props.children}
              </ContentArea>
            </Background>
          </Fragment>
        )}
      </Rect>
    );
  }
}
