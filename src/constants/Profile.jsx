import React from 'react';
import { HERO_CONTENT } from '.';
import profilePic from '../assets/profile.jpg';

const Profile = () => {
  return (
    <div className=" lg:pb-10 lg:mb-10 mt-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Text Section */}
        <div className="w-auto lg:w-1/2 text-center lg:text-left lg:pl-20">
          <h1 className="font-thin tracking-tight mt-8 text-4xl lg:text-6xl xl:text-8xl">
            Archchayan
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-purple-500 to-purple-500 bg-clip-text text-2xl lg:text-4xl font-semibold tracking-tight text-transparent mt-6 block">
            Frontend Developer
          </span>
          <p className="my-4 max-w-xl font-light tracking-tighter mx-auto lg:mx-0">
            {HERO_CONTENT}
          </p>
        </div>

        {/* Profile Picture Section with Full Black Mask */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="relative flex justify-center items-center w-full h-auto max-w-md mx-auto">
            <img
              src={profilePic}
              alt="Archchayan"
              className="w-full h-[400px] object-cover rounded-3xl"
            />
            {/* Full Black Mask */}
            <div className="absolute inset-0 bg-black opacity-40 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
