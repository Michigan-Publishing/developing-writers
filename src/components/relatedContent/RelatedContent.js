import React from "react";
import styled from "styled-components";
import palette from "../../utils/palette";
import { textCss } from "../text/Text";

const ContentWrapper = styled.div`
  ${textCss}
  background-color: ${palette.relatedBackground};
  color: ${palette.white};
  overflow-y: scroll;
  padding: 20px;
  max-height: 80vh; 
  max-width: 50vw;
  margin-left: 25vw;
  position: relative;
  top: 10vh;
`;

const Link = styled.a`
  color: ${palette.white};
`;

const Heading = styled.h4`
  color: ${palette.white};
  margin: 0px;
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
