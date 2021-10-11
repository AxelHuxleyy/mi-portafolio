import React from 'react';
import 'tailwindcss/tailwind.css'
import Navbar from '../components/navBar'
import BasicInfo from '../components/projects/basicInformation'

const Projects = () => {
    return (
        <>
        <div className='bg-blue-400'>
            <Navbar/>
        </div>
        <div className=' w-full '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#0099FF" fill-opacity="1" d="M0,96L48,90.7C96,85,192,75,288,85.3C384,96,480,128,576,138.7C672,149,768,139,864,138.7C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>        
        </div>
        <BasicInfo />
        </> 
     );
}
 
export default Projects;