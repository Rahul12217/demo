import { createSlice } from "@reduxjs/toolkit";

const initialState = {from : "",to : "",date : ""} 

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers : {
        search : (state,action)=>{
            state.value = action.payload;
        },
    }
})



export const {search} = searchSlice.actions;

export default searchSlice.reducer;