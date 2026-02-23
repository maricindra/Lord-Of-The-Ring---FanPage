import React from 'react';
import Button from './Button';

function Video_Texts() {
    return (
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-golden_old gap-5 text-xs">
          <p className=" tracking-[0.4em]  mb-9 font-cocogothic uppercase text-xs ">
            Go back to the december of</p>
          <h1 className="tracking-wider font-medium lg:text-9xl   sm:text-6xl    md:text-8xl
           mb-5 font-parfumerie bg-[linear-gradient(to_right,#000,#ca8a04,#713f12,#fde047,#ca8a04,#000)] bg-clip-text text-transparent ">
            Lord of the Rings</h1>     
          <Button/>
        </div>
        
    );
}
    export default Video_Texts;