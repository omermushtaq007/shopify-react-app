import React, { Component } from "react";
import { Icon, TopBar, VisuallyHidden } from "@shopify/polaris";

export default class header extends Component {
  state = { searchValue: this.onSearchChange };
  render() {
    return (
      <>
        <TopBar
          showNavigationToggle
          userMenu={this.userMenuMajor}
          searchField={this.searchMenuMajor}
          onSearchResultsDismiss={this.searchResultsDismiss}
        />
        {/* <TopBar.Menu
          activatorContent={
            <span>
            <Icon>icon</Icon>
              <VisuallyHidden>Secondary menu</VisuallyHidden>
              </span>
          }
        /> */}
      </>
    );
  }
  userMenuMajor = (<TopBar.UserMenu name="umer" detail="Developer" />);
  searchMenuMajor = (
    <TopBar.SearchField
      showFocusBorder
      placeholder="Search"
      value={this.state.searchValue}
      onChange={(val) => {
        this.setState({searchValue: val});
        console.log(this.state.searchValue);
      }}
    />
  );
  searchResultsDismiss = (<></>);
}
