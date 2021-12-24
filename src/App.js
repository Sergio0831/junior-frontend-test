import React, { PureComponent } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Layout from "./components/layout/Layout";
import ProductDetails from "./components/product/ProductDetails";
import ProductCategoryPage from "./components/product/ProductCategoryPage";

class App extends PureComponent {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/category/all' />
          </Route>
          <Route
            exact
            path='/category/:categoryName'
            component={ProductCategoryPage}
          />
          <Route
            exact
            path='/category/:categoryName/:productId'
            component={ProductDetails}
          />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
