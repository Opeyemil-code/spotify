import React from "react";
import Map from "../image/imgMap";
import Pexel from '/images/Pexel.png'

export default function FirstBox(params) {
    return(
     <div className="flex flex-row bg-blue mt-10 w-3/5 h-96 ml-6 p-4 rounded-3xl">

          <div className="flex-col space-y-8">
          <h1 className="font-quicksand font-normal text-white mt-6 ml-8">Curated Playlist</h1>
         <div className="flex flex-col ">
               <h1 className="font-quicksand text-4xl ml-8 text-white font-bold mt-10">R & B Hits</h1>
               <p className="ml-8 mt-3 font-quicksand text-white w-2/3">All mine, Lie again, Petty call me everyday,
              Out of time, No love, Bad habit,
              and so much more</p>
         </div>

       <div className="flex flex-row space-x-8">
           <Map />
         <img src="/icons/Heart.png" alt="" className="w-6 h-6"/>
          <p className="font-quicksand font-normal text-white">33k likes</p>
       </div>
          </div>


    <div>
        <img src={Pexel} alt="" className="h-full w-80"/>
    </div>



   </div>




   

   

    )
}