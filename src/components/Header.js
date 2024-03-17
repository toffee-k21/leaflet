import React, { useEffect } from "react";
import leaflet from "../utils/img/leafletlogo.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../utils/userSlice";
import { getDoc } from "firebase/firestore";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(addUserDetails(user))
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
      <div class="relative w-full bg-white">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div class="inline-flex items-center space-x-2">
            <span>
              <img className="w-[70px]" src={leaflet} />
            </span>
            <span class="font-bold">leaflet</span>
          </div>
          <div class="hidden grow items-start lg:flex">
            <ul class="ml-12 inline-flex space-x-8">
              <li>
                <Link to={'/home'}>
                <a
                  class="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Home
                </a>
                </Link>
              </li>
              <li>
               <Link to={'/library'}><a
                  class="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  Library
                </a></Link> 
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div class="hidden lg:block">
            <button
              type="button"
              class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Your bookshelf
            </button>
          </div>
          <Link to={'/profile'}>
            <a class="text-sm font-semibold text-gray-800 hover:text-gray-900 mx-2">
              Profile
            </a>
          </Link>

          <div class="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 cursor-pointer"
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
