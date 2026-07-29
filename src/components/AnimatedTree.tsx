import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function AnimatedTree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Grow the tree trunk
  const trunkHeight = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);
  
  // Show branches sequentially
  const branch1Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const branch1Scale = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  
  const branch2Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const branch2Scale = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  
  const branch3Opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const branch3Scale = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative z-10 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="text-center mb-24 max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif font-bold tracking-wider mb-6 text-green-300">OUR GROWING COMMITMENT</h2>
        <p className="text-gray-400">As you scroll, witness our commitment to the environment grow. Every plant purchased contributes to a greener planet.</p>
      </div>

      <div className="relative h-[400px] w-full max-w-[300px] mx-auto flex justify-center">
        {/* Trunk */}
        <motion.div 
          className="w-4 bg-gradient-to-t from-orange-900 to-green-900 rounded-full absolute bottom-0 origin-bottom"
          style={{ height: trunkHeight }}
        />

        {/* Branch 1 (Left) */}
        <motion.div 
          className="absolute bottom-32 -left-16 origin-bottom-right"
          style={{ opacity: branch1Opacity, scale: branch1Scale }}
        >
          <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 80 C 80 60, 40 40, 0 0" stroke="url(#paint0_linear)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="10" cy="10" r="15" fill="rgba(74, 222, 128, 0.6)" className="blur-sm" />
            <defs>
              <linearGradient id="paint0_linear" x1="100" y1="80" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14532d" />
                <stop offset="1" stopColor="#15803d" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Branch 2 (Right) */}
        <motion.div 
          className="absolute bottom-48 -right-20 origin-bottom-left"
          style={{ opacity: branch2Opacity, scale: branch2Scale }}
        >
          <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 90 C 20 70, 60 50, 120 0" stroke="url(#paint1_linear)" strokeWidth="5" strokeLinecap="round" />
            <circle cx="110" cy="10" r="20" fill="rgba(74, 222, 128, 0.5)" className="blur-md" />
            <defs>
              <linearGradient id="paint1_linear" x1="0" y1="90" x2="120" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#14532d" />
                <stop offset="1" stopColor="#16a34a" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Branch 3 (Top Left) */}
        <motion.div 
          className="absolute bottom-64 -left-12 origin-bottom-right"
          style={{ opacity: branch3Opacity, scale: branch3Scale }}
        >
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 60 C 60 40, 30 30, 0 0" stroke="url(#paint2_linear)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="10" cy="10" r="25" fill="rgba(74, 222, 128, 0.8)" className="blur-md" />
            <defs>
              <linearGradient id="paint2_linear" x1="80" y1="60" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#15803d" />
                <stop offset="1" stopColor="#22c55e" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        {/* Top Canopy */}
        <motion.div
          className="absolute top-0 w-32 h-32 bg-green-500/40 rounded-full blur-2xl origin-bottom"
          style={{ opacity: branch3Opacity, scale: branch3Scale }}
        />
      </div>
    </section>
  );
}
