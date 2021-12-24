import React, { PureComponent } from "react";
import ButtonAttributes from "./Buttons/ButtonAttributes";
import classes from "./AttributesValue.module.scss";
import clsx from "clsx";

class AttributesValue extends PureComponent {
  render() {
    const {
      className,
      itemValue,
      handleItemsSelect,
      onChange,
      attrName,
      attrType,
      disabled
    } = this.props;

    const valueClasses = clsx(
      {
        [classes.value]: true
      },
      className
    );

    return (
      <>
        <ButtonAttributes
          onChange={(e) => {
            onChange(e);
            handleItemsSelect(e, attrType);
          }}
          value={itemValue}
          name={attrName}
          id={itemValue + attrName}
          disabled={disabled}
        />
        <label
          className={valueClasses}
          htmlFor={itemValue + attrName}
          style={
            attrType === "swatch"
              ? {
                  backgroundColor: itemValue
                }
              : {}
          }
        >
          {attrType === "swatch" ? "" : itemValue}
        </label>
      </>
    );
  }
}

export default AttributesValue;
