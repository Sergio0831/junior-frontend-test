import clsx from "clsx";
import getSymbolFromCurrency from "currency-symbol-map";
import React, { PureComponent } from "react";
import ChevronDown from "../icons/ChevronDown";
import Button from "../ui/Buttons/Button";
import classes from "./DropdownHeader.module.scss";

class DropdownHeader extends PureComponent {
  render() {
    const { isListOpen, toggleList, currency } = this.props;

    const iconClasses = clsx({
      [classes.icon]: true,
      [classes.rotate]: isListOpen
    });

    return (
      <Button onClick={toggleList} className={classes.header}>
        <div className={classes.header__title}>
          <span>{getSymbolFromCurrency(currency)}</span>
          <ChevronDown className={iconClasses} />
        </div>
      </Button>
    );
  }
}

export default DropdownHeader;
