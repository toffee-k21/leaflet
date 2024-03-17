import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState:{
        docId:null
    },
    reducers:{
        addUserDetails: (state,action )=>{
          state.docId = action.payload
        }
    }

})

export const {addUserDetails} = userSlice.actions

export default userSlice.reducer