import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_user:false,
    username:null,
    profile_pic:null
}

const dark_slice = createSlice({
    name:'darks-lcie',
    initialState,
    reducers:{
        user_t:(state) => {
            state.is_user = !state.is_user;
        },
        myname:(state,action) => {
            state.username = action.payload;
        },
        storeppic:(state,action) => {
            state.profile_pic = action.payload
        }
    }
})

export const { user_t,myname,storeppic } = dark_slice.actions
export const first_emp = dark_slice.reducer