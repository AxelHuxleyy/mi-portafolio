import React from 'react';


const Contact = () => {
    return ( 
        <>

        <div className="w-full flex flex-row justify-center mt-5 rounded-xl">

            <div className="flex flex-wrap justify-between shadow-lg bg-indigo-500 rounded-lg ">

                <div className="max-w-screen-sm p-5  flex flex-col border-r-2 border-gray-50 ">
                    <h1 className='text-4xl text-white font-sans text-center mt-4 '>My social Media</h1>
                    <div className="bg-white rounded-lg w-full flex flex-row items-center hover:bg-gray-200 cursor-pointer justify-center mt-5">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png" className="bg-center bg-cover w-14 h-14" />
                        <p> my github</p>
                    </div>
                    <div className="bg-white rounded-lg w-full flex flex-row items-center hover:bg-gray-200 cursor-pointer justify-center mt-5 p-4">
                        <img src="https://image.flaticon.com/icons/png/512/174/174857.png" className="bg-center bg-cover w-8 h-8" />
                        <p className="ml-3"> my linkedin</p>
                    </div>
                </div>

                    <div className="max-w-screen-sm p-5 flex flex-col items-center ">
                        <h1 className='text-4xl text-white font-sans text-center mt-4'>Contact me  </h1>
                            <div className="rounded-full w-52 h-52 bg-center bg-cover mt-5" style={{ backgroundImage:"url('https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=643&q=80')"}}>

                        </div>
                        <h1 className="text-2xl w-full font-thin  text-gray-200 mt-4">e-mail: axel_ra_s@hotmail.com</h1>
                        <h1 className="text-2xl w-full font-thin text-gray-200 mt-4">tel: 44 24 53 28 17</h1>

                    </div>

                </div>




            </div>
    </>
     );
}
 
export default Contact;