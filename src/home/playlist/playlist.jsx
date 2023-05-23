import React from "react";
import Map from "./image/imgMap";
import FirstBox from "./1st/1st";
import SecondMap from "./2nd/2ndMap";


export default function Playlist(params) {
    return(
        <div className="flex flex-row bg-green-90 space-x-8">
       <FirstBox />     
       <SecondMap />
        </div>
    )
}