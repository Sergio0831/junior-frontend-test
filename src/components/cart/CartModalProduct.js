import getSymbolFromCurrency from "currency-symbol-map";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { decreaseQty, increaseQty } from "../../features/cartSlice";
import ImageSlider from "../slider/ImageSlider";
import ButtonAmount from "../ui/Buttons/ButtonAmount";
import classes from "./CartModalProduct.module.scss";

class CartModalProduct extends PureComponent {
  render() {
    const { product, increase, decrease, currency } = this.props;
    const { id, brand, name, gallery, quantity, priceToCart, items } = product;

    const productPrice = priceToCart.map((price) => ({
      ...price,
      currency: currency,
      amount: product.prices.filter((price) => price.currency === currency)
    }));

    const totalAmount = productPrice[0].amount[0].amount * quantity;

    return (
      <article className={classes.product}>
        <div className={classes.product__info}>
          <h2 className={classes.info__brand}>{brand}</h2>
          <h2 className={classes.info__name}>{name}</h2>
          <h3 className={classes.info__price}>
            {getSymbolFromCurrency(currency)}
            {parseFloat(totalAmount.toFixed(2))}
          </h3>
          <div className={classes.product__attributes}>
            {items.map((item) => {
              const { attrType, attrName, itemValue } = item;
              return (
                <div
                  key={itemValue + attrName}
                  className={classes.product__attribute}
                  style={
                    attrType === "swatch"
                      ? {
                          backgroundColor: itemValue
                        }
                      : {}
                  }
                >
                  {attrType === "swatch" ? "" : itemValue}
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.product__amount}>
          <ButtonAmount plus modal onClick={() => increase(id)} />
          <span className={classes.product__qty}>{quantity}</span>
          <ButtonAmount minus modal onClick={() => decrease(id)} />
        </div>
        <div className={classes.product__image}>
          {gallery.length > 1 ? (
            <ImageSlider gallery={gallery} />
          ) : (
            <img src={gallery[0]} alt={name} />
          )}
        </div>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: (id) => dispatch(increaseQty(id)),
    decrease: (id) => dispatch(decreaseQty(id))
  };
};

export default connect(null, mapDispatchToProps)(CartModalProduct);
