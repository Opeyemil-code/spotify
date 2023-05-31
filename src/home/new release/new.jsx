import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Glass from '/images/Rectangle 14.png';
import mountain from '/images/Rectangle 15.png';
import limit from '/images/Rectangle 16.png';
import everything from '/images/Rectangle 18.png';
import vivid from '/images/Rectangle 20.png'
import doubleface from '/images/Rectangle 21.png'


export default function NewRelease(params) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
        <div className="flex flex-col bg-black lg:w-2/3 mx-auto">
            <h1 className="lg:ml-10 mt-6 text-2xl font-bold font-quicksand text-white ml-6">New release</h1>
            
               <Carousel responsive={responsive} className="flex flex-row ml-16 mt-4">

               <div className="flex flex-col mt- space-y-2">
                    <img src={Glass} alt="" className="w-52 h-52 rounded-xl"/>
                    <h1 className="text-lg text-white font-bold font-quicksand">life in a bubble</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={mountain} alt="" className="w-52 h-52 rounded-xl"/>
                    <h1 className="text-lg text-white font-bold font-quicksand">Mountain</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={limit} alt="" className="w-52 h-52 rounded-xl"/>
                    <h1 className="text-lg text-white font-bold font-quicksand">life in a bubble</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={everything} alt="" className="w-52 h-52 rounded-xl"/>
                    <h1 className="text-lg text-white font-bold font-quicksand">life in a bubble</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={vivid} alt="" className="w-52 h-52 rounded-xl"/>
                    <h1 className="text-lg text-white font-bold font-quicksand">life in a bubble</h1>
                </div>

                <div className="flex flex-col mt- space-y-2">
                    <img src={doubleface} alt="" className="w-52 h-52 rounded-xl"/>
                    <h1 className="text-lg text-white font-bold font-quicksand">life in a bubble</h1>
                </div>

                </Carousel> 

            

        </div>
    )
}