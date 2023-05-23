import React from "react";
import chartData from "./chartData";
import Display from "./display";

export default function SecondMap(params) {

const [result, setresult] = React.useState(chartData.map(
    (params) => {
        return <Display 
        key={params.id}
        image={params.img}
        header={params.header}
        duration={params.duration}
        paragraph={params.paragraph}/>
    }
))

    return(
        <div className="mt-14 flex flex-col space-y-6">{result}</div>
    )
}