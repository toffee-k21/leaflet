import { useEffect, useState } from "react";
import Card from "./Card";
import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebase";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase";
import { useSelector } from "react-redux";
import Footer from "./Footer"

const HomeCardContainer = () => {
  const [bookRef, SetBookRef] = useState([]);
  const libraryBooks = useSelector(store=>store.library.libraryBooks)

  return (
    <div className=" lg:py-14 p-10 lg:mx-24">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Choose your Books
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Learnings of books posted by our Readers</p> <span className="text-sky-300">You can also post your learnings → 
      <Link to={'/postyourbook'}><span className="hover:underline"> Click to post your book</span></Link></span>
      </div>
      <div className="border-b-[1px] my-10">

      </div>

      <div className="flex justify-center">
        <div className=" lg:py-2 flex w-full flex-wrap border-b-[1px] justify-between">
          {libraryBooks.slice(0,4).map((c) => {
            return (
            //   <Link
            //     to={
            //       "/book/" +
            //       c._document.data.value.mapValue.fields.bId.stringValue
            //     }
            //   >
              <Card books={c} />
            //   </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeCardContainer;
