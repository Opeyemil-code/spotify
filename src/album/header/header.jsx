import React from "react";
import level from '/images/Lead-image.png'
import {FaPlay} from "react-icons/fa"
import Favorite from '/icons/Heart.png'
import Mapp from "../playlist/map";

export default function Heading(params) {
    return(
        <section className="bg-pattern bg-cover bg-repeat pb-8 opacity-4 lg:p-16">

            <div className="lg:w-3/5 mx-auto  bg-blac text-white">

            <div className="flex lg:flex-row lg:space-x-6 flex-col">
              <img src={level} alt="" className="rounded-lg w-72 lg:w-auto mx-auto lg:mx-0 z-40 mt-8"/>

              <div className="lg:mt-16 flex flex-col space-y-5  bg-red-90 font-quicksand">

                <h1 className="text-2xl font-bold font-quicksand lg:text-left text-center mt-3 lg:mt-0">Tomorrow's tunes</h1>
                <p className="font-medium lg:w-2/3 mx-auto lg:mx-0 text-center lg:text-left w-">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, beatae ad? Aspernatur,</p>
                <h1 className="font-bold text-lg text-center lg:text-left">64 songs - 16 hrs</h1>

                
                   <div className="flex flex-row space-x-2  mx-auto w-full  bg-red-90 lg:ml-0">

                       <button className="flex flex-row border space-x-6 w-28 justify-center h-7 rounded-lg bg-dark lg:mx-0 mx-auto">
                       <FaPlay className="w-5 mt-1 border-2  rounded bg-yellow-700"/>
                        <h3>Play all</h3>
                       </button>

                       <button className="flex flex-row border space-x- lg:w-60 justify-center h-7 rounded-lg bg-dark">
                       <FaPlay className="w-5 mt-1 border-2  rounded bg-yellow-700"/>
                        <h3 className="w-40">Add to collections</h3>
                       </button>

                       <div className="bg-gray-700 rounded-full px-3 py-2 justify-center flex">
                          <img src={Favorite} alt="w-5 h-5" />
                       </div>


                   </div>
                

              </div>
            </div>
        </div>

        <Mapp />
        </section>
    )
}