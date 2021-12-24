import React, { PureComponent } from "react";
import { Query } from "@apollo/client/react/components";
import classes from "./Categories.module.scss";
import { NavLink } from "react-router-dom";
import { getCategoriesQuery } from "../../queries/queries";

class Categories extends PureComponent {
  render() {
    return (
      <>
        <Query query={getCategoriesQuery}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error}`;
            if (data) {
              const { categories } = data;
              const allCategories = [{ name: "all" }, ...categories];
              return (
                <ul className={classes.categories}>
                  {allCategories.map((category) => {
                    return (
                      <li key={category.name}>
                        <NavLink
                          className={classes.link}
                          activeClassName={classes.active}
                          to={`/category/${category.name}`}
                        >
                          {category.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              );
            }
          }}
        </Query>
      </>
    );
  }
}

export default Categories;
