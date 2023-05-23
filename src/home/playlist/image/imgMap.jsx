import React from "react";
import data from "./data";
import Display from "./display";
export default function Map(params) {
     const [map, setmap] = React.useState(data.map(
         (params) => {
            return <Display 
            key={params.id}
            image={params.img}/>
         }
     ))

     return(
        <div className="flex ml-8 absolut">{map}</div>
     )
}