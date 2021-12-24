import clsx from "clsx";
import React, { PureComponent } from "react";
import Button from "./Button";
import classes from "./ButtonFill.module.scss";

class ButtonFill extends PureComponent {
  render() {
    const { className, onClick, children, small } = this.props;

    const buttonClasses = clsx(
      {
        [classes.fill]: true,
        [classes.fill__small]: small
      },
      className
    );

    return (
      <Button className={buttonClasses} onClick={onClick}>
        {children}
      </Button>
    );
  }
}

export default ButtonFill;
