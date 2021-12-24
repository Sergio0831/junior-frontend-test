import clsx from "clsx";
import React, { PureComponent } from "react";
import Button from "./Button";
import classes from "./ButtonAmount.module.scss";

class ButtonAmount extends PureComponent {
  render() {
    const { className, onClick, children, plus, minus, modal } = this.props;

    const buttonClasses = clsx(
      {
        [classes.amount]: true,
        [classes.amount__plus]: plus,
        [classes.amount__minus]: minus,
        [classes.amount__modal]: modal
      },
      className
    );

    return (
      <Button onClick={onClick} className={buttonClasses}>
        {children}
      </Button>
    );
  }
}

export default ButtonAmount;
