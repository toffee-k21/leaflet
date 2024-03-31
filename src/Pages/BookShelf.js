import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import BookShelfCard from "../components/BookShelfCard";
import Footer from "../components/Footer";

const BookShelf = () => {
  const books = useSelector((store) => store.library);
  const user = useSelector((store)=>store.user)
  
  const {libraryBooks} = books

  const filterUserBooks = libraryBooks.filter((r)=>user.userId == r._document.data.value.mapValue.fields.userId.stringValue)
  



  return (
    <div>
      <Header />
      <div className="lg:mx-40 lg:my-10 m-2">
        <div className="flex justify-between m-6 border-b-2 p-4 flex-wrap my-2">
          <h2 className="font-bold text-3xl lg:m-0 my-6 ">Your BookShelf</h2>
          <Link to={"/add"}>
            <div className="bg-slate-200 w-[200px] py-2 px-4 rounded-lg border-b-2 ">
              Add to your{" "}
              <span className="text-blue-500 font-semibold">BookShelf</span>
            </div>
          </Link>
        </div>
        {
       filterUserBooks.map((c)=><BookShelfCard details={c._document.data.value.mapValue.fields}/>)}
      </div>
      <Footer />
    </div>
  );
};

export default BookShelf;
