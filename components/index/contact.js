import React from 'react';


const Contact = () => {
    return ( 
        <>

        <div className="w-full flex flex-row justify-center mt-5 rounded-xl">

            <div className="flex flex-wrap justify-between shadow-lg bg-indigo-500 rounded-lg ">

                <div className="max-w-screen-sm p-5    ">
                    <h1 className='text-4xl text-black font-sans text-center mt-4'>My social Media</h1>
                   
                </div>

                    <div className="max-w-screen-sm p-5 flex flex-col items-center ">
                        <h1 className='text-4xl text-white font-sans text-center mt-4'>Contact me  </h1>
                            <div className="rounded-full w-52 h-52 bg-center bg-cover mt-5" style={{ backgroundImage:"url('https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"}}>

                        </div>
                        <h1 className="text-xl w-full  text-white mt-4">e-mail: axel_ra_s@hotmail.com</h1>
                        <h1 className="text-xl w-full text-white mt-4">tel: 44 24 53 28 17</h1>

                    </div>

                </div>




            </div>
    </>
     );
}
 
export default Contact;