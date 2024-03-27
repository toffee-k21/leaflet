import React from "react";
import { IMG_URL, IMG_URL_profile } from "../utils/constants";

const Card = (props) => {
  // console.log(props.books._document.data.value.mapValue.fields)
  const {
    Author,
    Discription,
    ImgVal,
    Rating,
    TitleOfBook,
    profileImg,
    bId,
    userId,
    userName,
  } = props?.books?._document?.data?.value?.mapValue?.fields;
  return (
    <div className="lg:m-6 mx-1 my-4">
      <div class="lg:w-[430px] w-[350px] rounded-md shadow-md">
        <div class="flex flex-col rounded-md bg-sky-100 ">
          <div class="flex justify-between">
            {/* <h2 className='text-gray-500'>by author</h2> */}

            <div class="h-[260px] w-2/3 p-2">
            <h2 className="font-semibold text-lg">{TitleOfBook.stringValue}</h2>
            <p className="text-sm pb-1 text-gray-500">by {Author.stringValue}</p>
              <blockquote>
                <p class="text-gray-800 h-[110px] overflow-hidden">
                  {Discription.stringValue}
                </p>
              </blockquote>
              <div className="">
                <div className="flex py-3 ">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="h-4 w-4 text-yellow-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div class="flex items-center">
                  <img
                    class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                    src={
                      IMG_URL_profile + profileImg.stringValue + "?alt=media"
                    }
                    alt=""
                  />

                  <div class="ml-3 min-w-0">
                    <p class="truncate text-base font-semibold text-gray-800">
                      {userName.stringValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-lg  w-1/2 rounded-r-md text-white flex items-end"
              style={{
                background: `url(${
                  IMG_URL + ImgVal.stringValue + "?alt=media"
                })`,
                backgroundSize: "cover",
              }}
            >
             
            </div>
            <div class="mt-4 border-t border-gray-300 pt-4 dark:border-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
