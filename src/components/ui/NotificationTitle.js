import clsx from "clsx";
import React, { PureComponent } from "react";
import classes from "./NotificationTitle.module.scss";

class NotificationTitle extends PureComponent {
  render() {
    const { children, modal } = this.props;

    const titleClasses = clsx({
      [classes.title]: true,
      [classes.title__modal]: modal
    });

    return <h2 className={titleClasses}>{children}</h2>;
  }
}

export default NotificationTitle;
