import { ref, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { auth, db, storage } from '../utils/firebase'
import { stringify, v4 } from 'uuid'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'

const UploadProfilePic = () => {
    const [img, setImg] = useState('')
    const [instaId, setInstaId] = useState(null)
    const [ ImgPath, setImgPath ] = useState(null)
    const [userId,setUserId ] = useState(null)

    const UploadPic = async( )=>{
        const val = v4()
        setImgPath(val)
        const imgRef = ref(storage,`users/profile/${val}`)
        // console.log(imgRef)
        uploadBytes(imgRef,img).then((r)=>console.log(r)).catch((e)=>console.log(e))
      }

     const uploadDetails = async()=>{
      if(!ImgPath) return console.log('plz upload image first');
      if(!instaId) return console.log('insta Id req')
 // upload this image path to database of user---no need kuki doc bn jaa rh sign pr
//  const docRef = await addDoc(collection(db,'users'),{
//   profileImg:ImgPath,
//   instaId : instaId,
// })


//upload docref.id and all other details to db 
// const UploadIdDetails = await setDoc(doc(db, 'users' , stringify(userId)),{
//     userId: userId,
//     profileImg:ImgPath,
//     instaId : instaId,
// })

// console.log(UploadIdDetails)


updateProfile(auth.currentUser,{
  photoURL: ImgPath,
  tenantId: instaId,
    // abhi k liye phone number me store kr de rhe mujhe smjh nhi aa rh ki key value pair kaise add kre for instaId in auth obj
})
.then((r)=>console.log('updated',instaId))
.catch((e)=>console.log(e))

     }

      
  return (
    <div>
        <input type='file' onChange={(e)=>setImg(e.target.files[0])} />
        <button onClick={UploadPic} >Upload</button>
        <input type='text' placeholder='Enter your instaId' onChange={(e)=>setInstaId(e.target.value)} />
        <button onClick={uploadDetails} >Upload details</button>
    </div>
  )
}

export default UploadProfilePic