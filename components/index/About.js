import React from 'react';

const About = () => {
    return (
        <>

            <div className="w-full flex flex-row justify-center ">

                <div className="flex flex-wrap justify-between shadow-lg bg-white ">

                    <div className="max-w-screen-sm p-5    ">
                        <h1 className='text-4xl text-black font-sans text-center'>My skills</h1>
                        <div className="mt-3 pl-5 font-thin text-2xl lg:border-r-2 md:border-b-0 sm:border-b-2  border-b-2 border-gray-100">
                            <p className="mt-2">Teamwork.</p>
                            <p className="mt-2">Organized.</p>
                            <p className="mt-2">Responsable.</p>
                            <p className="mt-2">Analysis capacity.</p>
                            <p className="mt-2">Initiative.</p>
                            <p className="mt-2">Proactive</p>

                        </div>

                        <h1 className='text-4xl text-black font-sans mt-10 text-center'>Lenguaje</h1>
                        <div className="max-w-screen-sm p-5 border-b-2 w-full  lg:border-r-2 md:border-b-0 sm:border-b-2   
                              border-gray-100 ">
                            <h1 className="mt-2 font-thin text-2xl sm:text-center">English: intermediate</h1>

                        </div>

                        <h1 className='text-4xl text-black font-sans mt-10 text-center'>knowledge</h1>
                        <div className="max-w-screen-sm p-5 border-b-2 w-full  lg:border-r-2 md:border-b-0 sm:border-b-2   
                              border-gray-100 font-thin text-2xl">

                            <p className="mt-2">Mongo and Oracle.</p>
                            <p className="mt-2">React native.</p>
                            <p className="mt-2">React js.</p>
                            <p className="mt-2">javaScript</p>
                            <p className="mt-2">Boostrap and tailwind.</p>
                            <p className="mt-2">php</p>
                            <p className="mt-2">node js</p>
                        </div>
                    </div>

                        <div className="max-w-screen-sm p-5">
                            <h1 className='text-4xl text-black font-sans text-center'>About me </h1>
                            <p className='text-justify text-black  mt-10 font-thin text-xl'>
                                👋Hello! I am Axel Huxley, recently graduated in software development engineering from the computer science faculty at the Autonomous Universidad Autonoma de Querétaro.
                            </p>
                            <p className="text-justify  text-black mt-3 font-thin text-xl">
                                🎓During this university stage I have developed many personal and academic projects, in which I have been able to develop my communication skills, leadership, teamwork, tolerance, and how to solve and address the different problems that I encountered. At the same time I was studying, I took multiple courses on my own, such as: master in javaScript, react js, react native, react advanced: next js, graphql, apollo, tailwind, react hooks, oracle, unity. In addition to doing the aforementioned, I also made a couple of websites for some SMEs.

                            </p>

                            <p className="text-justify text-black  mt-3 font-thin text-xl">
                                i'm very apassionated for web develop and movil, i like to been on all process that's meaning that i like fronted and back-end and deployment because i like it how is the all process for build application and deploy it for production 

                            </p>

                            <p className="text-justify  text-black mt-3 font-thin text-xl">

                                💻The projects that I have done are mostly done with the JavaScript programming language, for the most part I have worked with react, react native, node js, mongodb, mysql, graphql.
                            </p>

                            <p className="text-justify  text-black mt-3 font-thin text-xl">
                                🎯 My goal is to develop my professional career as a web or mobile developer until I can become a full-stack JavaScript developer, I would like to be part of a company in which I am allowed to apply all that I have learned so far and continue to grow both personally and professionally to achieve the best possible results.

                            </p>

                        </div>

                    </div>




                </div>
        </>
            );
}

            export default About;