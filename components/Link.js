import React, { Component } from "react";
import styled from "react-emotion";

const StyledLink = styled("a")`
  text-decoration: underline;
  color: blue;
  font-weight: 500;
  padding: 15px;
  margin: -15px;

  &:hover {
    background-color: yellow;
    color: blue !important;
  }
`;

export default class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledLink target="_blank" {...this.props}>
        {this.props.children} ↗
      </StyledLink>
    );
  }
}
