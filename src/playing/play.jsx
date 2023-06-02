import React from "react";
import Shuffle from "/new-icon/vuesax/bold/vuesax/bold/shuffle.png"
import Previous from "/new-icon/vuesax/bold/vuesax/bold/previous.png"
import { FaPlay } from "react-icons/fa";
import Next from "/new-icon/vuesax/bold/vuesax/bold/next.png"
import Speaker from '/public/new-icon/vuesax/bold/volume-high.png'
import repeat from "/new-icon/vuesax/bold/vuesax/bold/repeate-one.png"


export default function Playing(params) {

    



    return(
        <section className="bg-red-900  text-red-800">
           
           <div className="bg-shark top-96 mt-28 fixed lg:top-96 lg:mt-80 left-0 right-0 z-50 mx-auto lg:h-40 text-white ">
           
            <main className="lg:flex flex-row w-11/12 mx-auto font-quicksand lg:space-x-14">

              <div className="flex lg:mt-2 flex-row space-x-2 lg:w-60 bg-green-30 w-20">
                <img src="/images/Rectangle14.png" alt="" className="w-20 rounded-lg "/>
                <div className="mt-1">
                    <h1 className="text-2xl">Season In</h1>
                    <p>James</p>
                </div>
              </div>


              <div className="flex lg:flex-col w-2/3 bg-whit lg:space-y-5 flex-row">

                <div className="flex flex-row lg:space-x-40 mt-4 mx-auto lg:ml-0 ml-48 space-x-4">
                 <img src={Shuffle} alt="" className="lg:block hidden"/>
                <img src={Previous} alt="" className="lg:block hidden"/>
                <div className="border px-1 py-1 rounded-full hover:bg-yellow-300">
                <FaPlay className=""/>
                </div>
                <img src={Next} alt="" className="lg:block hidde"/>
                <img src={repeat} alt="" className="lg:block hidden"/>
                </div>

                <div className="w-full bg-whit lg:ml-10">
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