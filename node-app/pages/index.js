import {
  Heading,
  Page,
  TopBar,
  Icon,
  VisuallyHidden,
  Button,
  Modal,
  TextContainer,
  Form,
  FormLayout,
  TextField,
} from "@shopify/polaris";
import React from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import Header from "./components/header";
import Footer from "./components/footer";
import ListComponent from "./components/list-component";
class Index extends React.Component {
  state = { open: false, open1: false, name: "" };
  render() {
    return (
      <>
        <Header />

        <br />
        <Page
          title="we have huge list of products"
          className="PageComponent"
          primaryAction={{
            content: "Select Products",
            onAction: () => this.setState({ open: true }),
          }}
        >
          <Button
            size="large"
            accessibilityLabel="add product"
            onClick={() => {
              console.log("clicked!!!!!!");
              this.setState({ open1: true });
            }}
          >
            Add Product.
          </Button>
          {/* add button open this modal with form inputs */}
          <Modal
            open={this.state.open1}
            onClose={() => {
              this.setState({ open1: false });
            }}
          >
            <Modal.Section>
              <Form>
                <FormLayout>
                  <TextField
                    label="Name:"
                    value={this.state.name}
                    onChange={() => {}}
                  ></TextField>
                </FormLayout>
              </Form>
            </Modal.Section>
          </Modal>

          <ResourcePicker
            resourceType="Product"
            open={this.state.open}
            onCancel={() => this.setState({ open: false })}
            onSelection={this.handler}
          />
          <Heading>Welcome Shopify app and React 🎉</Heading>
          <ListComponent />
        </Page>
        <Footer />
      </>
    );
  }

  handler = (res) => {
    this.setState({ open: false });
    const idOfProduct = res.selection.map((prod) => prod.id);
    console.log(idOfProduct);
  };
}

export default Index;
