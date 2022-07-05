import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  data: {
    image: string;
    title: string;
    description: string;
    price: string;
    qty: number;
  }[];
  totalQuantity: number;
}

const initialState: CartState = {
  data: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{
        image: string;
        title: string;
        description: string;
        price: string;
      }>
    ) {
      const { image, description, title, price } = action.payload;

      state.data.push({
        qty: 1,
        image,
        description,
        title,
        price,
      });

      state.totalQuantity += 1;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
