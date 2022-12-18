import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getPopular = createAsyncThunk(
    "items/getItems",
    async (args,thunkAPI) => {
      try {
          const api_key = 'bce38173524aea5e300eb417fdf83bd9'
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
        );
        return response.data.results;
      } catch (error:any) {
        return thunkAPI.rejectWithValue({ error: error.message });
      }
    });