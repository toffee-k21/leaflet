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
            // serializableCheck: false
        },
        addUserBooks:(state,action)=>{
            console.log('dekho',action.payload)
            state.userBooks = action.payload
            // serializableCheck: false
        }
    }
})

export const { addBooks,addUserBooks } = librarySlice.actions

export default librarySlice.reducer
