import React from "react";
import {useState,useEffect, useRef} from "react";
//import useSound from "use-sound";
import { faBackwardStep, faForwardStep, faPause, faPhoneVolume, faPlay, faRepeat, faShuffle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AudioData from './playData.jsx';


export default function Playing(params) {

    const [songs, setSong] = useState(AudioData)

    const [isPlaying, setisPlaying] = useState(false);

    const [currentSong, setCurrentSong] = useState(AudioData[0])


    const audioEl = useRef()
   
    function PlayingBtn(params) {
        if (isPlaying) {
            audioEl.current.pause()
            setisPlaying(false)
        } else {
            audioEl.current.play()
            setisPlaying(true)
        }
    }


    let currentSongIndex = 0

    function PrevBtn(params) {
        if (currentSongIndex > 0 ) {
           
                
        }
    }


    function onPlaying(params) {
       const duration = audioEl.current.duration;
       const ct = audioEl.current.currentTime;

       setCurrentSong({...currentSong, "progress":ct/duration * 100, "length" : duration})
    }

 

    return (

    <section className="bg-red-900  text-red-800 z-99">
           
    <div className="bg-gradient-to-r from-gray-800 to-gray-300 top- bottom-0   fixed lg:top-96 lg:mt-80 left-0 right-0 z-50 mx-auto lg:h-40 text-white h-28">
    
     <main className="lg:flex flex-row w-11/12 mx-auto font-quicksand space-x-16 ">

       <div className="flex mt-2 flex-row space-x-2 lg:w-60 bg-green-30 w-60 bg-whit">
         <img src="/images/Rectangle14.png" alt="" className="w-20 rounded-lg "/>
         <div className="mt-1">
             <h1 className="text-xl">{currentSong.title}</h1>
             <p>{currentSong.artiste}</p>
         </div>
       </div>


       <div className="flex lg:flex-col w-2/3 bg-whit lg:space-y-5 flex-row absolute top-0 lg:relative lg:mt-0 mt-6">

       <audio src={currentSong.src} ref={audioEl} onTimeUpdate={onPlaying}/>

         <div className="flex flex-row lg:space-x-40 mt-4 mx-auto lg:ml-0 ml-48 space-x-4">
         <FontAwesomeIcon icon={faShuffle} className="lg:block hidden h-7 mt-1"/>
         <FontAwesomeIcon icon={faBackwardStep} className="lg:block hidden h-7 mt-1"/>
         <div className="border px-3 py-2 rounded-full hover:bg-yellow-300" onClick={PlayingBtn}>
         {
             isPlaying ? <FontAwesomeIcon icon={faPause} className="h-5" onClick={PlayingBtn}/> : <FontAwesomeIcon icon={faPlay} onClick={PlayingBtn}/>
         }
         </div>
         <FontAwesomeIcon icon={faForwardStep} className="lg:block  h-7 mt-1"/>
         <FontAwesomeIcon icon={faRepeat} className="lg:block hidden h-7 mt-1"/>
         </div>

         <div className="w-full bg-whit">
         <progress id="file" value="32" max="100" className="w-11/12 h-1 text-red-700 lg:block hidden" > 32% </progress> 
         </div>

       </div>


       <div className="flex flex-row bg-green-20 w-96 mt-8 space-x-6">
       <FontAwesomeIcon icon={faVolumeHigh} className=""/>
        
         <progress id="file" value="32" max="100" className="bg-red-900 h-1 mt-2 lg:block hidden" > 32% </progress>
         
       </div>



     </main>

    </div>

 </section>
)

}




// const [play,{pause, duration, sound}] = useSound('/music/03WetDreamz-Copy.mp3')