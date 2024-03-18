import React, { useEffect } from "react";
import leaflet from "../utils/img/leafletlogo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProfilePic, addUserDetails, addUserName } from "../utils/userSlice";
import { getDoc } from "firebase/firestore";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(addUserName(user.displayName))
        dispatch(addProfilePic(user.photoURL))
        // navigate("/home");
      } else {
        // console.log("log out");
        navigate("/");
      }
    });

    //getting and setting user details
    // const userDetails = getDoc(db, 'users' , )
  }, []);

  return (
    <div className="md:mx-[7%]">
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
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Your bookshelf
            </button>
          </div>
          <Link to={'/profile'}>
            <a className="text-sm font-semibold text-gray-800 hover:text-gray-900 mx-2">
              Profile
            </a>
          </Link>

          <div className="lg:hidden">
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
    </div>
  );
};

export default Header;
