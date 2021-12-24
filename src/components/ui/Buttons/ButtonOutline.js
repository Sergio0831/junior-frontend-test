import clsx from "clsx";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import classes from "./ButtonOutline.module.scss";

class ButtonOutline extends PureComponent {
  render() {
    const { className, onClick, children, link } = this.props;

    const buttonClasses = clsx(
      {
        [classes.outline]: true
      },
      className
    );

    if (link) {
      return (
        <Link onClick={onClick} to={link} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    return (
      <Button className={buttonClasses} onClick={onClick}>
        {children}
      </Button>
    );
  }
}

export default ButtonOutline;
