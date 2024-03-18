import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState:{
        userName:null,
        profilePic:null
        // userName:null,
        // userUid:null,
        // photoUrl:null,
        // instaId:null
    },
    reducers:{
        addUserName: (state,action )=>{
          state.userName = action.payload
        },
        addProfilePic: (state,action) =>{
            state.profilePic =  action.payload
        }
    }

})

export const { addUserName,addProfilePic } = userSlice.actions

export default userSlice.reducer