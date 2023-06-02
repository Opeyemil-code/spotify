import React from "react";
import { FaPlay } from "react-icons/fa";
export default function Collection(props) {
    return (
        <section className="mt-2 mx-auto">

            <div>

              <div className="absolute mt-40 ml-6">                    
              
                <h1 className="font-bold font-quicksand text-2xl mt-2">{props.display.header}
                </h1>
                <p>{props.display.paragraph}</p>

                <div className="flex flex-row mt-5 space-x-32 bg-green-20  lg:hidden">
                    <h1>23m Likes</h1>

                    <button className="border rounded-full p-2">
                    <FaPlay className=""/>
                    </button>
                </div>

              </div>

                <img src={props.display.img} alt="" className="lg:w-60 w-72  rounded-xl"/>


            </div>

        </section>
    )
}