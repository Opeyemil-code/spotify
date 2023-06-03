import React from "react";
import Logo from '/icons/logo.png'
import search from '/icons/search(1).png'
import Display from "./menu/displayMenu";
import Playlist from "./playlist/playlist";
import {FaBars, FaTimes, FaHome} from "react-icons/fa"

export default function Home(params) {

    const [open,setopen] = React.useState(true)

    function handleMenu(params) {
        setopen(
          (prev) => !prev
        )
      }

   return(
         <div className="bg-black">

           <div className="lg:w-2/3 mx-auto bg-black ">
        <div className="flex flex-row space-x-6 bg-black ">
        {
            <button onClick={handleMenu}>
               { open  ? <FaBars className="ml-6 w-12 mt-3 lg:hidden bg-white rounded h-7"/> :
             <FaTimes className="ml-6 w-12 mt-3 lg:hidden bg-white rounded h-6"/>}
            </button>
        }
        <img src={Logo} alt="" className="lg:ml-16 mt-2"/>

          <div className="flex flex-row bg-green-90 w-11/12 justify-end">
          <img src={search} alt="" className="w-8 h-8 mt-1 mr-1 mt-2 lg:mr-0"/>
          <input type="search" name="" id="" className="w-11/12 border-black border bg-darkalt text-white lg:block hidden" placeholder="Search artists"/>
          </div>


        </div>
        

        <div className="flex lg:flex-row lg:space-x-6 flex-col">
        <Display open={open}/>
        <Playlist />
        </div>
        
        


    </div>
         </div>
   ) 
}