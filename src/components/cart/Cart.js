import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NotificationTitle from "../ui/NotificationTitle";
import classes from "./Cart.module.scss";
import CartProduct from "./CartProduct";

class Cart extends PureComponent {
  render() {
    const { cart = [], currency } = this.props;

    return (
      <section className={classes.cart}>
        <h1 className={classes.cart__title}>cart</h1>
        <div className={classes.cart__products}>
          {cart.length === 0 ? (
            <NotificationTitle>Your cart is empty</NotificationTitle>
          ) : (
            cart.map((product) => (
              <CartProduct
                currency={currency}
                key={product.id}
                product={product}
              />
            ))
          )}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart } = state.cart;
  const { currency } = state.currency;

  return {
    cart: cart,
    currency: currency
  };
};

export default connect(mapStateToProps)(Cart);
