import React, { Component } from "react";
import Head from "next/head";
import styled, { injectGlobal } from "react-emotion";
import Span from "../components/Span";
import Link from "../components/Link";
import Trackable from "../components/Trackable";

injectGlobal`
  html, body {
    margin: 0;
    background-color: white;
    min-height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  }
`;

const Wrapper = styled("div")`
  max-width: 700px;
  font-size: 24px;
  font-weight: 300;
  line-height: 1.3;
  width: 90%;
  margin: auto;
  margin-top: 5em;

  @media (max-width: 600px) {
    margin-top: 2em;
  }
`;

const Strong = styled("span")`
  font-weight: 600;
  font-size: 30px;
  border: 15px solid red;
  padding: 8px;
  margin: -23px;
`;

export default class extends Component {
  render() {
    return (
      <Trackable>
        <Wrapper>
          <p>
            <Strong>Hi there, I'm Paul.</Strong>{" "}
            <Span>
              These days I'm building{" "}
              <Link href="https://veil.market">a new company</Link>
            </Span>{" "}
            <Span>in San Francisco, CA.</Span>{" "}
            <Span>We're making a peer-to-peer</Span>{" "}
            <Span>derivatives platform</Span>{" "}
            <Span>built on open protocols.</Span>
          </p>

          <p>
            <Span>Formerly →</Span> <Span>I helped create things</Span>{" "}
            <Span>
              at <Link href="https://hillstreetlabs.com">Hill Street Labs</Link>.
            </Span>{" "}
            <Span>
              And before that I worked at{" "}
              <Link href="https://blog.patientbank.us/saying-goodbye-to-patientbank-7456247851b6">
                PatientBank
              </Link>,
            </Span>{" "}
            <Span>trying to improve</Span>{" "}
            <Span>the way medical records are aggregated and shared.</Span>
          </p>

          <p>
            <Span>I'm a fan of</Span> <Span>(to name just a few things):</Span>{" "}
            <Span>blockchains,</Span> <Span>typography,</Span>{" "}
            <Span>and hip hop.</Span>
          </p>

          <p>
            <Span>
              Here is a link to my{" "}
              <Link href="https://www.twitter.com/pfletcherhill">Twitter</Link>.
            </Span>{" "}
            <Span>
              And here is my{" "}
              <Link href="https://github.com/pfletcherhill">Github</Link>
            </Span>
          </p>
        </Wrapper>
      </Trackable>
    );
  }
}
