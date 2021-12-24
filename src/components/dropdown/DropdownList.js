import getSymbolFromCurrency from "currency-symbol-map";
import React, { PureComponent } from "react";
import classes from "./DropdownList.module.scss";
import Button from "../ui/Buttons/Button";

class DropdownList extends PureComponent {
  render() {
    const { currencies, selectItem } = this.props;

    return (
      <div
        className={classes.list}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {currencies.map((currency) => (
          <Button
            onClick={(e) => {
              e.stopPropagation();
              selectItem(currency);
            }}
            key={currency}
            className={classes.list__item}
          >
            <span>{getSymbolFromCurrency(currency)}</span>
            {currency}
          </Button>
        ))}
      </div>
    );
  }
}

export default DropdownList;
