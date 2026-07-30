import { motion } from 'motion/react';
import leftImage from '../assets/images/regenerated_image_1784848708884.jpg';
import rightImage from '../assets/images/regenerated_image_1784849026986.jpg';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl text-[#0a473a] relative z-10 container mx-auto my-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3"
          >
            <div className="relative aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl">
              <img loading="lazy" 
                src={leftImage} 
                alt="Underwater Ocean" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#71ea27]">
              Rosie the African Elephant
            </h2>
            <p className="text-white mb-8 text-sm md:text-base leading-relaxed max-w-sm">
              We are passionate environmental advocates committed to protecting the wild and promoting sustainable living; The Elephant Rose Foundation aims to inspire the young through Rosie's story, (Rosie the African Elephant) promoting love, forgiveness, and environmental awareness. We strive to foster a compassion for all wildlife.
            </p>
            <button className="bg-[#71ea27] hover:bg-[#71ea27]/80 text-[#0a473a] font-semibold py-3 px-8 rounded-full transition-colors duration-300">
              Get a Copy
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/3"
          >
            <div className="relative aspect-[4/5] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl">
              <img loading="lazy" 
                src={rightImage} 
                alt="Sunlit Forest" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
