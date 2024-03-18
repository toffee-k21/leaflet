import React from 'react'
import Header from '../components/Header'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { Link } from 'react-router-dom'
import UploadProfilePic from '../components/UploadProfilePic'

const Profile = () => {

    const HandleSignOut = () =>{
signOut(auth).then(console.log('signOut')).catch(console.log('err'))
    }

  return (
    <div>
        <Header />
        <UploadProfilePic />
        <button onClick={HandleSignOut}>SignOut</button>
        <Link to={'/uploadProfile'}><button>Upload profile picture</button></Link>
    </div>
  )
}

export default Profile