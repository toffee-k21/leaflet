// import { collection, getDocs } from "firebase/firestore";
// import { useDispatch, useSelector } from "react-redux";
// import { db } from "./firebase";
// import { addBooks } from "./librarySlice";

// const useFetchingData = () => {
//   const dispatch = useDispatch();
//   const selector = useSelector((store) => store.library.libraryBooks);
//   const fetchLibraryBook = async () => {
//     const query = await getDocs(collection(db, "readers"));
//     dispatch(addBooks(query.docs));
//   };
// };

// export default useFetchingData;
