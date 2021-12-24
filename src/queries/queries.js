import { gql } from "@apollo/client";

export const getAllProducts = gql`
  query getProducts {
    category {
      name
      products {
        name
        inStock
        category
        brand
        id
        gallery
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const getProductsByCategoryQuery = gql`
  query getProductsByCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        name
        category
        inStock
        brand
        id
        gallery
        attributes {
          id
          name
          type
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const getProductQuery = gql`
  query getProduct($id: String!) {
    product(id: $id) {
      id
      name
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
      brand
      prices {
        currency
        amount
      }
    }
  }
`;

export const getCategoriesQuery = gql`
  query getCategories {
    categories {
      name
    }
  }
`;

export const getCurrenciesQuery = gql`
  query getCurrencies {
    currencies
  }
`;
