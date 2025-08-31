import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access:null,
    is_user:false
}

const dark_slice = createSlice({
    name:'darks-lcie',
    initialState,
    reducers:{
        user_t:(state) => {
            state.is_user = true;
        },
        
    }
})

export const { user_t } = dark_slice.actions
export const first_emp = dark_slice.reducer