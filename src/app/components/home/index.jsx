import React, { useEffect, useRef } from 'react';
import { addEventListenersToVideo } from './index.js';

export default function HomePageSolutions() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const removeEventListeners = videoRefs.current.map(addEventListenersToVideo);

    return () => {
      removeEventListeners.forEach(remove => remove());
    };
  }, []);

  return (
    <div className="w-full bg-background border-b border-black">
      <div className="flex flex-col md:flex-row text-2xl font-semibold gap-4 items-center justify-center">
        <div className="mb-4">
          <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">Websites Development</h1>
          <video
            width={500}
            ref={el => videoRefs.current[0] = el}
            style={{ cursor: 'pointer' }}
            muted
          >
            <source src="/video1.mp4" type='video/mp4' />
          </video>
        </div>
        <div className="mb-4">
          <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">Software Development</h1>
          <video
            width={500}
            ref={el => videoRefs.current[1] = el}
            style={{ cursor: 'pointer' }}
            muted
          >
            <source src="/video1.mp4" type='video/mp4' />
          </video>
        </div>
        <div className="mb-4">
          <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">AI</h1>
          <video
            width={500}
            ref={el => videoRefs.current[4] = el}
            style={{ cursor: 'pointer' }}
            muted
          >
            <source src="/video1.mp4" type='video/mp4' />
          </video>
        </div>
        <div className="mb-4">
          <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">MACHINE LEARNING</h1>
          <video
            width={500}
            ref={el => videoRefs.current[5] = el}
            style={{ cursor: 'pointer' }}
            muted
          >
            <source src="/video1.mp4" type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='flex flex-col md:flex-row text-2xl font-semibold gap-4 items-center justify-center'>
          <div className="mb-4">
            <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">Mobile Application</h1>
            <video
              width={500}            
              ref={el => videoRefs.current[6] = el}
              style={{ cursor: 'pointer' }}
              muted
            >
              <source src="/video1.mp4" type='video/mp4' />
            </video>
          </div>
          <div className="mb-4">
            <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">CYBER SECURITY</h1>
            <video
              width={500}            
              ref={el => videoRefs.current[7] = el}
              style={{ cursor: 'pointer' }}
              muted
            >
              <source src="/video1.mp4" type='video/mp4' />
            </video>
          </div>
          <div className="mb-4">
            <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">DEVOPS </h1>
            <video
            width={500} 
              ref={el => videoRefs.current[8] = el}
              style={{ cursor: 'pointer' }}
              muted
            >
              <source src="/video1.mp4" type='video/mp4' />
            </video>
          </div>
          <div className="mb-4">
            <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">(AR) & (VR)</h1>
            <video
            width={500} 
              ref={el => videoRefs.current[9] = el}
              style={{ cursor: 'pointer' }}
              muted
            >
              <source src="/video1.mp4" type='video/mp4' />
            </video>
          </div>

        </div>
        <div className="flex flex-col md:flex-col  text-2xl font-semibold gap-4 items-center justify-center">
            <h1 className="text-white text-[2rem] leading-[4rem] font-semibold flex justify-center">BLOCK CHAIN</h1>
            <video
            width={500} 
              ref={el => videoRefs.current[10] = el}
              style={{ cursor: 'pointer' }}
              muted
            >
              <source src="/video1.mp4" type='video/mp4' />
            </video>
          </div>
    </div>
    
  );
}
