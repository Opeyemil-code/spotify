import React from "react";
import Display from "./Display";
import playData from "./playData";

export default function Mapp(params) {
const mapover = playData.map(
    (params) => {
        return <Display
        key={params.id}
        display={params}/>
    }
)


    return(
        <div className="bg-whit mx-auto lg:w-2/3 flex flex-col space-y-6 w-">{mapover}</div>
    )
}