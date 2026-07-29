import { motion } from 'motion/react';
import plantImage from '../assets/images/african_hands_baobab_seedling_1784842129198.jpg';
import turtleImage from '../assets/images/turtle_underwater_1784825424782.jpg';

export default function RebuildingSection() {
  return (
    <section className="py-24 bg-transparent text-[#0a473a] relative z-10 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Rebuilding Ecosystems,<br />Restoring Balance
          </h2>
          <p className="text-[#2b5a4d] text-base md:text-lg leading-relaxed">
            We focus on reviving degraded ecosystems to restore harmony between nature and humanity, ensuring a sustainable and thriving environment for all living beings.
          </p>
        </div>

        {/* First Block - Plant Image */}
        <div className="mb-32 relative">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[70%] z-0"
            >
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-lg">
                <img loading="lazy" 
                  src={plantImage} 
                  alt="Hands holding plant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Card Container */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-[45%] md:absolute md:right-0 md:-bottom-12 z-10 mt-[-60px] md:mt-0 px-4 md:px-0"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-[40px] p-10 md:p-14 relative overflow-hidden group">
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black mb-6 text-right leading-tight tracking-tight text-white group-hover:text-[#71ea27] transition-colors duration-300">
                    Achieve More,<br />Together
                  </h3>
                  <p className="text-[#444444] font-medium text-sm md:text-base mb-8 text-right leading-relaxed max-w-sm ml-auto">
                    Explore our projects that drive meaningful<br/>change and help protect the forests for<br/>future generation.
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-[#c60c91] hover:bg-[#a10a76] text-white font-bold py-2.5 px-8 rounded-full transition-colors duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Block - Turtle Image */}
        <div className="relative">
          <div className="flex flex-col md:flex-row-reverse items-center">
            {/* Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-[70%] z-0"
            >
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-lg">
                <img loading="lazy" 
                  src={turtleImage} 
                  alt="Turtle underwater" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Card Container */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-[45%] md:absolute md:left-0 md:-bottom-12 z-10 mt-[-60px] md:mt-0 px-4 md:px-0"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.1),inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-[40px] p-10 md:p-14 relative overflow-hidden group">
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-black mb-6 text-left leading-tight tracking-tight text-white group-hover:text-[#71ea27] transition-colors duration-300">
                    One Vision,<br />Many Hands
                  </h3>
                  <p className="text-[#444444] font-medium text-sm md:text-base mb-8 text-left leading-relaxed max-w-sm mr-auto">
                    Our work is dedicated to imparting<br/>knowledge of wildlife custodianship and<br/>children's environmental education.
                  </p>
                  <div className="flex justify-start">
                    <button className="bg-[#c60c91] hover:bg-[#a10a76] text-white font-bold py-2.5 px-8 rounded-full transition-colors duration-300">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
