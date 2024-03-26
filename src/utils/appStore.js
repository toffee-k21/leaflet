import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import libraryReducer from "./librarySlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        library:libraryReducer
    }
})

export default appStore