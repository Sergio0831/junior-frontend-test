import clsx from "clsx";
import React, { Component } from "react";
import AttributesValue from "../ui/AttributesValue";
import classes from "./ProductAttributes.module.scss";

class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      className,
      productDetailsAttr,
      cartAttr,
      attributes,
      handleItemsSelect,
      cart,
      small
    } = this.props;

    const attributesClasses = clsx(
      {
        [classes.attributes]: true,
        [classes.productDetailsAttr]: productDetailsAttr,
        [classes.cartAttr]: cartAttr
      },
      className
    );

    return (
      <>
        {" "}
        {attributes.length > 0 ? (
          <div className={attributesClasses}>
            {attributes.map((attr) => (
              <div key={attr.name}>
                {!cart && (
                  <h5 className={classes.attributes__name}>{attr.name}:</h5>
                )}
                <div className={classes.attributes__value}>
                  {attr.items.map((item) => (
                    <AttributesValue
                      key={item.id}
                      itemValue={item.value}
                      handleItemsSelect={handleItemsSelect}
                      onChange={this.onChange}
                      attrName={attr.name}
                      attrType={attr.type}
                      small={small}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default ProductAttributes;
