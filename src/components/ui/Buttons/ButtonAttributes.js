import React, { PureComponent } from "react";
import classes from "./ButtonAttributes.module.scss";

class ButtonAttributes extends PureComponent {
  render() {
    const { style, name, value, onChange, disabled, id } = this.props;

    return (
      <input
        style={style}
        type='radio'
        value={value}
        id={id}
        name={name}
        onChange={onChange}
        className={classes.button}
        disabled={disabled}
      />
    );
  }
}

export default ButtonAttributes;
