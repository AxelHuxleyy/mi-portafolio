import React from 'react';
import { RViewer } from 'react-viewerjs'

let sourceUrl = [requrie("./about.jpg"),require("./coding.jpg"),require("./cover.jpg")]


const BasicInformation = () => {
    return (
        <div className='flex flex-row '>
            <div className="flex flex-wrap justify-between shadow-lg bg-white rounded-xl ">
                <div className="max-w-screen-sm p-5">
                    <RViewer imageUrls={sourceUrl}>
                       
                    </RViewer>
                </div>
                <div className="max-w-screen-sm p-5">

                </div>
            </div>
        </div>
    );
}

export default BasicInformation;
