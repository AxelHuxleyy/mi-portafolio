import React from 'react';

const Projects = () => {
    return (
        <section className=" text-gray-700 bg-white mt-5 shadow-lg rounded-lg">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"> More Projects</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-base">
                        On this part you can find the main project that has a grade impact on me.
                    </p>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(/crm.png)` }}></div>

                        <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                            <div className=" inline-flex flex-wrap ">
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">next</div>
                                </div>

                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">GraphQL</div>
                                </div>

                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-blue-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">Apollo</div>
                                </div>
                                
                            </div>
                            <div className="title-post font-medium mt-2">CRM</div>

                            <div className="summary-post text-base text-justify">This project it's about of a CRM that was created for me. This project was developed with Next js, tailwindcss, Apollo client and more librearies but this are the main tecnologies
                                <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">More information</span></button>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: 'url(crmback.jpeg' }}></div>

                        <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                            <div className=" inline-flex flex-wrap ">
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">node</div>
                                </div>

                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">GraphQL</div>
                                </div>

                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-blue-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">Apollo</div>
                                </div>
                                
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-black " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">js</div>
                                </div>
                            </div>
                            <div className="title-post font-medium mt-2">Back-end for CRM</div>

                            <div className="summary-post text-base text-justify">This project it's about of backa-end of CRM, you can see how i mangaget the data with node, graphQl, Apllo, jwt and mongo db
                                <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">More information</span></button>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: 'url(./maps.png' }}></div>

                        <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                            <div className=" inline-flex flex-wrap ">
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">React-native</div>
                                </div>

                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">google-maps</div>
                                </div>

                               
                                
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-black " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">js</div>
                                </div>
                            </div>
                            <div className="title-post font-medium mt-2">Troyta lift</div>

                            <div className="summary-post text-base text-justify">This project it's about of an application Android that i build for my university, on this application you can view the people that has a car and can give lift for the people that does not has a car, on the application you can see de diferents rute thtat the people has a car take and you can contact with him and reques him a lift. 
                                <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">More information</span></button>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: 'url(mern.png' }}></div>

                        <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                            <div className=" inline-flex flex-wrap ">
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">node</div>
                                </div>

                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">Express</div>
                                </div>
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">Mongo</div>
                                </div>
                            </div>
                            <div className="title-post font-medium mt-2">Back-end for Troyalift</div>

                            <div className="summary-post text-base text-justify">This project it's about of backa-end of Troyalift this project had been develoop with node and express for build the diferents end-points that the app need it.
                                <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">More information</span></button>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/AxelHuxleyy/blog-movies/main/img/logo5.jpeg' }}></div>

                        <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                            <div className=" inline-flex flex-wrap ">
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">php</div>
                                </div>

                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-black " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">js</div>
                                </div>

                                
                                
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2 ml-2 cursor-help">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">mysql</div>
                                </div>
                            </div>
                            <div className="title-post font-medium mt-2">ClubCinema</div>

                            <div className="summary-post text-base text-justify">This project it's about of clubCinema, on this project you can review, comment and add diferent movies for get feedback of the diferents users.
                                <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">More information</span></button>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                        <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80' }}></div>

                        <div className="  bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                            <div className=" inline-flex flex-wrap ">
                                <div className="w-auto rounded-lg bg-gray-200 flex flex-row p-1 pr-2">

                                    <div className=" flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                    </div>
                                    <div className="category-title flex-1 text-sm">react-native</div>
                                </div>

                                
                            </div>
                            <div className="title-post font-medium mt-2">interface copy instagram</div>

                            <div className="summary-post text-base text-justify">This project it's about of a interface copy instagram, this project was build with react-native
                                <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span className="">More information</span></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Projects;