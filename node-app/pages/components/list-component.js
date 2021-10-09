import React, { Component } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { ResourceItem, ResourceList } from "@shopify/polaris";
export default class ListComponent extends Component {
  itemData = [
    { id: 1, name: "jack" },
    { id: 2, name: "john wick" },
  ];
  render() {
    return (
      <>
        <ResourceItem renderItem={this.renderFn}></ResourceItem>
      </>
    );
  }
  sortList = (
    <ResourceList items={this.itemData} />
  );
  renderFn = () => {
    const items = this.itemData;
    console.log(items)
  };
}
