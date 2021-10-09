import React, { Component } from "react";
import { FooterHelp, Link } from "@shopify/polaris";
export default class footer extends Component {
  render() {
    return (
      <div>
        <FooterHelp>
          Learn more about us{" "}
          <Link external url="https://www.google.com">
            click for more help!
          </Link>
        </FooterHelp>
      </div>
    );
  }
}
