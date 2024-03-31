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
    instaId,
  } = props?.books?._document?.data?.value?.mapValue?.fields;

const fontObj = {
  fontFamily: "Dancing Script, cursive",
  fontOpticalSizing: "auto",
  fontWeight: "<weight>",
  fontStyle: "normal"
}

  const fun = (a) => {
    const arr = [];
    for (let x = 1; x <= a; x++) {
      arr.push(x);
    }
    return arr;
  };
  // console.log(fun(Rating.stringValue))
  return (
    <div className="lg:m-4 m-10 ">
      <div class="lg:w-[430px] w-[350px] rounded-md shadow-md">
        <div class="flex flex-col rounded-md  ">
          <div class="flex justify-between">
            {/* <h2 className='text-gray-500'>by author</h2> */}

            <div class="h-[280px] w-2/3 p-[10px]">
              <div
                className="h-[164px] overflow-y-scroll"
                style={{ scrollbarWidth: "none" }}
              >
                <h2 className="font-semibold text-lg">
                  {TitleOfBook.stringValue}
                </h2>
                <p className="text-sm pb-1 text-gray-500">
                  by {Author.stringValue}
                </p>
                <blockquote>
                  <p class="text-gray-800 text-sm">{Discription.stringValue}</p>
                </blockquote>
              </div>
              <div className="border-t-[1px]">
                <div className="text-xs font-semibold pt-[6px] pb-1 px-[2px]">Rating</div>
                <div className="flex pb-[6px]">
                  {/* {console.log(fun(Rating.stringValue).map(()=>console.log('hello')))} */}
                  {fun(Rating.stringValue).map(() => {
                   return( <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox={`0 0 24 24`}
                        fill="currentColor"
                        class="h-4 w-4 text-yellow-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>)
                  })}
                  <div className="text-sm mx-2 align-text-top">{Rating.stringValue} / 5</div>
                </div>
                <div class="flex items-center ">
                  <a href={"https://www.instagram.com/" + instaId.stringValue}>
                    {" "}
                    <img
                      class="h-10 w-10 flex-shrink-0 rounded-full object-cover cursor-pointer"
                      src={
                        IMG_URL_profile + profileImg.stringValue + "?alt=media"
                      }
                      alt=""
                    />
                  </a>
                  <div class="ml-3 min-w-0 flex justify-between w-3/4">
                    <p class="truncate font-semibold text-md text-gray-800 " style={fontObj}>
                      {userName.stringValue}
                    </p>
                    <a href={"https://www.instagram.com/" + instaId.stringValue}>
                    <div className="text-xs font-bold bg-black text-white p-[6px] rounded-md">connect</div>
                    </a>
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
            ></div>
            <div class="mt-4 border-t border-gray-300 pt-4 dark:border-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
