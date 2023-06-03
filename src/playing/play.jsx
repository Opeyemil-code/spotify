import React from "react";
import Shuffle from "/new-icon/vuesax/bold/vuesax/bold/shuffle.png"
import Previous from "/new-icon/vuesax/bold/vuesax/bold/previous.png"
import { FaPlay } from "react-icons/fa";
import Next from "/new-icon/vuesax/bold/vuesax/bold/next.png"
import Speaker from '/public/new-icon/vuesax/bold/volume-high.png'
import repeat from "/new-icon/vuesax/bold/vuesax/bold/repeate-one.png"


export default function Playing(params) {

    



    return(
        <section className="bg-red-900  text-red-800 z-99">
           
           <div className="bg-gradient-to-r from-gray-800 to-gray-300 top- bottom-0   fixed lg:top-96 lg:mt-80 left-0 right-0 z-50 mx-auto lg:h-40 text-white h-28">
           
            <main className="lg:flex flex-row w-11/12 mx-auto font-quicksand space-x-16 ">

              <div className="flex mt-2 flex-row space-x-2 lg:w-60 bg-green-30 w-60 bg-whit">
                <img src="/images/Rectangle14.png" alt="" className="w-20 rounded-lg "/>
                <div className="mt-1">
                    <h1 className="text-2xl">Season In</h1>
                    <p>James</p>
                </div>
              </div>


              <div className="flex lg:flex-col w-2/3 bg-whit lg:space-y-5 flex-row absolute top-0 lg:relative lg:mt-0 mt-6">

                <div className="flex flex-row lg:space-x-40 mt-4 mx-auto lg:ml-0 ml-48 space-x-4">
                 <img src={Shuffle} alt="" className="lg:block hidden w-5 h-7 mt-1"/>
                <img src={Previous} alt="" className="lg:block hidden w-5 h-7 mt-1"/>
                <div className="border px-2 py-2 rounded-full hover:bg-yellow-300">
                <FaPlay className=""/>
                </div>
                <img src={Next} alt="" className="lg:block w-5 h-7 mt-1"/>
                <img src={repeat} alt="" className="lg:block hidden w-5 h-7 mt-1"/>
                </div>

                <div className="w-full bg-whit">
                <progress id="file" value="32" max="100" className="w-11/12 h-1 text-red-700 lg:block hidden" > 32% </progress> 
                </div>

              </div>


              <div className="flex flex-row bg-green-20 w-96 mt-8 space-x-6">
                <img src={Speaker} alt="" className="w-5 h-5"/>
               
                <progress id="file" value="32" max="100" className="bg-red-900 h-1 mt-2 lg:block hidden" > 32% </progress>
                
              </div>



            </main>

           </div>

        </section>
    )
}