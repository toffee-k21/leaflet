import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addBooks, addUserBooks } from "../utils/librarySlice";
import useFetchingData from "../utils/useFetchingData";

const Library = () => {
  const [books, setBooks] = useState(null);

  const dispatch = useDispatch();
  const data = useSelector((store) => store);

  const { library, user } = data;
  const { libraryBooks, userBooks } = library;

  const { userId } = user;

  useEffect(() => {
    fetchLibraryBook();
  }, []);

  const fetchLibraryBook = async () => {
    const query = await getDocs(collection(db, "readers"));
    console.log(query.docs);
    setBooks(query.docs);
    dispatch(addBooks(query.docs));
  };
  if (books != null) {
    const filterQuery = books.filter(
      (r) => userId == r._document.data.value.mapValue.fields.userId.stringValue
    );
    console.log(filterQuery);
  }

  return (
    <div>
      <Header />
      {libraryBooks
        ? libraryBooks.map((r) => <Card books={r} />)
        : console.log("na")}
    </div>
  );
};

export default Library;
