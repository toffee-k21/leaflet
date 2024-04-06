import React, { useEffect, useState } from "react";
import { IMG_URL, IMG_URL_Store } from "../utils/constants";
import { Link } from "react-router-dom";

const CardStore = ({ data }) => {
  console.log(data._document.data.value.mapValue.fields);
  const { instaId, userName, price, imgVal, userId, TitleOfBook, bId } =
    data._document.data.value.mapValue.fields;

  return (
    <div>
      <Link to={"/" + bId.stringValue}>
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={IMG_URL_Store + imgVal.stringValue + "?alt=media"}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700 font-semibold">
          {TitleOfBook.stringValue}
        </h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          ₹{price.stringValue}
        </p>
      </Link>
    </div>
  );
};

export default CardStore;
