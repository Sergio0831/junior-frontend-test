import React, { PureComponent } from "react";
import classes from "./ProductsList.module.scss";

class ProductsList extends PureComponent {
  render() {
    return <div className={classes.products}>{this.props.children}</div>;
  }
}

export default ProductsList;
