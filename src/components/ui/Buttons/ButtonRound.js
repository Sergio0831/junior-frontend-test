import clsx from "clsx";
import React, { PureComponent } from "react";
import Cart from "../../icons/Cart";
import Button from "./Button";
import classes from "./ButtonRound.module.scss";

class ButtonRound extends PureComponent {
  render() {
    const buttonClasses = clsx(
      {
        [classes.round]: true
      },
      this.props.className
    );

    return (
      <Button className={buttonClasses} onClick={this.props.onClick}>
        <Cart />
      </Button>
    );
  }
}

export default ButtonRound;
