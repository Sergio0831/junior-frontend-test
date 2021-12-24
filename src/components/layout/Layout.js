import React, { PureComponent } from "react";
import Wrapper from "../ui/Wrapper";
import Header from "./Header";
import CartModal from "../cart/CartModal";

class Layout extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Header location={this.props.location} />
        <CartModal />
        <main>{this.props.children}</main>
      </Wrapper>
    );
  }
}

export default Layout;
