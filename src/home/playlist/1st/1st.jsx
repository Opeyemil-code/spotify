import React from "react";
import Map from "../image/imgMap";
import Pexel from '/images/Pexel.png'

export default function FirstBox(params) {
    return(
     <div className="flex flex-row bg-blue lg:mt-0 mt-4 lg:w-3/5 lg:h-96 lg:ml-6 lg:p-4 rounded-3xl w-5/6 mx-auto h-96">

          <div className="flex-col space-y-8">
          <h1 className="font-quicksand font-normal text-white mt-6 ml-8">Curated Playlist</h1>
         <div className="flex flex-col ">
               <h1 className="font-quicksand text-4xl ml-8 text-white font-bold mt-20 lg:mt-10">R & B Hits</h1>
               <p className="ml-8 mt-3 font-quicksand text-white lg:w-2/3 w-5/6">All mine, Lie again, Petty call me everyday,
              Out of time, No love, Bad habit,
              and so much more</p>
         </div>

       <div className="flex flex-row lg:space-x-8 space-x-4">
           <Map />
         <img src="/icons/Heart.png" alt="" className="w-6 h-6"/>
          <p className="font-quicksand font-normal text-white text-xl">33k likes</p>
       </div>
          </div>


    <div className="bg-red-300 w-full hidden lg:block">
        <img src={Pexel} alt="" className="h-full w-96"/>
    </div>



   </div>




   

   

    )
}