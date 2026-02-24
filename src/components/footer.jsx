import React from 'react';
import Playlist from './Playlist';
import Spline from '@splinetool/react-spline';


function Footer() {
  return (

      <div className='flex flex-col items-center justify-center '>
        <h1 className="text-golden_old center font-cocogothic tracking-[0.4em] uppercase">Lord of the ring</h1>
        <Spline className="w-8 h-80 md:w-100 md:h-100 justify-center items-center flex flex-col mx-auto py-10 gap-10"
        scene="https://prod.spline.design/dEMJaIsLBCWJx-2w/scene.splinecode" />
      
    <Playlist/>
</div>
  );
}

export default Footer;