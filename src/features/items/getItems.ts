import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk(
    "items/getItems",
    async (args,thunkAPI) => {
      try {
          const api_key = 'bce38173524aea5e300eb417fdf83bd9'
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/550?api_key=${api_key}`
        );
        return response.data;
      } catch (error:any) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    });