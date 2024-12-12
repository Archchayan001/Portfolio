import React from 'react';
import Navbar from './constants/Navbar';
import Profile from './constants/Profile';
import About from './constants/About';
import Technology from './constants/technology';
import Experience from './constants/Experience';
import Project from './constants/Project';
import Contact from './constants/Contact';

const App = () => {
  return (
    <div className="relative overflow-x-hidden  subpixel-antialiased text-cyan-300">
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Profile />
        <About />
        <Technology/>
        {/* <Experience/> */}
        <Project/>
        <Contact/>
      </div>
    </div>
  );
};



export default App;
