import React from "react";
import {faEllipsisV, faHeart, faListUl} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import playData from "./playData";


export default function Display(props) {

  const audioEle = useRef()

  const [isPlaying,setIsPlaying] = useState(false)

  function playMusic(id) {
    
    if (isPlaying) {
     audioEle.current.pause()
     setIsPlaying(false)
     console.log(isPlaying)
    } else {
     audioEle.current.play()
    setIsPlaying(true)
      console.log(id)
      console.log(isPlaying)
     
 }
 
  }
 

    return(
        <div className="flex flex-row mt-10 bg-dark lg:space-x-40 h-12 rounded-lg space-x-4   mx-auto font-quicksand w-11/12 lg:w-full" onClick={playMusic}> 

     
            <div className="flex-row flex lg:space-x-4 space-x-1">
                <img src={props.display.img} alt="" className="w-10  rounded-lg"/>
                <FontAwesomeIcon icon={faHeart} className="w-8 lg:h-7 lg:mt-2 h-5 mt-3"/>
            </div>


           <div className="text-white mt-2 font-quicksand bg-yellow-90 lg:w-60  text-center w-60">
           <h1>{props.display.title}</h1>
           </div>

           <div className="mt-2 text-white lg:w-60">
            <h1>{props.display.artiste}</h1>
           </div>

           <div className="mt-2 text-white">{props.display.duration}</div>

           <div className="mt-4 ">
            <FontAwesomeIcon icon={faEllipsisV} className="mr-4"/>
           </div>

           <audio src={props.display.src} ref={audioEle} />

        </div>

    )
}