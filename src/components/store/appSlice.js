import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        open: true,
        video: [],
        category: "All",
    },
    reducers: {
        toggle: (state) => {
            state.open = !state.open;
        },
    
    setHomeVideo : (state, action) => {
        state.video = action.payload;
    },
    setCategory : (state, action) => {
        state.category = action.payload;
    },
    }
});

export const { toggle, setHomeVideo , setCategory} = appSlice.actions;

export default appSlice.reducer;
