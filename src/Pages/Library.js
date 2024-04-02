import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, addUserBooks } from "../utils/librarySlice";
import useFetchingData from "../utils/useFetchingData";
import Footer from "../components/Footer";

const Library = () => {
  const [books, setBooks] = useState(null);

  const data = useSelector((store) => store);

  const { library, user } = data;
  const { libraryBooks, userBooks } = library;

  return (
    <div>
      <div className="flex flex-wrap justify-center lg:px-32 px-2 pt-10">
      {libraryBooks
        ? libraryBooks.map((r) => <Card books={r} />)
        : console.log("na")}
      </div>
      <Footer />
    </div>
  );
};

export default Library;
