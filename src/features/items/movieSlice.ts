import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getPopular} from "./getPopular";
import {toast} from "react-toastify";
import {stat} from "fs";
import {getNowPlaying} from "./getNowPlaying";
import {getUpcoming} from "./getUpcoming";
import {getTopRated} from "./getTopRated";
import {getDetails} from "./getDetails";
import {getReviews} from "./getReviews";
import {getCast} from "./getCast";
import {searchMovies} from "./searchMovies";

type Movie = {
  poster_path: string | null
  adult: boolean
  overview: string
  release_date : string
  genre_ids : number[]
  id :  number
  original_title : string
  original_language : string
  title : string
  backdrop_path : string | null
  popularity : number
  vote_count : number
  video : boolean
  vote_average : number

}

type InitialState = {
  movies: any
  movie : any
  watchlist : Movie[]
  searchResult : any
}

const initialState: InitialState = {
  movies: {},
  movie : {},
  watchlist : [],
  searchResult : []
}

const movieSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<Movie>) => {
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
      let item = state.watchlist.find(item => item.id === action.payload.id);
      //const quantity = action.payload?.quantity ? action.payload.quantity : 1

      if(typeof item==="undefined"){
        //state.items.push({quantity,...action.payload})
        state.watchlist.push(action.payload)
      }else{
        //item.quantity += quantity
      }
      localStorage.setItem("cart", JSON.stringify(state.watchlist));
    },
    clearSearch : (state, action) =>{
      state.searchResult = []
    },
    removeFromList : (state, action:PayloadAction<Movie>) => {
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
      let item = state.watchlist.find(item => item.id === action.payload.id);

      if(typeof item !=="undefined"){

        state.watchlist = state.watchlist.filter(item => item.id !== action.payload.id )
      }

      localStorage.setItem("cart", JSON.stringify(state.watchlist));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.movies = {...state.movies,popular : action.payload}
    })
    builder.addCase(getPopular.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
    builder.addCase(getNowPlaying.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getNowPlaying.fulfilled, (state, action) => {
      state.movies = {...state.movies,now_playing : action.payload}
    })
    builder.addCase(getNowPlaying.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
    builder.addCase(getUpcoming.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getUpcoming.fulfilled, (state, action) => {
      state.movies = {...state.movies,upcoming : action.payload}
    })
    builder.addCase(getUpcoming.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
    builder.addCase(getTopRated.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getTopRated.fulfilled, (state, action) => {
      state.movies = {...state.movies,top_rated : action.payload}
    })
    builder.addCase(getTopRated.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
    builder.addCase(getDetails.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.movie = action.payload
    })
    builder.addCase(getDetails.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
    builder.addCase(getReviews.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.movie = {...state.movie, reviews : action.payload}
    })
    builder.addCase(getReviews.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
    builder.addCase(getCast.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(getCast.fulfilled, (state, action) => {
      state.movie = {...state.movie, cast : action.payload}
    })
    builder.addCase(getCast.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
    builder.addCase(searchMovies.pending, (state, action) => {
      console.log("pending", action.payload)
    })
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.searchResult = action.payload
    }
    )
    builder.addCase(searchMovies.rejected, (state, action) => {
      console.log("rejected", action.payload)
    })
  }
})

export const { addToList, removeFromList , clearSearch} = movieSlice.actions
export const itemReducer = movieSlice.reducer