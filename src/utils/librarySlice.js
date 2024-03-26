import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
    name:'library',
    initialState:{
        libraryBooks:[],
        userBooks:[],
    },
    reducers:
    {
        addBooks:(state,action)=>{
            state.libraryBooks = action.payload
        },
        addUserBooks:(state,action)=>{
            console.log(action.payload)
            state.userBooks = action.payload
        }
    }
})

export const { addBooks,addUserBooks } = librarySlice.actions

export default librarySlice.reducer
