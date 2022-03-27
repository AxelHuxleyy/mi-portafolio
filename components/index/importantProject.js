import React from 'react';

const importantProject = () => {
    return (
        <div className='w-full flex flex-row justify-center mt-3'>
            <div className="max-w-screen-lg p-5 md:w-screen shadow-lg bg-white rounded-xl  ">
                <h1 className='text-4xl text-black font-sans text-center'>My most important project</h1>
                <p className='text-justify text-black  mt-10 font-thin text-xl'>
                    My most important project it's about of a crm, on this CRM you can mangament product, staff, orders and also you can see
                    different stats of your business.
                </p>
                <p className='text-justify text-black  mt-10 font-thin text-xl'>
                    Prove it <a className='text-blue-400' href='https://ventas.vercel.app/login/[id]?id=5fbab662e6b6404818803618'>here</a> (only desktop, no mobile)
                </p>

                <img src='crm.png' />

                <p className='text-justify text-black font-semibold  mt-10  text-xl'>
                    user: mundovape@gmail.com
                    <br/>
                    pass: admin
                </p>
                <p className='text-justify text-black  mt-10 font-thin text-xl'>
                    this project was develop with the following tecnologies:
                </p>
                <p className='text-justify text-black  mt-2 font-thin text-xl'>
                    Next JS
                </p>
                <p className='text-justify text-black  mt-2 font-thin text-xl'>
                    Node js
                </p>
                <p className='text-justify text-black  mt-2 font-thin text-xl'>
                    GraphQL
                </p>
                <p className='text-justify text-black  mt-2 font-thin text-xl'>
                    Mongo DB
                </p>
                <p className='text-justify text-black  mt-2 font-thin text-xl'>
                    Apollo client and Apollo server
                </p>

                <p className='text-justify text-black font-semibold  mt-10  text-xl'>
                    Extra
                </p>

                <p className='text-justify text-black  mt-10 font-thin text-xl'>
                    Also i have a simulation of e-commerce and it is connect with the CRM, that mean the product register on the CRM you see on the e-commer and also if you sell something from the web, the sell going to be register on the CRM. 
                </p>
                <p className='text-justify text-black  mt-10 font-thin text-xl'>
                    Prove it <a className='text-blue-400' href='https://mundovape-axelhuxley.vercel.app/inicio'>here</a> (only desktop, no mobile)
                </p>

                <img src='mundoVape.png' />

            </div>
        </div>
    );
}

export default importantProject;