import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../../graphql/apolloClient';
import { CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../../graphql/productMutations';

// Product type matching the backend GraphQL schema
export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  salePrice: number | null;
  longDescription: string | null;
  isFeatured: boolean;
  isActive: boolean;
  vendor: {
    id: string;
    businessName: string;
  };
};

// Input type for creating a product
export type CreateProductInput = {
  name: string;
  price: number;
  stock?: number;
  salePrice?: number | null;
  longDescription?: string | null;
  categoryId: number;
  vendorId: number;
  unitId: number;
  isFeatured?: boolean;
  isActive?: boolean;
};

// Input type for updating a product
export type UpdateProductInput = {
  id: number;
  name?: string;
  price?: number;
  stock?: number;
  salePrice?: number | null;
  longDescription?: string | null;
  isFeatured?: boolean;
  isActive?: boolean;
};

// Define the type for the product state
type ProductState = {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

// Set the initial state for the product slice
const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};

// GraphQL query to fetch products
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
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

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await client.query({
      query: GET_PRODUCTS,
      fetchPolicy: 'network-only',
    });
    return response.data.products;
  },
);

// Async thunk to create a product
export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (productData: CreateProductInput) => {
    await client.mutate({
      mutation: CREATE_PRODUCT,
      variables: productData,
    });
    // Refetch all products to ensure consistency
    const response = await client.query({
      query: GET_PRODUCTS,
      fetchPolicy: 'network-only',
    });
    return response.data.products;
  },
);

// Async thunk to update a product
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (productData: UpdateProductInput) => {
    await client.mutate({
      mutation: UPDATE_PRODUCT,
      variables: productData,
    });
    // Refetch all products to ensure consistency
    const response = await client.query({
      query: GET_PRODUCTS,
      fetchPolicy: 'network-only',
    });
    return response.data.products;
  },
);

// Async thunk to delete a product
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (productId: number) => {
    await client.mutate({
      mutation: DELETE_PRODUCT,
      variables: { id: productId },
    });
    // Refetch all products to ensure consistency
    const response = await client.query({
      query: GET_PRODUCTS,
      fetchPolicy: 'network-only',
    });
    return response.data.products;
  },
);

// Create a slice for product state
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      })
      // Create product - refetches all products
      .addCase(createProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to create product';
      })
      // Update product - refetches all products
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to update product';
      })
      // Delete product - refetches all products
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to delete product';
      });
  },
});

export default productSlice.reducer;
