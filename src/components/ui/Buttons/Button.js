import clsx from "clsx";
import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

class Button extends PureComponent {
  render() {
    const {
      className,
      link,
      children,
      style,
      onClick,
      id,
      value,
      tabIndex,
      name
    } = this.props;

    const buttonClasses = clsx(
      {
        [classes.btn]: true
      },
      className
    );

    if (link) {
      return (
        <Link className={className} onClick={onClick} to={link}>
          {children}
        </Link>
      );
    }
    return (
      <button
        value={value}
        style={style}
        className={buttonClasses}
        onClick={onClick}
        id={id}
        tabIndex={tabIndex}
        name={name}
      >
        {children}
      </button>
    );
  }
}

export default Button;
