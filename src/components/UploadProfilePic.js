import { ref, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { db, storage } from '../utils/firebase'
import { v4 } from 'uuid'
import { addDoc, collection } from 'firebase/firestore'

const UploadProfilePic = () => {
    const [img, setImg] = useState('')
    const [ ImgPath, setImgPath ] = useState('')

    const UploadPic = async( )=>{
        const val = v4()
        setImgPath(val)
        const imgRef = ref(storage,`users/profile/${val}`)
        // console.log(imgRef)
        uploadBytes(imgRef,img).then((r)=>console.log(r)).catch((e)=>console.log(e))

        // upload this image path to database of user
        const docRef = await addDoc(collection(db,'users'),{
          profileImg:ImgPath
        })
        console.log(docRef)
      }

      
  return (
    <div>
        <input type='file' onChange={(e)=>setImg(e.target.files[0])} />
        <button onClick={UploadPic} >Upload</button>
    </div>
  )
}

export default UploadProfilePic