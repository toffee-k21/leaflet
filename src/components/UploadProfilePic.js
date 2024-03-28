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
    });
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
    <div className="mx-40 my-24">
        <label className="py-5 my-3">
          Upload your profile image
        </label>
      <div className="h-[200px]">
        <div className="w-[200px] h-[200px] bg-sky-200 absolute flex items-center justify-center text-gray-600">
          <p>Choose a image</p>
        </div>
          <input
            className=" bg-sky-200 rounded-l-md w-[200px] h-[200px] text-center align-middle cursor-pointer p-1 opacity-0 "
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button
            className="bg-black w-[200px] h-[200px] border-0 border-black rounded-r-md text-white"
            onClick={UploadPic}
          >
            <p className="">Upload</p>
          </button>
       
      </div>
      <div className="bg-red-600 my-3">
        <input
          className="p-1 border-2 border-black rounded-l-md w-96"
          type="text"
          placeholder="Enter your UserName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={handleUserName}
          className="bg-black text-white p-1 rounded-r-md"
        >
          Set userName
        </button>
      </div>
    </div>
  );
};

export default UploadProfilePic;
