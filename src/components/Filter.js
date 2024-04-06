import React from 'react'
import Library from '../Pages/Library'
import Footer from './Footer'
import Header from './Header'

const Filter = () => {
  return (
    <div>
      <Header />
        <section class="lg:w-10/12 lg:mx-24 mx-2 my-6">
  <div class="mx-auto max-w-7xl px-2 py-10 lg:px-10">
    <div class="md:flex md:flex-row md:items-start md:justify-between">
      <h1 class="text-xl font-bold">Books<div className="bg-sky-300 w-11 h-[2px]" ></div></h1>
      <div class="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
        <button
          type="button"
          class="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
        >
          Sort{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Category{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Color{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Size{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
    <hr class="my-8" />
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-6">
      <div class="hidden space-y-6 divide-y lg:col-span-3 lg:block relative">
        <div>
          <ul class="space-y-2">
            <li class="cursor-pointer font-medium">Author</li>
            {/* <li class="cursor-pointer font-medium">Running Shoes</li>
            <li class="cursor-pointer font-medium">Mens shoes</li>
            <li class="cursor-pointer font-medium">Women shoes</li>
            <li class="cursor-pointer font-medium">Sandals</li> */}
          </ul>
        </div>
        <div class="flex items-center justify-between pt-4">
          <h6 class="font-semibold">Fiction</h6>
          {/* <span class="block cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span> */}
        </div>
        <div class="flex items-center justify-between pt-4">
          <h6 class="font-semibold">Non Fiction</h6>
          {/* <span class="block  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span> */}
        </div>
      </div>
      <div class="w-full rounded-lg  px-2 lg:col-span-9 ">
        <Library />
      </div>
    </div>
  </div>
</section>
<Footer />

    </div>
  )
}

export default Filter