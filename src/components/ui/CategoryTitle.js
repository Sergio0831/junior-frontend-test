import React, { PureComponent } from "react";
import classes from "./CategoryTitle.module.scss";

class CategoryTitle extends PureComponent {
  render() {
    const { text } = this.props;

    return <h2 className={classes.title}>{text}</h2>;
  }
}

export default CategoryTitle;
