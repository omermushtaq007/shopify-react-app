import { Heading, Page, TopBar, Icon, VisuallyHidden } from "@shopify/polaris";
import React from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { TopBarExample } from "./components/header";

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page
        title="E Management System"
        className=""
        primaryAction={{
          content: "Add product",
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker resourceType="Product" open={this.state.open} />
        <Heading>Shopify app with Node and React 🎉</Heading>
      </Page>
    );
  }
}

export default Index;
