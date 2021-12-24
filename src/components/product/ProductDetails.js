import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import { getProductQuery } from "../../queries/queries";
import classes from "./ProductDetails.module.scss";
import ProductContent from "./ProductContent";
import Gallery from "../gallery/Gallery";

class ProductDetails extends PureComponent {
  render() {
    const { productId } = this.props.match.params;
    return (
      <section className={classes.details}>
        <Query query={getProductQuery} variables={{ id: productId }}>
          {({ loading, error, data }) => {
            if (loading) return <h2>Loading...</h2>;
            if (error) return <h2>Error: error</h2>;
            if (data) {
              const { product } = data;

              return (
                <>
                  <Gallery gallery={product.gallery} />
                  <ProductContent product={product} />
                </>
              );
            }
          }}
        </Query>
      </section>
    );
  }
}

export default ProductDetails;
