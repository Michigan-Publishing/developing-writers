import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

const ContentWrapper = styled.div`
  ${textCss}
  background-color: rgba(${palette.rgbRelatedBackground}, .9);
  box-shadow: 0px 0px 100px rgba(${palette.rgbRelatedBackground}, 100);
  color: ${palette.white};
  overflow-y: scroll;
  padding: 20px;
  max-height: 80vh;
  width: 50vw;
  margin-top: 90px;
  align-self: center;
`;

const Link = styled.a`
  color: ${palette.white};
`;

const Heading = styled.h3`
  color: ${palette.white};
  margin: 0px;
  font-size: 20px;
  font-weight: 800;
`;

const ListContainer = styled.ul`
  padding: 0;
  margin-left: 10px;
  list-style-type: none;
`;

const ListItem = styled.li`
  margin: 20px 0;
`;

export default class extends React.Component {
  render() {
    const { relatedLinks } = this.props;
    return (
      <ContentWrapper>
        <Heading>Related Content</Heading>
        <ListContainer>
          {relatedLinks.map(link => (
            <ListItem>
              <Link href={link.href}>{link.title}</Link>
            </ListItem>
          ))}
        </ListContainer>
      </ContentWrapper>
    );
  }
}
