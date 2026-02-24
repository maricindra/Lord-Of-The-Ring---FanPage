import React from 'react';
import Playlist from './Playlist';
import Spline from '@splinetool/react-spline';


function Footer() {
  return (

      <div className="w-50 h-50 md:w-100 md:h-100 justify-center items-center flex flex-col mx-auto ">
        <h1 className="text-golden_old center font-cocogothic tracking-[0.4em] uppercase">Lord of the ring</h1>
        <Spline
        scene="https://prod.spline.design/dEMJaIsLBCWJx-2w/scene.splinecode" />
      
    <Playlist/>
</div>
  );
}

export default Footer;