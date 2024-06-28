'use client'

import { useEffect, useRef } from "react";
import HomePageSolutions from "./components/home/index.jsx";

export default function Home() {

  const video1Ref = useRef(null);

  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.currentTarget.play();
    };

    const handleMouseLeave = (event) => {
      event.currentTarget.pause();
      event.currentTarget.currentTime = 0;
    };

    const video1 = video1Ref.current;

    video1.addEventListener('mouseenter', handleMouseEnter);
    video1.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      video1.removeEventListener('mouseenter', handleMouseEnter);
      video1.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  return (
    <>
      <div className="w-full bg-background flex items-center px-4 border-b border-black gap-2 pt-16 pr-4 pb-4 pl-4  md:flex-row md:items-center sm:flex-col sm:items-center">
        <div className="text-center text-4xl font-semibold mt-8">
          <h1 className="text-white text-4xl md:text-7xl">Technology Agency</h1>
          <div className="grid justify-center">
            <p className="text-white font-light mt-4 w-full  mx-auto">
              We create advanced and innovative solutions for diverse clients and sectors
            </p>
            <p className="text-white font-light mt-4 w-full mx-auto">
              We solve problems by programming digital ideas, helping companies build their new futures.
            </p>
          </div>
        </div>
        <div className="w-full mt-8 hidden sm:block">
          <video
            ref={video1Ref}
            className="w-full md:max-w-full"
            width="1460"
            height="968"
            style={{ cursor: 'pointer' }}
            muted
          >
            <source src="/video1.mp4" type='video/mp4' />
          </video>
        </div>


      </div>
      <HomePageSolutions />

    </>
  );
}
