import React from "react";
import { FaPlay } from "react-icons/fa";
export default function Collection(props) {
    return (
        <section className="mt-2 mx-auto">

            <div>

              <div className="absolute lg:mt-40 ml-6 mt-28 font-quicksand ">                    
              
                <h1 className="font-bold font-quicksand text-2xl mt-2">{props.display.header}
                </h1>
                <p>{props.display.paragraph}</p>

                <div className="flex flex-row mt-4 space-x-40 bg-green-20  lg:hidden">
                    <h1>23m Likes</h1>

                    <button className="border rounded-full p-2 hover:bg-yellow-400">
                    <FaPlay className=""/>
                    </button>
                </div>

              </div>

                <img src={props.display.img} alt="" className="lg:w-60 w-80 h-60  rounded-xl ease-in-out duration-100 delay-100 hover:transition hover:transition-transform lg:hover:scale-110 lg:hover:scale-130 hover:scale-90"/>


            </div>

        </section>
    )
}