import getSymbolFromCurrency from "currency-symbol-map";
import React, { PureComponent } from "react";

class ProductPrice extends PureComponent {
  render() {
    const { prices, currency, className } = this.props;

    return (
      <>
        {prices.map(
          (price) =>
            price.currency === currency && (
              <h5 key={currency} className={className}>
                {getSymbolFromCurrency(price.currency)} {price.amount}
              </h5>
            )
        )}
      </>
    );
  }
}

export default ProductPrice;
