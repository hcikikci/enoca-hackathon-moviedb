import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const searchMovies = createAsyncThunk(
    "items/searchMovies",
    async (args,thunkAPI) => {
        try {
            const api_key = 'bce38173524aea5e300eb417fdf83bd9'
            // @ts-ignore
            const response = await axios.get(
                // @ts-ignore
                `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${args?.search}&page=1&include_adult=false`
            );
            return response.data.results;
        } catch (error:any) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });