import React, { useEffect, useState } from 'react'
import { IMG_URL, IMG_URL_Store } from '../utils/constants'
import {Link} from "react-router-dom"

const CardStore = ({data}) => {
console.log(data._document.data.value.mapValue.fields)
const {instaId,userName,price,imgVal,userId,TitleOfBook} = data._document.data.value.mapValue.fields


  return (
    <div className='lg:mx-[104px]'>

<div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Books</h2>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <Link>
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src={IMG_URL_Store+imgVal.stringValue+"?alt=media"} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700 font-semibold">{TitleOfBook.stringValue}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">₹{price.stringValue}</p>
      </Link>
   
    </div>
  </div>
</div>

    </div>
  )
}

export default CardStore