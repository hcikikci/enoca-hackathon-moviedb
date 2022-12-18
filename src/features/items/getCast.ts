import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCast = createAsyncThunk(
    "items/getCast",
    async (args,thunkAPI) => {
        try {
            const api_key = 'bce38173524aea5e300eb417fdf83bd9'

            const response = await axios.get(
                // @ts-ignore
                `https://api.themoviedb.org/3/movie/${args?.id}/credits?api_key=${api_key}&language=en-US`
            );
            return response.data.cast;
        } catch (error:any) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    });