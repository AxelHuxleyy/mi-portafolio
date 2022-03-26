import React from 'react';
import Typical from 'react-typical'
import Menu from '../navBar';

const TEXTS= [
    "Axel Huxley",
    2000,
    "A Software Developer",
    1500,
    "A React Developer",
    1500,
    "A React native Developer",
    1500,
    "A mobile Developer",
    1500,
    "Full-Stack Developer",
    1500,
    "Web Developer",
    1500,
    "node Developer",
    2000,
    "</>",
    2000

  ]
const Cover = () => {
    return (
        <div class="w-full  shadow-md overflow-hidden f ">
            <div className="bg-local  bg-no-repeat bg-cover bg-center h-screen" style={{ backgroundImage: 'url(coverIpad.jpg)'}}>
                <Menu/>
                <div class="flex  items-center justify-center  h-full flex-col">

                    <div className="bg-white backdrop-opacity-90 p-5 opacity-75">
                        <div class="uppercase tracking-wide text-xl lg:text-4xl text-gray-500 font-medium text-center">!Hi, i'm</div>
                        <h1 className="uppercase tracking-wide text-2xl lg:text-6xl text-black font-semibold text-center">a Software developer </h1>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cover;