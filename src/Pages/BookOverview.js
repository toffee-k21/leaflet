import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { IMG_URL_Store } from "../utils/constants";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BookOverview = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const resId = useParams();
  // console.log(resId.resId)

  useEffect(() => {
    func();
  }, []);

  const func = async () => {
    const docRef = doc(db, "sellers", `${resId.resId}`);
    // console.log(resId)
    const docSnap = await getDoc(docRef);
    // console.log(docSnap.data());
    setBookDetails(docSnap.data());
  };

  const {imgVal,TitleOfBook,instaId,price,Discription} = bookDetails
  console.log(bookDetails)
  // console.log(imgVal)
  return  bookDetails.length === 0 ?  <div></div> 
  :(
    <div>
      <Header />
      <section class="overflow-hidden">
  <div class="mx-auto max-w-5xl px-5 py-24">
    <div class="mx-auto flex flex-wrap items-center lg:w-full">
      <img
        alt="book"
        class="h-full w-full rounded object-cover lg:h-1/6 lg:w-1/4 "
        src={`${IMG_URL_Store}${imgVal}?alt=media&token`}
        
      />
      <div class="mt-6 w-full lg:mt-0 lg:w-8/12 lg:pl-10 mx-8">
        {/* <h2 class="text-sm font-semibold tracking-widest text-gray-500">
          {TitleOfBook}
        </h2> */}
        <h1 class="my-4 text-3xl font-semibold text-black">{TitleOfBook}</h1>
        {/* <div class="my-4 flex items-center font-semibold border-b-2 pb-2">
          by {Author}
        </div> */}
        <div class="my-4 flex items-center font-semibold border-b-2 pb-2">
          rs {price}
        </div>
        <p class="leading-relaxed pt-1 pb-5 mb-5 border-b-2 ">
          {Discription}
        </p>
        <div class="flex items-center justify-between ">
          {/* <span class="title-font text-xl font-bold text-gray-900 ">
          Rate by Reader: {Rating} out of 5
          </span> */}
          <button
            type="button"
            class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
            // onClick={clickHandler}
          >
            <a href={"https://instagram.com/"+instaId}>

            Connect to Seller
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
    </div>
  );
};

export default BookOverview;
