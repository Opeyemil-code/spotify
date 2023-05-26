import React from "react";

export default function Display(props) {
    return(
            <button className="">
                <img src={props.image} alt=""  className="w-8 h-8 rounded-full mx-auto"/>
            </button>
    )
}