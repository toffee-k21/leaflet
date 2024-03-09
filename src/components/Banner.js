import React from 'react'
import banner from "../utils/img/banner.png"

const Banner = () => {
  return (
    <div>
         <div
      className=" h-full lg:w-full w-screen flex justify-center text-[1.1rem]
         flex-wrap lg:flex-nowrap items-center"
    >
      <div className="lg:w-4/6 text-gray-800 w-full">
        <h1 className="lg:pl-32 pl-1 mt-16 font-bold text-6xl">
          Welcome to our {' '}
          <span id="element" className="text-sky-300">
            Virtual Library
          </span>
        </h1>
        <p className="lg:pl-32 pl-1 py-5 text-sm">
        We are connecting readers through this virtual library , fostering a
          vibrant online community centered around the love for books . Users
          can create personalized bookshelf and connect to like minded
          individual. Providing a system to encourage communication between
          users fostering discussion recommendations, and the exchange of
          literary insights.
        </p>
        <button className="lg:mx-32 mx-1 my-3 bg-black border p-2 rounded-lg hover:bg-black/80 hover:cursor-pointer font-semibold text-white">
          <a href="https://discord.com/invite/ddYnn3cB">
            Join Discord
          </a>
        </button>
      </div>
      <div className="lg:pr-32 pr-1 w-4/6">
        <img className="" src={banner} />
      </div>
    </div>
    </div>
  )
}

export default Banner