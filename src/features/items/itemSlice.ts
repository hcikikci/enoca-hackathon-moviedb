import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getItems} from "./getItems";
import {toast} from "react-toastify";

type Item = {
  id: number
  name: string
  price: number
  quantity : number
}

type InitialState = {
  items: Item[]
  cart : Item[]
}

const initialState: InitialState = {
  items: [],
  cart : [],
}

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<Item>) => {
      toast(`${action.payload.id} added to cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let item = state.cart.find(item => item.id === action.payload.id);
      //const quantity = action.payload?.quantity ? action.payload.quantity : 1

      if(typeof item==="undefined"){
        //state.items.push({quantity,...action.payload})
        state.cart.push(action.payload)
      }else{
        //item.quantity += quantity
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromList : (state, action:PayloadAction<Item>) => {
      toast(`${action.payload.id} removed from cart`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      let item = state.cart.find(item => item.id === action.payload.id);

      if(typeof item !=="undefined"){

        state.cart = state.cart.filter(item => item.id !== action.payload.id )
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(getItems.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
  }
})

export const { addToList, removeFromList } = itemSlice.actions
export const itemReducer = itemSlice.reducer