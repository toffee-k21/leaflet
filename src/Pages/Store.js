import React, { useEffect, useState } from "react";
import CardStore from "../components/CardStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { addBooksToStore } from "../utils/librarySlice";
import { useDispatch } from "react-redux";

const Store = () => {
  const [books, setBooks] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchLibraryBook();
  }, []);

  const fetchLibraryBook = async () => {
    const query = await getDocs(collection(db, "sellers"));
    console.log(query.docs);
    setBooks(query.docs);
    // dispatch(addBooksToStore(query.docs));
  };

  return (
    <div>
      <Header />
      <div className="lg:mx-[104px]">
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {/* <h1>Books</h1> */}
            <h2 class="sr-only">Books</h2>
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {books
                ? books.map((r) => <CardStore data={r} />)
                : console.log("na")}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
