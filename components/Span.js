import React, { Component } from "react";
import styled from "react-emotion";

const StyledSpan = styled("span")`
  color: ${props => props.color};
  position: relative;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  font-weight: ${props => props.weight};

  &:hover {
    background-color: ${props => props.color};
    color: white;
    padding: ${props => props.expand}px;
    margin: -${props => props.expand}px;

    & a {
      color: white;
    }
  }
`;

const spanColors = ["blue", "red", "black"];
const spanWeights = [300, 400, 500, 600];

export default class Span extends Component {
  constructor(props) {
    super(props);
    this.weight = spanWeights[Math.floor(Math.random() * spanWeights.length)];
    this.color = spanColors[Math.floor(Math.random() * spanColors.length)];
    this.expand = Math.random() * 50;
    this.left = Math.random() * 26 - 13;
    this.top = Math.random() * 16 - 8;
  }

  render() {
    return (
      <StyledSpan
        size={this.size}
        expand={this.expand}
        weight={this.weight}
        color={this.color}
        left={this.left}
        top={this.top}
      >
        {this.props.children}
      </StyledSpan>
    );
  }
}
