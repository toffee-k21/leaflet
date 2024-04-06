import React, { useEffect, useState } from "react";
import leaflet from "../utils/img/leafletlogo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProfilePic, addUserDetails, addUserName, adduserId } from "../utils/userSlice";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { IMG_URL_profile } from "../utils/constants";
import { addBooks, addUserBooks } from "../utils/librarySlice";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
const [userImg,setUserImg] = useState()
const [hide,setHide] = useState('hidden')
const [books,setBooks] = useState([])
const [userUid, setUserUid] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(addUserName(user.displayName))
        dispatch(addProfilePic(user.photoURL))
        dispatch(adduserId(user.uid))
        setUserImg(user.photoURL)
        setUserUid(user.uid)
        // navigate("/home");
      } else {
        // console.log("log out");
        navigate("/");
      }
    });

  }, []);

// fetching data 
useEffect(() => {
  fetchLibraryBook()
  // .then(()=>filter(books));
  console.log(books)
}, []);

const fetchLibraryBook = async ()  => {
  const query = await getDocs(collection(db, "readers"));
  console.log(query.docs);
  setBooks(query.docs);
  dispatch(addBooks(query.docs));
};

// const filter = (a) =>{
//   console.log(a)
//   const filterQuery = a.filter(
//     (r) => r._document.data.value.mapValue.fields.userId.stringValue == userUid
//   );
//   console.log(filterQuery);
//   dispatch(addUserBooks(filterQuery))
// }

const handleHambuger =()=>{
hide == 'hidden' ? setHide('block') : setHide('hidden')
}

  return (
    <div className="lg:px-24 px-2" >
      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <img className="w-[70px]" src={leaflet} />
            </span>
            <span className="font-bold">leaflet</span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              <li>
                <Link to={'/home'}>
                <a
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </a>
                </Link>
              </li>
              <li>
               <Link to={'/library'}><a
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Library
                </a></Link> 
              </li>
              <li>
               <Link to={'/store'}><a
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Store
                </a></Link> 
              </li>
              <li>
                <Link to={'/about'}>
                <a
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
           <Link to={'/bookshelf'}><button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             BookShelf
            </button>
            </Link>
          </div> 
          <div className="hidden lg:block">
           <Link to={'/postyourbook'}><button
              type="button"
              className="rounded-md bg-sky-300 text-black px-3 m-1 py-2 text-sm font-semibold shadow-sm hover:bg-sky-300/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             Add
            </button>
            </Link>
          </div> 
          <div className="hidden lg:block">
           <Link to={'/sellyourbook'}><button
              type="button"
              className="rounded-md bg-sky-300 text-black px-3 m-1 py-2 text-sm font-semibold shadow-sm hover:bg-sky-300/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
             Sell
            </button>
            </Link>
          </div> 
          <Link to={'/profile'}>
            <div >
              <img className="h-10 w-10 flex-shrink-0 rounded-full object-cover cursor-pointer" src={IMG_URL_profile + userImg + "?alt=media" } />
            </div>
          </Link>

          <div className="lg:hidden" onClick={handleHambuger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
      <div className={`bg-black text-white flex flex-row items-center justify-center p-6 ${hide} `}>
            <ul className="">
              <Link to={'/home'}><li className="p-1">Home</li></Link>
              <Link to={'/library'}><li className="p-1">Library</li></Link>
              <Link to={'/about'}><li className="p-1">About</li></Link>
              <Link to={'/profile'}><li className="p-1">Profile</li></Link>
            </ul>
          </div>
    </div>
  );
};

export default Header;
