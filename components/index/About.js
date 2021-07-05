import React from 'react';

const About = () => {
    return (
        <>

            <div className="w-full flex flex-row justify-center ">

                <div className="flex flex-wrap justify-between shadow-lg bg-white ">

                    <div className="max-w-screen-sm p-5    ">
                        <h1 className='text-4xl text-black font-sans '>My skills</h1>
                        <div className="mt-3 pl-5 font-thin text-2xl lg:border-r-2 md:border-b-0 sm:border-b-2  border-b-2 border-gray-100">
                            <p className="mt-2">Teamwork.</p>
                            <p className="mt-2">Organized.</p>
                            <p className="mt-2">Responsable.</p>
                            <p className="mt-2">Analysis capacity.</p>
                            <p className="mt-2">Initiative.</p>
                            <p className="mt-2">Proactive</p>

                        </div>

                        <h1 className='text-4xl text-black font-sans mt-10 sm:text-center'>Lenguaje</h1>
                        <div className="max-w-screen-sm p-5 border-b-2 w-full  lg:border-r-2 md:border-b-0 sm:border-b-2   
                              border-gray-100 ">
                            <h1 className="mt-2 font-thin text-2xl sm:text-center">English: intermediate</h1>

                        </div>

                        <h1 className='text-4xl text-black font-sans mt-10 sm:text-center'>knowledge</h1>
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
                            <h1 className='text-4xl text-black font-sans sm:text-center'>About me </h1>
                            <p className='text-justify text-black  mt-10 font-thin text-xl'>
                                👋Hello! I am Axel Huxley, recently graduated in software development engineering from the computer science faculty at the Autonomous Universidad Autonoma de Querétaro.
                            </p>
                            <p className="text-justify  text-black mt-3 font-thin text-xl">
                                🎓During this university stage I have developed many personal and academic projects, in which I have been able to develop my communication skills, leadership, teamwork, tolerance, and how to solve and address the different problems that I encountered. At the same time I was studying, I took multiple courses on my own, such as: master in javaScript, react js, react native, react advanced: next js, graphql, apollo, tailwind, react hooks, oracle, unity. In addition to doing the aforementioned, I also made a couple of websites for some SMEs.

                            </p>

                            <p className="text-justify text-black  mt-3 font-thin text-xl">
                                Me apasiona el desarrollo web y móvil, considero que en la actualidad estas dos aspectos son muy importantes en nuestro día a día, cada vez estos aspectos están siendo mas usados por la población en general y esto conlleva a que en la actualidad sea difícil imaginar un mundo sin estos aspectos.

                            </p>

                            <p className="text-justify  text-black mt-3 font-thin text-xl">

                                💻Los proyectos que eh realizado en su mayoría están hechos con el lenguaje de programación JavaScript, en su mayor parte eh trabajado con react, react native, node js, mongodb, mysql, graphql.
                            </p>

                            <p className="text-justify  text-black mt-3 font-thin text-xl">
                                🎯 Mi objetivo es desarrollar mi carrera profesional como desarrollador web o movil hasta poder convertirme en un desarrollador full-stack JavaScript, me gustaría formar parte de una empresa en la cual se me permita aplicar todos lo que he aprendido hasta ahora y seguir creciendo tanto personal como profesionalmente para lograr los mejores resultados posibles.
                            </p>

                        </div>

                    </div>




                </div>
        </>
            );
}

            export default About;