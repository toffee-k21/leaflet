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
            // console.log('dekho',action.payload)
            state.userBooks = action.payload
            // serializableCheck: false
        },
        addBooksToStore : (state,action)=>{
state.storeBooks = action.payload
        }
    }
})

export const { addBooks,addUserBooks,addBooksToStore } = librarySlice.actions

export default librarySlice.reducer
