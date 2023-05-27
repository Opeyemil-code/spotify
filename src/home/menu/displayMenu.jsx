import React from "react";
import {FaHome, FaMusic,} from "react-icons/fa"
import Radio from '/new-icon/icons8-radio-50.png'
import video from '/new-icon/icons8-video-50.png'
import profile from '/new-icon/icons8-users-30.png'
import logout from '/new-icon/icons8-logout-50.png'


export default function Display(props) {



    return(
        <>
        {props.open ? <div className="mt-4 lg:mt-10 flex flex-col space-y-8 bg-darkalt lg:w-20 lg:rounded-full  pb-4 lg:block hidde text-center w-11/12 mx-auto rounded-lg lg:relative absolut lg:ml-6 absolute ml-4 shadow-2xl shadow-black">
                <button className="mt-4 flex flex-row  rounded-lg lg:mx-auto lg:w-8 hove:bg-yellow-500 ml-2 space-x-6">
                    <FaHome className="w-10 h-6 bg-white"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Home</h1>
                </button>

                <button className="mt- flex flex-row rounded-lg lg:mx-auto lg:w-8 hver:bg-yellow-500 ml-2 space-x-6">
                    <FaMusic className="w-10 h-6 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">My collections</h1>
                </button>

                <button className="mt- flex flex-row  rounded-lg lg:mx-auto lg:w-9 justify-centr hver:bg-yellow-500 ml-2 space-x-6">
                    <img src={Radio} alt="" className="w-8 h-8 rounded-lg bg-white rounded-lg hover:bg-yellow-500 w-10"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Radio</h1>
                </button>

                <button className="mt- flex flex-row  rounded-lg lg:mx-auto lg:w-9 justify-cente ml-2 space-x-6">
                    <img src={video} alt=""  className="w-10 h-8 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Music videos</h1>
                </button>

                <button className="mt- flex flex-row  rounded-lg lg:mx-auto lg:w-10 justify-cente hovr:bg-yellow-500 ml-2 space-x-6">
                    <img src={profile} alt=""  className="w-10 h-8 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Profile</h1>
                </button>


                <button className="mt- flex flex-row bg-whit rounded-lg lg:mx-auto lg:w-10 justify-cente ml-2 space-x-6">
                    <img src={logout} alt=""  className="w-10 h-8 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Log out</h1>
                </button>    
            </div> : null}
            </>
    )
}

  


   
            




/**
 * 
 * <div className="mt-6 lg:mt-10 flex flex-col space-y-8 bg-darkalt lg:w-20 lg:rounded-full  pb-4 lg:block hidde text-center w-11/12 mx-auto rounded-lg">
                <button className="mt-4 flex flex-row  rounded-lg lg:mx-auto lg:w-8 hove:bg-yellow-500 ml-2 space-x-6">
                    <FaHome className="w-10 h-6 bg-white"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Home</h1>
                </button>

                <button className="mt- flex flex-row rounded-lg lg:mx-auto lg:w-8 hver:bg-yellow-500 ml-2 space-x-6">
                    <FaMusic className="w-10 h-6 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">My collections</h1>
                </button>

                <button className="mt- flex flex-row  rounded-lg lg:mx-auto lg:w-9 justify-centr hver:bg-yellow-500 ml-2 space-x-6">
                    <img src={Radio} alt="" className="w-8 h-8 rounded-lg bg-white rounded-lg hover:bg-yellow-500 w-10"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Radio</h1>
                </button>

                <button className="mt- flex flex-row  rounded-lg lg:mx-auto lg:w-9 justify-cente ml-2 space-x-6">
                    <img src={video} alt=""  className="w-10 h-8 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Music videos</h1>
                </button>

                <button className="mt- flex flex-row  rounded-lg lg:mx-auto lg:w-10 justify-cente hovr:bg-yellow-500 ml-2 space-x-6">
                    <img src={profile} alt=""  className="w-10 h-8 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Profile</h1>
                </button>


                <button className="mt- flex flex-row bg-whit rounded-lg lg:mx-auto lg:w-10 justify-cente ml-2 space-x-6">
                    <img src={logout} alt=""  className="w-10 h-8 bg-white rounded-lg hover:bg-yellow-500"/>
                    <h1 className="lg:hidden text-white font-quicksand text-lg font-bold hover:text-yellow-500">Log out</h1>
                </button>

                

                
            </div>
    )
 */