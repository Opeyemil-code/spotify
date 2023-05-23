import React from "react";
import Logo from '/icons/logo.png'
import search from '/icons/search(1).png'
import Menu from "./menu/menu";
import Playlist from "./playlist/playlist";

export default function Home(params) {
   return(
    <div className="w-2/3 mx-auto bg-black ">

        <div className="flex flex-row space-x-24">
          <img src={Logo} alt="" />

          <div className="flex flex-row bg-green-90 w-11/12">
          <img src={search} alt="" className="w-6 h-6 mt-1"/>
          <input type="search" name="" id="" className="w-11/12 border-black border bg-darkalt text-white" placeholder="Search artists"/>
          </div>


        </div>


        <div className="flex flex-row space-x-6">
        <Menu />
        <Playlist />
        </div>
        
        


    </div>
   ) 
}