import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../../graphql/apolloClient'; // Ensure you have Apollo Client set up

// Define the type for a product
type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
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
    }
  }
`;

// Async thunk to fetch products using Apollo Client
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await client.query({
    query: GET_PRODUCTS,
    fetchPolicy: 'network-only', // Ensure fresh data is fetched from the server
  });
  return response.data.products;
});

// Create a slice for product state
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.products = action.payload; // Store the fetched products in the state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

// Export the async thunk and the reducer
export default productSlice.reducer;
