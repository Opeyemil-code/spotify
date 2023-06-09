import React from "react";
import Mapcolllection from "./mapcollection";


export default function Collect(params) {
    return (
        <section className="w- mx-auto bg-black lg:pb-28 p-4">

           <div className="lg:w-2/3 mx-auto text-white bg-green-30">

           <div  className="flex flex-row space-x-5 justify-center lg:justify-start">
                <button className="py-2 px-7 border-2 rounded-full hover:bg-yellow-300">My collections</button>
                <button className="py-2 px-5 border-2 rounded-full hover:bg-yellow-300">Likes</button>
            </div> 

            <Mapcolllection/>
           </div>

        </section>
    )
}