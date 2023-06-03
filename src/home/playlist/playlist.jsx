import React from "react";
import Map from "./image/imgMap";
import FirstBox from "./1st/1st";
import SecondMap from "./2nd/2ndMap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Firstimg from '/images/Lead-image.png'
import love from '/icons/Iconly/Two-tone/Heart.png'
import SecondImag from '/images/Rectangle17.png'
import Thirdimage from '/images/Rectangle17(1).png'


export default function Playlist(params) {

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
        <div className="z-10">
            <div className=" flex bg-red-90 lg:block hidden ">
                <h1 className="text-white font-quicksand font-bold text-2xl text-end mr-52">Top Charts</h1>
            </div>

            <div className="flex lg:flex-row bg-green-90 lg:space-x- flex-col">

          <FirstBox />     
           <SecondMap />

           {
            /**this is mobile Text */
             <h1 className="text-white  font-quicksand font-bold text-2xl ml-8 lg:hidden mt-4">Top Charts</h1>
           }

           <Carousel responsive={responsive} className="lg:hidden">


            {/** First div boxes */}
           <div className="flex bg-whit pb-4">

           <div className="flex flex-row space-x-4 bg-darkalt w-80 rounded-lg mx-auto mt-4 pb-4">

              <main className="flex flex-col ml-4 space-y-2 mt-2 bg-yellow-90">
              <div>
                <img src={Firstimg} alt="" className="w-20 rounded-lg "/>
              </div>

              <div className="flex flex-col text-white font-quicksand space-y-4">
                <h1 className="text-xl font-bold">Golden age of 80s</h1>
                <p className="text-sm font-bold opacity-75">Sean Swadder</p>
                <p className="font-bold">2:54:45</p>
              </div>
              </main>

             <div>
             <div className="border mt-8 py-2 h-8 px-1 rounded-full ml-16 ">
             <img src={love} alt="" />
             </div>
             </div>

            </div>   

           </div>

          {/** Second carousel div box start here  */}

           <div>

          <div className="flex flex-row space-x-4 bg-darkalt w-80 rounded-lg mx-auto mt-4 pb-4">

         <main className="flex flex-col ml-4 space-y-2 mt-2 bg-yellow-90">
       <div>
     <img src={SecondImag} alt="" className="w-20 rounded-lg "/>
       </div>

      <div className="flex flex-col text-white font-quicksand space-y-4">
        <h1 className="text-xl font-bold">Reggae 'n' blues</h1>
        <p className="text-sm font-bold opacity-75">Dj Yk mule</p>
        <p className="font-bold">2:54:45</p>
       </div>
        </main>

        <div>
         <div className="border mt-8 py-2 h-8 px-1 rounded-full ml-20 ">
        <img src={love} alt="" />
        </div>
       </div>

         </div>   
   </div>



{/** Third carousel Box starts here */}
        <div>
 
        <div className="flex flex-row space-x-4 bg-darkalt w-80 rounded-lg mx-auto mt-4 pb-4">

        <main className="flex flex-col ml-4 space-y-2 mt-2 bg-yellow-90">
        <div>
            <img src={Thirdimage} alt="" className="w-20 rounded-lg "/>
       </div>

       <div className="flex flex-col text-white font-quicksand space-y-4">
             <h1 className="text-xl font-bold">Tommorow's tunes</h1>
            <p className="text-sm font-bold opacity-75">Obi Datti</p>
              <p className="font-bold">2:54:45</p>
           </div>
          </main>

       <div>
          <div className="border mt-8 py-2 h-8 px-1 rounded-full ml-16 ">
             <img src={love} alt="" />
       </div>
       </div>

          </div>   


  </div>


       </Carousel>
       
       
        </div>
        </div>
    )
}