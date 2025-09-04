import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_user:false,
    username:null,
}

const dark_slice = createSlice({
    name:'darks-lcie',
    initialState,
    reducers:{
        user_t:(state) => {
            state.is_user = true;
        },
        myname:(state,action) => {
            state.username = action.payload;
        }
    }
})

export const { user_t,myname } = dark_slice.actions
export const first_emp = dark_slice.reducer