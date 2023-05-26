import React from "react";
import love from '/icons/Iconly/Two-tone/Heart.png'


export default function Display(props) {

    

    return(
            
  <div className="flex flex-col mt- space-y-6 mt- mx-auto">
    <div className="flex flex-row space-x-4 bg-darkalt w-80 rounded-lg">
              <div>
                <img src={props.image} alt="" className="w-20 rounded-lg "/>
              </div>

              <div className="flex flex-col text-white font-quicksand">
                <h1 className="text-xl">{props.header}</h1>
                <p className="text-sm font-thin opacity-75">{props.paragraph}</p>
                <p>{props.duration}</p>
              </div>

             <div className="border mt-8 py-2 h-8 px-1 rounded-full ">
             <img src={love} alt="" />
             </div>

            </div>     

      
      </div>   
    )
}




/*<Carousel responsive={responsive}>
     <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
</Carousel>






 <div className="flex flex-row space-x-4 bg-darkalt w-80 rounded-lg">
              <div>
                <img src={props.image} alt="" className="w-20 rounded-lg "/>
              </div>

              <div className="flex flex-col text-white font-quicksand">
                <h1 className="text-xl">{props.header}</h1>
                <p className="text-sm font-thin opacity-75">{props.paragraph}</p>
                <p>{props.duration}</p>
              </div>

             <div className="border mt-8 py-2 h-8 px-1 rounded-full ">
             <img src={love} alt="" />
             </div>

            </div>*/