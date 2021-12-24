import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { toggleModal } from "../../features/modalSlice";
import Cart from "../icons/Cart";
import Logo from "../icons/Logo";
import Button from "../ui/Buttons/Button";
import Categories from "../categories/Categories";
import Wrapper from "../ui/Wrapper";
import classes from "./Header.module.scss";
import Dropdown from "../dropdown/Dropdown";

class Header extends PureComponent {
  render() {
    const { qty, toggleModal } = this.props;

    return (
      <header className={classes.header}>
        <Wrapper className={classes.header__wrapper}>
          <Categories />
          <Logo />
          <div className={classes.actions}>
            <Dropdown />
            <div className={classes.cart}>
              <Button
                onClick={() => {
                  toggleModal();
                }}
                className={classes.cart__btn}
              >
                <Cart />
              </Button>
              {qty > 0 && <span className={classes.cart__qty}>{qty}</span>}
            </div>
          </div>
        </Wrapper>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { cartTotalQuantity } = state.cart;
  const { visible } = state.modal;

  return {
    qty: cartTotalQuantity,
    modal: visible
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(toggleModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
