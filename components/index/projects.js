import React from 'react';

const Projects = () => {
    return (

        <div class=" w-auto mx-4 mt-8 p-5 shadow-2xl bg-white opacity-90 rounded-lg flex flex-col items-center lg:mx-24">

            <h1 className="text-center text-xl uppercase font-bold my-5">i work with this tecnologies</h1>


            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
                <div class="border-black dark:bg-gray-800 w-full h-52 | p-2 border--solidrounded-md border-2 | flex justify-around ">
                    <img class="w-auto h-auto object-cover" src="./javaScript.png" alt="" />

                </div>

                <div class="border-black dark:bg-gray-800 w-full h-52  | p-4 border-solid rounded-md border-2 | flex justify-around ">
                    <img class="w-auto h-auto object-cover" src="./react.png" alt="" />

                </div>

                <div class="border-black dark:bg-gray-800 w-full h-52  | p-4 border-solid rounded-md border-2 | flex justify-around ">
                    <img class="w-auto h-auto object-cover" src="./react-native.png" alt="" />

                </div>

                <div class="border-black dark:bg-gray-800 w-full h-52  | p-4 border-solid rounded-md border-2 | flex justify-around ">
                    <img class="w-full h-auto object-cover" src="./next.png" alt="" />
                </div>

                <div class="border-black dark:bg-gray-800 w-full h-52  | p-4 border-solid rounded-md border-2 | flex justify-around ">
                    <img class="w-auto h-auto object-cover" src="./flutter.png" alt="" />

                </div>
                <div class="border-black dark:bg-gray-800 w-full h-52  | p-4 border-solid rounded-md border-2 | flex justify-around ">
                    <img class="w-full h-auto object-cover" src="./node.png" alt="" />

                </div>
                <div class="border-black dark:bg-gray-800 w-full h-52  | p-4 border-solid rounded-md border-2 | flex justify-around ">
                    <img class="w-auto h-auto object-cover" src="./mongo-db.png" alt="" />
                </div>
                <div class="border-black dark:bg-gray-800 w-full h-52  | p-4 border-solid rounded-md border-2 | flex justify-around ">
                    <img class="w-auto h-auto object-cover" src="./graphQL.png" alt="" />
                </div>
            </div>

            <a href="" class="border-2 mt-8 border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
                see my projects
            </a>
        </div>
    );
}

export default Projects;