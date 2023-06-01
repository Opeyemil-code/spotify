import React from "react";

export default function Display(props) {
    return(
        <div className="flex flex-row mt-10 bg-dark lg:space-x-40 h-12 rounded-lg space-x-4 lg:w-auto  mx-auto"> 

            <div className="flex-row flex lg:space-x-4 space-x-1">
                <img src={props.display.img} alt="" className="w-10  rounded-lg"/>
                <img src={props.display.favorite} alt="" className="h-6 mt-2"/>
            </div>

           <div className="text-white mt-2 ">
           <h1>{props.display.text}</h1>
           </div>

           <div className="mt-2 text-white">
            <h1>{props.display.type}</h1>
           </div>

           <div className="mt-2 text-white">{props.display.duration}</div>

           <div className="mt-4">
            <img src={props.display.icon} alt="" />
           </div>

        </div>
    )
}