import { gql } from '@apollo/client';

// CREATE PRODUCT MUTATION
export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $name: String!
    $price: Float!
    $stock: Int
    $salePrice: Float
    $longDescription: String
    $categoryId: Int!
    $vendorId: Int!
    $unitId: Int!
    $isFeatured: Boolean
    $isActive: Boolean
  ) {
    createProduct(
      name: $name
      price: $price
      stock: $stock
      salePrice: $salePrice
      longDescription: $longDescription
      categoryId: $categoryId
      vendorId: $vendorId
      unitId: $unitId
      isFeatured: $isFeatured
      isActive: $isActive
    ) {
      id
      name
      price
      stock
      salePrice
      longDescription
      isFeatured
      isActive
      vendor {
        id
        businessName
      }
    }
  }
`;

// UPDATE PRODUCT MUTATION
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: Int!
    $name: String
    $price: Float
    $stock: Int
    $salePrice: Float
    $longDescription: String
    $isFeatured: Boolean
    $isActive: Boolean
  ) {
    updateProduct(
      id: $id
      name: $name
      price: $price
      stock: $stock
      salePrice: $salePrice
      longDescription: $longDescription
      isFeatured: $isFeatured
      isActive: $isActive
    ) {
      id
      name
      price
      stock
      salePrice
      longDescription
      isFeatured
      isActive
      vendor {
        id
        businessName
      }
    }
  }
`;

// DELETE PRODUCT MUTATION
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($id: Int!) {
    deleteProduct(id: $id)
  }
`;
