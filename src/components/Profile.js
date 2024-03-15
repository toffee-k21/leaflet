import React from 'react'
import Header from './Header'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { Link } from 'react-router-dom'

const Profile = () => {

    const HandleSignOut = () =>{
signOut(auth).then(console.log('signOut')).catch(console.log('err'))
    }

  return (
    <div>
        <Header />
        <button onClick={HandleSignOut}>SignOut</button>
        <Link to={'/uploadProfile'}><button>Upload profile picture</button></Link>
    </div>
  )
}

export default Profile