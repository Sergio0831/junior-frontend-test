import clsx from "clsx";
import React, { PureComponent } from "react";
import classes from "./Wrapper.module.scss";

class Wrapper extends PureComponent {
  render() {
    const { className, children } = this.props;

    const wraperClasses = clsx(
      {
        [classes.wrapper]: true
      },
      className
    );

    return <div className={wraperClasses}>{children}</div>;
  }
}

export default Wrapper;
