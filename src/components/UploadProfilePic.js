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
        <label className="py-5 my-2 text-lg font-semibold">
          Upload your profile image
        </label>
      <div className="lg:h-[100px]">
        <div className="lg:w-[100px] lg:h-[100px] bg-sky-200 absolute flex items-center justify-center text-gray-600 text-sm p-2 my-2 text-center rounded-l-md">
          <p className="">Choose a image</p>
        </div>
          <input
            className=" bg-sky-200 rounded-l-md lg:w-[100px] lg:h-[100px] text-center align-middle cursor-pointer p-1 opacity-0 my-2"
            type="file"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button
            className="bg-black lg:w-[100px] lg:h-[100px] border-0 border-black rounded-r-md text-white my-2"
            onClick={UploadPic}
          >
            <p className="">Upload</p>
          </button>
       
      </div>
      <div className="my-12">
        <label className="text-lg font-semibold">
          Enter your Username 
        </label>
      <div className=" my-2">
        <input
          className="p-2 border-[1px]  border-black rounded-l-md w-96"
          type="text"
          placeholder="Enter you user name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={handleUserName}
          className="bg-black text-white p-2 border-[1px] border-black rounded-r-md"
        >
          User Name
        </button>
      </div>
      </div>
    </div>
  );
};

export default UploadProfilePic;
