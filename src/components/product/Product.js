import React, { PureComponent } from "react";
import classes from "./Product.module.scss";
import clsx from "clsx";
import ButtonRound from "../ui/Buttons/ButtonRound";
import Button from "../ui/Buttons/Button";
import { connect } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { showModal } from "../../features/modalSlice";
import ProductPrice from "./ProductPrice";
import Modal from "../ui/Modal";
import ProductAttributes from "./ProductAttributes";
import NotificationTitle from "../ui/NotificationTitle";
import ButtonFill from "../ui/Buttons/ButtonFill";
import ButtonOutline from "../ui/Buttons/ButtonOutline";

class Product extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      items: []
    };
  }

  componentDidUpdate() {
    const { modalIsOpen } = this.state;

    setTimeout(() => {
      if (modalIsOpen) {
        document.addEventListener("click", this.close);
      } else {
        document.removeEventListener("click", this.close);
      }
    }, 0);
  }

  close = () => {
    this.setState({
      modalIsOpen: false,
      addModal: false
    });
  };

  handleItemsSelect = (e, attrType) => {
    const items = this.state.items;
    const name = e.target.name;
    const value = e.target.value;

    const newItem = {
      attrType: attrType,
      attrName: name,
      itemValue: value
    };

    this.setState({
      items: [...items, newItem].filter((item) => {
        if (item.attrName === name) {
          return item.itemValue === value;
        } else {
          return item;
        }
      })
    });
  };

  handleClick = (e, productToCart) => {
    const { product, addToCart, showModal } = this.props;
    e.stopPropagation();
    if (product.attributes.length > 0) {
      this.setState({
        modalIsOpen: true,
        addModal: true
      });
    } else {
      addToCart(productToCart);
      showModal();
    }
  };

  handleAddToCart = (productToCart) => {
    const { product, addToCart, showModal } = this.props;

    if (product.attributes.length > this.state.items.length) {
      this.setState({
        modalIsOpen: true
      });
    } else {
      addToCart(productToCart);
      showModal();
      this.setState({
        modalIsOpen: false,
        addModal: false
      });
    }
  };

  render() {
    const { currency } = this.props;

    const { id, gallery, name, prices, inStock, category, brand, attributes } =
      this.props.product;

    const { items, modalIsOpen, addModal } = this.state;

    const priceToCart = prices.filter((price) => price.currency === currency);

    const idToCart = items
      .map(
        (item) =>
          item.attrName.replace(/\s/g, "") + item.itemValue.replace(/\s/g, "")
      )
      .join("");

    const productToCart = Object.assign({
      id: id + idToCart,
      brand,
      name,
      prices,
      priceToCart,
      gallery,
      items
    });

    const productClasses = clsx({
      [classes.product]: true,
      [classes.outOfStock]: !inStock
    });

    return (
      <article className={productClasses}>
        <div className={classes.product__image}>
          <img src={gallery[0]} alt={name} />
        </div>
        <ButtonRound
          className={classes.product__button}
          onClick={(e) => this.handleClick(e, productToCart)}
        />
        <div>
          <h3 className={classes.product__title}>{name}</h3>
          <ProductPrice
            currency={currency}
            prices={prices}
            className={classes.product__price}
          />
        </div>
        <Button link={`${category}/${id}`}></Button>
        {!inStock && <h4 className={classes.outOfStockText}>out of stock</h4>}
        {addModal && (
          <Modal modalIsOpen={modalIsOpen}>
            <NotificationTitle>Select attributes</NotificationTitle>
            <ProductAttributes
              productDetailsAttr
              attributes={attributes}
              items={this.state.items}
              handleItemsSelect={this.handleItemsSelect}
            />
            <ButtonOutline
              onClick={() =>
                this.setState({
                  modalIsOpen: false,
                  addModal: false
                })
              }
            >
              return
            </ButtonOutline>
            <ButtonFill
              small
              onClick={() => {
                this.handleAddToCart(productToCart);
              }}
            >
              add to cart
            </ButtonFill>
          </Modal>
        )}
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  const { currency } = state.currency;

  return {
    currency: currency
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    showModal: () => dispatch(showModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
