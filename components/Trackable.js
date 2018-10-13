import React, { Component } from "react";
import ReactGA from "react-ga";

export default class Trackable extends Component {
  componentDidMount() {
    if (process.env.GA_ID) {
      const ga = ReactGA.initialize(process.env.GA_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  render() {
    return this.props.children;
  }
}
