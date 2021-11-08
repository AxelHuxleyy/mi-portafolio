import React from 'react';

const Abaut = () => {
    return ( 
        <div className="mx-4 mt-5 p-5 shadow-lg rounded-xl bg-red-600 opacity-90 lg:mx-24">
            <h1 className="text-center  text-black text-xl uppercase font-bold">About me</h1>
            <p className='text-justify text-black  mt-10'>
            👋 ¡Hola!  Axel Huxley, recién egresado en ingeniería en desarrollo de software en la facultad de informática en la Universidad Autónoma de Querétaro.
            </p>
           

           
            <p className="text-justify  text-black mt-3">

                💻Los proyectos que eh realizado en su mayoría están hechos con el lenguaje de programación JavaScript, en su mayor parte eh trabajado con react, react native, node js, mongodb, mysql, graphql.
            </p>
            
            <p className="text-justify  text-black mt-3">
            🎯 Mi objetivo es desarrollar mi carrera profesional como desarrollador web o movil hasta poder convertirme en un desarrollador full-stack JavaScript, me gustaría formar parte de una empresa en la cual se me permita aplicar todos lo que he aprendido hasta ahora y seguir creciendo tanto personal como profesionalmente para lograr los mejores resultados posibles.
            </p>
            
        </div>
     );
}
 
export default Abaut;
