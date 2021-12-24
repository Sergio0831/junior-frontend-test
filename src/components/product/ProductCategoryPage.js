import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import {
  getAllProducts,
  getProductsByCategoryQuery
} from "../../queries/queries";
import ProductsList from "./ProductsList";
import Product from "./Product";
import CategoryTitle from "../ui/CategoryTitle";
import classes from "./ProductCategoryPage.module.scss";

class ProductCategoryPage extends PureComponent {
  render() {
    const { categoryName } = this.props.match.params;

    return (
      <section className={classes.section}>
        <CategoryTitle text={categoryName} />
        {categoryName === "all" ? (
          <Query query={getAllProducts}>
            {({ loading, error, data }) => {
              if (loading) return <h2>Loading...</h2>;
              if (error) return <h2>Error: error</h2>;
              if (data) {
                const { products } = data.category;
                return (
                  <ProductsList>
                    {products.map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                  </ProductsList>
                );
              }
            }}
          </Query>
        ) : (
          <Query
            query={getProductsByCategoryQuery}
            variables={{ title: categoryName }}
          >
            {({ loading, error, data }) => {
              if (loading) return <h2>Loading...</h2>;
              if (error) return <h2>Error: error</h2>;
              if (data) {
                const { products } = data.category;
                return (
                  <ProductsList>
                    {products.map((product) => (
                      <Product key={product.id} product={product} />
                    ))}
                  </ProductsList>
                );
              }
            }}
          </Query>
        )}
      </section>
    );
  }
}

export default ProductCategoryPage;
