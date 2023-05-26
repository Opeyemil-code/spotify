import React from "react";
import menudata from "./menudata";
import Display from "./displayMenu";

export default function Menu(params) {

const [menu, setmenu] = React.useState(menudata.map(
    (params) => {
        return <Display
        key={params.id}
        image={params.img}/>
    }
))

    return(
        <div className="mt-10 flex flex-col space-y-10 bg-darkalt w-14 rounded-full ml-2 pb-6 lg:block hidden">
            {menu}
        </div>
    )
}