import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productApi } from '../services/api';


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => await productApi.fetchProducts()
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => await productApi.fetchProductById(id)
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    currentProduct: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
  
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  }
});

export default productSlice.reducer;