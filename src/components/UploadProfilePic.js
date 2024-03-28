import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { auth, db, storage } from "../utils/firebase";
import { stringify, v4 } from "uuid";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const UploadProfilePic = () => {
  const [img, setImg] = useState("");
  const [instaId, setInstaId] = useState(null);
  const [ImgPath, setImgPath] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);

  const UploadPic = async () => {
    const val = v4();
    setImgPath(val);
    const imgRef = ref(storage, `users/profile/${val}`);
    // console.log(imgRef)
    uploadBytes(imgRef, img)
      .then((r) => console.log(r))
      .catch((e) => console.log(e));


        updateProfile(auth.currentUser, {
          photoURL: ImgPath,
        })
// const docRef = doc(db,'readers',)
//         await updateDoc(docRef, {
//           bId: docRef.id,
//         });

    //update profilew also
    // updateProfile(auth.currentUser, {
    //   photoURL: ImgPath,
    // })
    //   .then((r) => console.log(ImgPath))
    //   .catch((e) => console.log(e));
  };

  const handleUserName = () =>
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then((r) => console.log("updated"))
      .catch((e) => console.log(e));

  return (
    <div  className="mx-40 w-1/2">
  <div className="border-sky-800 border">
    <div>
      <p className="absolute text-center m-auto w-1/2 h-1/2">Choose your image</p>
    </div >
      <input className="p-24 bg-sky-300 opacity-5 cursor-pointer"
      type="file" onChange={(e) => setImg(e.target.files[0])} />
  </div>
      <button className="bg-black p-3 rounded-md text-white" onClick={UploadPic}>Upload</button>
      <input
        type="text"
        placeholder="Enter your UserName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleUserName}>Set userName</button>
    </div>
  );
};

export default UploadProfilePic;
