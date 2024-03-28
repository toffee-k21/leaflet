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
    <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
      <button onClick={UploadPic}>Upload</button>
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
