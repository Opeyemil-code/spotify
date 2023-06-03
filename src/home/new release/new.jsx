import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Glass from '/images/Rectangle14.png';
import mountain from '/images/Rectangle15.png';
import limit from '/images/Rectangle16.png';
import everything from '/images/Rectangle18.png';
import vivid from '/images/Rectangle20.png'
import doubleface from '/images/Rectangle21.png'


export default function NewRelease(params) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };




    return(
        <div className="bg-black ">
            <div className="flex flex-col bg-black lg:w-2/3 mx-auto ">
            <h1 className="lg:ml-16 mt-6 text-2xl font-bold font-quicksand text-white ml-6 ">New release</h1>
            
               <Carousel responsive={responsive} className="flex flex-row lg:ml-16 mt-4 bg-red-90 pb-8 z-10">

               <div className="flex flex-col mt- space-y-2 bg-red-90 lg:">
                    <img src={Glass} alt="" className="lg:w-52 lg:h-52 rounded-xl w-72 h-72 mx-auto lg:mx-0"/>
                    <h1 className="text-lg text-white font-bold font-quicksand lg:mx-0 mx-auto">Life in a bubble</h1>
                </div>

                <div className="flex flex-col mt- space-y-2 bg-red-90">
                    <img src={mountain} alt="" className="lg:w-52 lg:h-52 rounded-xl w-72 h-72 mx-auto lg:mx-0"/>
                    <h1 className="text-lg text-white font-bold font-quicksand lg:mx-0 mx-auto">Mountain Monkey</h1>
                </div>

                <div className="flex flex-col mt- space-y-2 bg-red-90">
                    <img src={limit} alt="" className="lg:w-52 lg:h-52 rounded-xl w-72 h-72 mx-auto lg:mx-0"/>
                    <h1 className="text-lg text-white font-bold font-quicksand lg:mx-0 mx-auto">Life is indeed great</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={everything} alt="" className="lg:w-52 lg:h-52 rounded-xl w-72 h-72 mx-auto lg:mx-0"/>
                    <h1 className="text-lg text-white font-bold font-quicksand lg:mx-0 mx-auto">Blind to the world</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={vivid} alt="" className="lg:w-52 lg:h-52 rounded-xl w-72 h-72 mx-auto lg:mx-0"/>
                    <h1 className="text-lg text-white font-bold font-quicksand lg:mx-0 mx-auto">Nomad</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={doubleface} alt="" className="lg:w-52 lg:h-52 rounded-xl w-72 h-72 mx-auto lg:mx-0"/>
                    <h1 className="text-lg text-white font-bold font-quicksand lg:mx-0 mx-auto">Chain</h1>
                </div>

                </Carousel> 

            

        </div>
        </div>
    )
}