import React from 'react';
import Playlist from './Playlist';
import Spline from '@splinetool/react-spline';


function Footer() {
  return (

      <div className='flex flex-col items-center justify-center '>
        <h1 className='text-golden_old center font-cocogothic tracking-[0.4em] uppercase'>Lord of the ring</h1>
        <div className='w-full h-40'>
        <Spline className="w-10 h-10 flex flex-col mx-auto  gap-10"
        scene="https://prod.spline.design/dEMJaIsLBCWJx-2w/scene.splinecode" /></div>
      
    <Playlist/>
</div>
  );
}

export default Footer;