import React from 'react';
import AboutImage from '../assets/e5.jpg'; // Renamed the import to 'AboutImage'
import { ABOUT_TEXT } from '../constants/index';

const About = () => {
  return (
    <div className="border-r-neutral-900" id="about">
      <h1 className="my-10 text-center text-4xl">
        About <span className="text-neutral-500 px-2">Me</span>
      </h1>
      <div className="flex items-stretch justify-between"> {/* Use 'items-stretch' to make children stretch to the same height */}
  {/* Left side (image) */}
  <div className=" lg:w-1/2 flex justify-center items-start lg:p-8">
    <div className="w-full h-[400px] flex items-center justify-center">
      
      <img className="h-[400px] object-cover rounded" src={AboutImage} alt="About" />
      {/* Black Mask */}
      
          
    </div>
  </div>

  {/* Right side (text) */}
  <div className="w-full lg:w-1/2 flex justify-center items-start lg:p-8">
    <div className="w-full h-[400px] flex items-center">
      <p className="my-0 max-w-xl">{ABOUT_TEXT}</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
