import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface IntroPreloaderProps {
  onComplete: () => void;
}

export default function IntroPreloader({ onComplete }: IntroPreloaderProps) {
  const textToType = "Track the Journey, not the days";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < textToType.length) {
        setDisplayedText(textToType.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 80); // Professional typing speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTypingComplete) {
      // Hold the message for 1.8 seconds before transition
      const timeout = setTimeout(() => {
        onComplete();
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [isTypingComplete, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Smooth cubic-bezier transition
      className="fixed inset-0 z-50 bg-[#030014] flex flex-col items-center justify-center select-none"
    >
      {/* Premium Cyber ambient glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 blur-[120px] pointer-events-none" />
      
      <div className="relative flex items-center justify-center max-w-4xl px-6">
        <h1 className="font-mono text-xl md:text-4xl font-black uppercase tracking-[0.15em] text-white/95 text-center italic drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] leading-relaxed">
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
            className="inline-block w-[3px] h-6 md:h-10 ml-2 bg-cyan-400 align-middle shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          />
        </h1>
      </div>
    </motion.div>
  );
}
