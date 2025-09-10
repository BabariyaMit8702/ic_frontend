import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    is_user:false,
    username:null,
    profile_pic:null,
    whenChange:0
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
        },
        the_change:(state) => {
            state.whenChange = state.whenChange + 1;
        }

    }
})

export const { user_t,myname,storeppic,the_change } = dark_slice.actions
export const first_emp = dark_slice.reducer