import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// TO MAKE ONE CARD = FRONT AND BACK,
// THE FRONT= HAS THE IMAGE AND SINOPSE
// THE BACK= HAS ABOUT RESUME OF THE MOVIE/TV SHOW.

//IF I PRESS THE CARD= BACK




export default function SwipeableFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const x = useMotionValue(0);

  // Cores de fundo baseadas no arrasto
  const backgroundColor = useTransform(x, [-150, 0, 150], ['#1e1b4b', '#0f172a', '#1e1b4b']);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <motion.div
            style={{x, backgroundColor}}
            drag="x" // to allow horizontal way
            dragConstraints={{left:0, right:0}} // to allow the card back to the original position
            dragElastic={0.7}// Restrict the card movement to 70% of the drag distance
            whileTap={{scale:1.05}} // Visual effect to touch the card
            classname="w-full max-w-sm h-64 bg-white rounded-2xl shadow-xl flex items-center justify center cursor-grab
            active:cursor-grabbing border border-gray-200">

            </motion.div>
            <div>

            </div>
        </div>); };


