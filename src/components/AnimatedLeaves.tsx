import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

// Simple Leaf SVG
const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" fill="rgba(134, 239, 172, 0.2)" stroke="rgba(134, 239, 172, 0.4)" strokeWidth="1" />
    <path d="M12 22V2" stroke="rgba(134, 239, 172, 0.4)" strokeWidth="1" />
  </svg>
);

// Simple Bird SVG
const BirdIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
    <path d="M22 12C19.3333 11 14 8 12 12C10 8 4.66667 11 2 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function AnimatedLeaves() {
  const [leaves, setLeaves] = useState<{ id: number; x: number; delay: number; duration: number }[]>([]);
  const [birds, setBirds] = useState<{ id: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random leaves
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 20
    }));
    setLeaves(newLeaves);

    // Generate random birds
    const newBirds = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      y: 10 + Math.random() * 40, // percentage (top half)
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10
    }));
    setBirds(newBirds);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={`leaf-${leaf.id}`}
          className="absolute top-0 will-change-transform"
          initial={{ y: "-10vh", x: `${leaf.x}vw`, rotate: 0 }}
          animate={{
            y: "110vh",
            x: [`${leaf.x}vw`, `${leaf.x - 5}vw`, `${leaf.x + 5}vw`, `${leaf.x}vw`],
            rotate: 360
          }}
          transition={{
            y: { duration: leaf.duration, repeat: Infinity, ease: "linear", delay: leaf.delay },
            x: { duration: leaf.duration / 2, repeat: Infinity, ease: "easeInOut", delay: leaf.delay },
            rotate: { duration: leaf.duration / 3, repeat: Infinity, ease: "linear", delay: leaf.delay }
          }}
        >
          <LeafIcon />
        </motion.div>
      ))}

      {birds.map((bird) => (
        <motion.div
          key={`bird-${bird.id}`}
          className="absolute will-change-transform"
          initial={{ x: "-10vw", y: `${bird.y}vh` }}
          animate={{ x: "110vw", y: [`${bird.y}vh`, `${bird.y - 5}vh`, `${bird.y + 2}vh`, `${bird.y}vh`] }}
          transition={{
            x: { duration: bird.duration, repeat: Infinity, ease: "linear", delay: bird.delay },
            y: { duration: bird.duration / 2, repeat: Infinity, ease: "easeInOut", delay: bird.delay }
          }}
        >
          <BirdIcon />
        </motion.div>
      ))}
    </div>
  );
}
