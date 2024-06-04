import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const response = await axios.get("http://localhost:5000/products");
  return response.data;
});

export const saveProduct = createAsyncThunk(
  "products/saveProduct",
  async ({ barang, price }) => {
    const response = await axios.post("http://localhost:5000/products", {
      barang,
      price,
    });
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, barang, price }) => {
    const response = await axios.patch(`http://localhost:5000/products/${id}`, {
      barang,
      price,
    });
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
  }
);

const productEntity = createEntityAdapter({
  selectId: (product) => product.id,
});

const productSlice = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        productEntity.setAll(state, action.payload);
      })
      .addCase(saveProduct.fulfilled, (state, action) => {
        productEntity.addOne(state, action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        productEntity.removeOne(state, action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        productEntity.updateOne(state, {
          id: action.payload.id,
          updates: action.payload,
        });
      });
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);
export default productSlice.reducer;
