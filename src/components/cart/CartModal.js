import getSymbolFromCurrency from "currency-symbol-map";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { hideModal } from "../../features/modalSlice";
import ButtonFill from "../ui/Buttons/ButtonFill";
import ButtonOutline from "../ui/Buttons/ButtonOutline";
import Modal from "../ui/Modal";
import NotificationTitle from "../ui/NotificationTitle";
import classes from "./CartModal.module.scss";
import CartModalProduct from "./CartModalProduct";

class CartModal extends PureComponent {
  render() {
    const { hideModal, qty, cart, currency, modal } = this.props;

    const productPrice = cart.map((product) =>
      product.priceToCart.map((price) => ({
        ...price,
        currency: currency,
        amount: product.prices.filter((price) => price.currency === currency)
      }))
    );

    const finalPrice = productPrice.map((item) => item[0].amount[0]);

    const totalAmount = cart.reduce((cartTotal, cartItem) => {
      const { quantity } = cartItem;

      const itemTotal = quantity * finalPrice[0].amount;

      cartTotal += itemTotal;
      return cartTotal;
    }, 0);

    return (
      <Modal modal={modal} hideModal={hideModal}>
        {cart.length === 0 ? (
          <NotificationTitle modal>Your cart is empty</NotificationTitle>
        ) : (
          <>
            {" "}
            <h2 className={classes.modal__title}>
              My Bag,{" "}
              <span>
                {qty} {qty === 1 ? "item" : "items"}
              </span>
            </h2>
            {cart.map((product) => (
              <CartModalProduct
                currency={currency}
                key={product.id}
                product={product}
              />
            ))}
            <div className={classes.modal__total}>
              <h4>Total</h4>
              <p>
                {getSymbolFromCurrency(currency)}
                {parseFloat(totalAmount.toFixed(2))}
              </p>
            </div>
            <div className={classes.modal__buttons}>
              <ButtonOutline onClick={() => hideModal()} link={"/cart"}>
                view bag
              </ButtonOutline>
              <ButtonFill small>check out</ButtonFill>
            </div>{" "}
          </>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  const { cart, cartTotalQuantity } = state.cart;
  const { visible } = state.modal;

  return {
    qty: cartTotalQuantity,
    cart: cart,
    currency: state.currency.currency,
    modal: visible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
