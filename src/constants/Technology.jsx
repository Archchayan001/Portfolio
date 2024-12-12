import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiFigma, SiAdobephotoshop, SiGit } from 'react-icons/si';

const Technology = () => {
  return (
    <div className='border-neutral-800 pb-24' id='technologies'>
      <h1 className='my-20 text-4xl text-center'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 p-4'>
          <SiHtml5 className='text-7xl text-orange-500'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <SiCss3 className='text-7xl text-blue-500'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <SiJavascript className='text-7xl text-yellow-500'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <SiTailwindcss className='text-7xl text-sky-400'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <SiBootstrap className='text-7xl text-purple-600'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <SiFigma className='text-7xl text-pink-500'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <SiAdobephotoshop className='text-7xl text-blue-400'/>
        </div>
        <div className='rounded-2xl border-4 p-4'>
          <SiGit className='text-7xl text-red-600'/>
        </div>
      </div>
    </div>
  );
}

export default Technology;
