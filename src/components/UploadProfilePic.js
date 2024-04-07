import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { auth, db, storage } from "../utils/firebase";
import { stringify, v4 } from "uuid";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { useSelector } from "react-redux";

const UploadProfilePic = () => {
  const [img, setImg] = useState("");
  const [instaId, setInstaId] = useState(null);
  const [imgPath, setImgPath] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [uploadImg, setUploadImg] = useState('choose your Img');
  const [uploadName, setUploadName] = useState('');

  const userNaam = useSelector((store) => store.user.userName);

  const UploadPic = async () => {
    const val = v4();
    console.log(imgPath)
    const imgRef = ref(storage, `users/profile/${val}`);
    // console.log(imgRef)
    uploadBytes(imgRef, img)
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
    setImgPath(val);
    updateProfile(auth.currentUser, {
      photoURL: imgPath,
    });

  };

  const handleUserName = () =>
    updateProfile(auth.currentUser, {
      displayName: userName,
    })
      .then((r) => setUploadName('Username has been updated !'))
      .catch((e) => console.log(e));

//       const handleInstaId =()=>{
// updateProfile(auth.currentUser,{
//   displayName: instaId,
// })
// .then((r) => console.log(r))
//       .catch((e) => console.log(e));
//       }

  return (
    <div className="">
    <div className="lg:mx-40 lg:my-24 mx-3 my-10">
      <h1 className="p-1 pb-11 font-semibold text-xl">User's Profile</h1>
      <span className="font-semibold p-1">Username:</span>{userNaam}
      <div className="my-12">
        <label className="text-lg font-semibold">Change your Username</label>
        <div className=" my-2">
          <input
            className="p-2 border-[1px]  border-black rounded-l-md lg:w-96 w-60"
            type="text"
            placeholder="Enter you user name"
            onChange={(e) => {setUserName(e.target.value)}}
          />
          <button
            onClick={handleUserName}
            className="bg-black text-white p-2 border-[1px] border-black rounded-r-md"
          >
            User Name
          </button>
        </div>
        <p>{uploadName}</p>
      </div>
      <label className="py-5 my-2 text-lg font-semibold">
        Upload your profile image
      </label>
      <div className="lg:h-[100px]">
        <div className="w-[100px] h-[100px] 50px  bg-sky-200 absolute flex items-center justify-center text-gray-600 text-sm p-2 my-2 text-center rounded-l-md">
          <p className="">{uploadImg}</p>
        </div>
        <input
          className=" bg-sky-200 rounded-l-md w-[100px] h-[100px] text-center align-middle cursor-pointer p-1 opacity-0 my-2"
          type="file"
          onChange={(e) => {setImg(e.target.files[0])
            setUploadImg('Click upload')}}
        />
        <button
          className="bg-black w-[100px] h-[100px] border-0 border-black rounded-r-md text-white my-2"
          onClick={UploadPic}
        >
          <p className="">Upload</p>
        </button>
      </div>
      <div>
      <div className="my-12">
        {/* <label className="text-lg font-semibold">Enter your instaId</label> */}
        {/* <div className=" my-2"> */}
          {/* <input
            className="p-2 border-[1px]  border-black rounded-l-md w-96"
            type="text"
            placeholder="Enter you instaId"
            onChange={(e) => setInstaId(e.target.value)}
          /> */}
          {/* <button
            onClick={handleInstaId}
            className="bg-black text-white p-2 border-[1px] border-black rounded-r-md"
          >
            User Name
          </button> */}
        {/* </div> */}
      </div>

      </div>
    </div>
    </div>
  );
};

export default UploadProfilePic;
