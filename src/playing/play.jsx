import React from "react";
import {useState,useEffect, useRef} from "react";
//import useSound from "use-sound";
import { faBackwardStep, faForwardStep, faPause, faPhoneVolume, faPlay, faRepeat, faShuffle, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Play from '/src/album/playlist/playData.jsx'

export default function Playing() {

    const [Song, setSong] = useState(Play)

    const [isPlaying, setisPlaying] = useState(false);

    const [currentSong, setCurrentSong] = useState(Play[0])



    /** FOR THE PAUSE AND PLAY FUNCTIONALITY */

    const audioEl = useRef()
   
    function togglePlayPause(params) {
        if (isPlaying) {
            audioEl.current.pause()
            setisPlaying(false)
        } else {
            audioEl.current.play()
            setisPlaying(true)
            
            
        }
    }

   /*********************************************** */
  

   /*** FOR THE PREV BUTTON ****/

    function PrevBtn(params) {
        const index = Song.findIndex(x=>x.title == currentSong.title)
        if (index == Song.length ) {
           setCurrentSong(Song.length - 1) 
           audioEl.current.play()
           setisPlaying(true)     
        } else {
            setCurrentSong(Song[index -1])
          setisPlaying(true)
        }
        audioEl.current.currentTime = 0
    }

 /************************************* */

  /*** FOR THE NEXT BUTTON  */


  function NextBtn(params) {
    const index = Song.findIndex(x=>x.title == currentSong.title)
    if (index == Song.length - 1 ) {
       setCurrentSong(Song) 
       audioEl.current.play()
      setisPlaying(true)     
    } else {
        setCurrentSong(Song[index + 1])
       setisPlaying(true)
    }
    audioEl.current.currentTime = 0
}


/************************************* */



/** This is for the progress Bar */

    function onPlaying(params) {
        /** this is used to track duration and current time of our music */
      const duration = audioEl.current.duration;
      const ct = audioEl.current.currentTime;
     
       setCurrentSong({ ...currentSong, "progress": ct/duration * 100, "length": duration})
    }


/** ********************************** */

  


  const style = {
    width: `${currentSong.progress+"%"}`,
    height : '4px',
    backgroundColor : 'yellow'
  }


    return (

    <section className="z-50">
           
    <div className="bg-gradient-to-r from-gray-800 to-gray-300 top- bottom-0   fixed lg:top-96 lg:mt-80 left-0 right-0 z-50 mx-auto lg:h-40 text-white h-28 z-50">
    
     <main className="lg:flex flex-row w-11/12 mx-auto font-quicksand space-x-16 ">

       <div className="flex mt-2 flex-row space-x-2 lg:w-60 bg-green-30 w-60 bg-whit">
         <img src={currentSong.img} alt="" className="w-20 rounded-lg "/>
         <div className="mt-1">
             <h1 className="text-xl">{currentSong.title}</h1>
             <p>{currentSong.artiste}</p>
         </div>
       </div>


       <div className="flex lg:flex-col w-2/3 bg-whit lg:space-y-5 flex-row absolute top-0 lg:relative lg:mt-0 mt-6">

       <audio src={currentSong.src} ref={audioEl} onTimeUpdate={onPlaying} autoPlay/>

         <div className="flex flex-row lg:space-x-40 mt-4 mx-auto lg:ml-0 ml-48 space-x-4">
         <FontAwesomeIcon icon={faShuffle} className="lg:block hidden h-7 mt-1"/>

         <FontAwesomeIcon icon={faBackwardStep} className="lg:block hidden h-7 mt-1" onClick={PrevBtn}/>

         {/* CONDITION FOR DISPLAYING THE PLAY AND PAUSE   */ 

         <div className="border px-3 py-2 rounded-full hover:bg-yellow-300" >
         {
             isPlaying ? <FontAwesomeIcon icon={faPause} className="h-5" onClick={togglePlayPause}/> : <FontAwesomeIcon icon={faPlay} onClick={togglePlayPause}/>
         }  
         </div>

        /** **************************************88 */}

         <FontAwesomeIcon icon={faForwardStep} className="lg:block  h-7 mt-1" onClick={NextBtn}/>

         <FontAwesomeIcon icon={faRepeat} className="lg:block hidden h-7 mt-1"/>
         </div>
 
 
        {/** Progress Bar Navigation here *************/}

         <div className="bg-white w-full h-1 rounded-full lg:block hidden">

         <div className="bg-green-900 w-0 rounded-full" style={style}></div>
             
         </div>

       </div>

       {/** ***************************** *************/}

  

       <div className="flex flex-row bg-green-20 w-96 mt-8 space-x-6">
       <FontAwesomeIcon icon={faVolumeHigh} className=""/>
        
         <progress id="file" value="32" max="100" className="bg-red-900 h-1 mt-2 lg:block hidden" > 32% </progress>
         
       </div>



     </main>

    </div>

 </section>
)

}



