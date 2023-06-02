import React from "react";
import datacollection from "./datacollection";
import Collection from "./collection";
export default function Mapcolllection(params) {

    const mapover = datacollection.map(
        (params) => {
            return <Collection 
            key={params.id}
            display={params}/>
        }
    )


    return(
        <div className="flex lg:flex-row lg:space-x-8 flex-col">{mapover}</div>
    )
}